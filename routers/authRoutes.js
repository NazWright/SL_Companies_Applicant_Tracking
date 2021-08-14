const passport = require("passport");

module.exports = (app) => {
  // Inner Auth
  app.get("/auth-login", function (req, res) {
    res.locals = { title: "Login" };
    res.render("AuthInner/auth-login");
  });
  app.get("/auth-register", function (req, res) {
    res.locals = { title: "Register" };
    res.render("AuthInner/auth-register");
  });
  app.get("/auth-recoverpw", function (req, res) {
    res.locals = { title: "Recover Password" };
    res.render("AuthInner/auth-recoverpw");
  });
  app.get("/auth-lock-screen", function (req, res) {
    res.locals = { title: "Lock Screen" };
    res.render("AuthInner/auth-lock-screen");
  });

  // Auth Pages

  app.get("/pages-maintenance", function (req, res) {
    res.locals = { title: "Maintenance" };
    res.render("Pages/pages-maintenance");
  });
  app.get("/pages-comingsoon", function (req, res) {
    res.locals = { title: "Coming Soon" };
    res.render("Pages/pages-comingsoon");
  });
  app.get("/pages-404", function (req, res) {
    res.locals = { title: "Error 404" };
    res.render("Pages/pages-404");
  });
  app.get("/pages-500", function (req, res) {
    res.locals = { title: "Error 500" };
    res.render("Pages/pages-500");
  });

  app.get("/login", function (req, res) {
    res.render("Auth/auth-login", {
      message: req.flash("message"),
      error: req.flash("error"),
    });
  });

  app.get("/forgot-password", function (req, res) {
    res.render("Auth/auth-forgot-password", {
      message: req.flash("message"),
      error: req.flash("error"),
    });
  });

  // app.post('/post-forgot-password', urlencodeParser, function (req, res) {
  // 	const validUser = users.filter(usr => usr.email === req.body.email);
  // 	if (validUser['length'] === 1) {
  // 		req.flash('message', 'We have e-mailed your password reset link!');
  // 		res.redirect('/forgot-password');
  // 	} else {
  // 		req.flash('error', 'Email Not Found !!');
  // 		res.redirect('/forgot-password');
  // 	}
  // });

  app.post(
    "/api/login",
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
      successRedirect: "/",
    }),
    function (req, res) {
      console.log("success");
      res.redirect("/");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.locals = { ...res.locals };
      res.redirect("/");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user || false);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });
};
