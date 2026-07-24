const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "https://cake-shop-api-rzun.onrender.com/github/callback",
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});