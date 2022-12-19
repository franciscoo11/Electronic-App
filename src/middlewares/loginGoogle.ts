import passportGoogle from 'passport-google-oauth20';
import passport from 'passport';
import User from '../models/User';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../utils/secrets';
const GoogleStrategy = passportGoogle.Strategy;


//aca tenias un GoogleTokenStrategy y pues segun lo que vi en la pagina que mandaste es solo GoogleStrategy,
//ademas la propiedad clientSecret no existe en GoogleTokenStrategy
passport.use(new GoogleStrategy({
  //aca saltaba error tambien porque typescript se enoja si le traes una variable de entorno y no le especificas el tipo entonces
  //tuve que crear un archivo en el que exportaba las variables de entorno y las especificaba como strings
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/localhost:3000/api/v1/login',
  scope: [ 'profile' ]
  //aca esto dejemoslo en any mientras averiguamos que tipo deberia ser 
},async function verify  (profile:any) {
  try {
    if(!profile.email) return 'Id was not sended logingoogle';
    const userById = await User.findOne(profile.email);
    return userById;

  } catch (error) {
    return 'ERROR_IN_GET_USER_LOGINGOOGLE';
  }
}));