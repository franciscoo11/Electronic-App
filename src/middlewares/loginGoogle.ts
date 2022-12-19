import GoogleTokenStrategy  from 'passport-google-oidc-token';
import passport from 'passport';
import User from '../models/User';


passport.use(new GoogleTokenStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/localhost:3000/api/v1/login',
  scope: [ 'profile' ]
},async function verify  (profile) {
  try {
    if(!profile.email) return 'Id was not sended logingoogle';
    const userById = await User.findOne(profile.email);
    return userById;

  } catch (error) {
    return 'ERROR_IN_GET_USER_LOGINGOOGLE';
  }
}));