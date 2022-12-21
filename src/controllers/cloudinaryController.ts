import cloudinary from '../config/cloudinaryConfig';

export const convertToCloudinaryUrlUser = async (
  url: string,
  email: string,
  folder: string
) => {
  const options = {
    upload_preset: 'Elect-app',
    allowed_formats: ['png', 'jpg', 'jpeg'],
    folder: `Elect-app/users/${email}/${folder}`,
    use_filename: false,
    unique_filename: false,
    overwrite: true,
    public_id: `${email}-${folder}`,
  };
  const upImg = await cloudinary.uploader.upload(url, options, (error:any) => {
    if (error) return error;
  });
  return upImg.secure_url;
};

export const convertToCloudinaryUrlProducts = async (
  url: string,
  name: string,
  folder: string
) => {
  const options = {
    upload_preset: 'Elect-app',
    allowed_formats: ['png', 'jpg', 'jpeg'],
    folder: `Elect-app/Products/${name}/${folder}`,
    use_filename: false,
    unique_filename: false,
    overwrite: true,
    public_id: `${name}-${folder}`,
  };
  const upImg = await cloudinary.uploader.upload(url, options, (error: any) => {
    if (error) return error;
  });
  return upImg.secure_url;
};

