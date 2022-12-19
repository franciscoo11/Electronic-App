import { Router } from 'express';
import passport from 'passport';
// import GoogleTokenStrategy  from 'passport-google-oidc-token';
const router = Router();

router.get('/', passport.authenticate('google'));




export default router;