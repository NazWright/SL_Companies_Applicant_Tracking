module.exports = function (app) {
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

  app.get("/register", function (req, res) {
    if (req.user) {
      res.redirect("Dashboard/index");
    } else {
      res.render("Auth/auth-register", {
        message: req.flash("message"),
        error: req.flash("error"),
      });
    }
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
};
