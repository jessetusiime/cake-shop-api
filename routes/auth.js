const router = require("express").Router();
const passport = require("passport");

// Login with GitHub
router.get(
    "/login",
    passport.authenticate("github", { scope: ["user:email"] })
);

// GitHub callback
router.get(
    "/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/api-docs"
    }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect("/api-docs");
    }
);

// Logout
router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }

        req.session.destroy(() => {
            res.redirect("/api-docs");
        });
    });
});

// Check login status
router.get("/profile", (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Not logged in"
        });
    }

    res.status(200).json(req.user);
});

module.exports = router;