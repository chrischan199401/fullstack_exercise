const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

passport.use(
	new googleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("accessToken: ", accessToken);
			console.log("refreshToken: ", refreshToken);
			console.log("profile: ", profile);
		}
	)
);
