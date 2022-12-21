import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';
import Pay from '../models/Pay';
import Product from '../models/Product';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN || ''
});

export const initPayment = async (req: Request, res: Response) => {
  const preference = {
    payer: {
      email: req.body.email,
      name: req.body.name,
    },
    items: [
      {
        title: req.body.title,
        unit_price: req.body.unit_price,
        quantity: 1,
      }
    ],
    back_urls: {
      success: 'http://localhost:3000/api/v1/payments/success',
      failure: 'http://localhost:3000/api/v1/payments/failure'
    },
  };

  try {
    const createPreference = await mercadopago.preferences.create(preference);
    const createPay = new Pay({
      ...req.body,
      amount: req.body.unit_price,
      buyer: req.body.userId,
    });
    createPay.paymentId = createPreference.body.id;
    await createPay.save();
    res.status(201).json(createPreference);
  } catch (error) {
    handlerHttpError(res, error);
  }
};

export const paySuccess = async(req: Request, res: Response) => {
  try {
    const pay = await Pay.findOne({ paymentId: req.query.preference_id }).populate('buyer').populate('products');
    if(!pay) return handlerRespError(res, 'NOT_PAYMENT_FOUNDED', 400);

    const updateStock = await pay.products.map( async(product) => {
      const quantity = product.stock || 0;
      const productToUpdate = await Product.findOne({ _id: product._id });
      if (productToUpdate) {
        productToUpdate.stock = productToUpdate.stock - quantity;
        await productToUpdate.save();
      }
    });

    Promise.all(updateStock);
    pay.status = 'approved';

    await pay?.save();
    res.status(200).json(pay);
  } catch (error) {
    handlerHttpError(res,error);
  }
};

export const payFailure = async (req: Request, res: Response) => {
  try {
    const pay = await Pay.findOne({ paymentId: req.query.preference_id }).populate('buyer');
    if(!pay) return handlerRespError(res, 'NOT_PAYMENT_FOUNDED', 400);

    pay.status = 'rejected';
    await pay.save();

    res.status(200).json(pay);
  } catch (error) {
    handlerHttpError(res,error);
  }
};