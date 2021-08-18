module.exports = (app, passport) => {
  require("./authRoutes")(app);
  //require("./fileUploadRoutes")(app);

  function isUserAllowed(req, res, next) {
    if (req.user) {
      return next();
    } else {
      res.redirect("/login");
    }
  }

  app.get("/", isUserAllowed, function (req, res) {
    res.locals = { title: "Dashboard", user: req.user };
    res.render("Dashboard/index");
  });

  app.get("/dashboard-2", isUserAllowed, function (req, res) {
    res.locals = { title: "Dashboard Two", user: req.user };
    res.render("Dashboard/dashboard-2");
  });

  // Layouts
  app.get("/layouts-horizontal", isUserAllowed, function (req, res) {
    res.locals = { title: "Horizontal", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsHorizontal" });
  });
  app.get("/layouts-dark-sidebar", isUserAllowed, function (req, res) {
    res.locals = { title: "Light Sidebar", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsDarkSidebar" });
  });
  app.get("/layouts-compact-sidebar", isUserAllowed, function (req, res) {
    res.locals = { title: "Compact Sidebar", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsCompactSidebar" });
  });
  app.get("/layouts-icon-sidebar", isUserAllowed, function (req, res) {
    res.locals = { title: "Icon Sidebar", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsIconSidebar" });
  });
  app.get("/layouts-boxed", isUserAllowed, function (req, res) {
    res.locals = { title: "Boxed Width", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsBoxed" });
  });
  app.get("/layouts-preloader", isUserAllowed, function (req, res) {
    res.locals = { title: "Preloader", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsPreloader" });
  });
  app.get("/layouts-colored-sidebar", isUserAllowed, function (req, res) {
    res.locals = { title: "Colored Sidebar", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsColoredSidebar" });
  });

  app.get("/layouts-hori-topbar-dark", isUserAllowed, function (req, res) {
    res.locals = { title: "Topbar Dark", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsHTopbarDark" });
  });
  app.get("/layouts-hori-boxed-width", isUserAllowed, function (req, res) {
    res.locals = { title: "Boxed Width", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsHBoxed" });
  });
  app.get("/layouts-hori-preloader", isUserAllowed, function (req, res) {
    res.locals = { title: "Preloader", user: req.user };
    res.render("Dashboard/index", { layout: "layoutsHPreloader" });
  });

  // Color Theme vertical
  app.get("/vertical-dark", isUserAllowed, function (req, res) {
    res.locals = { title: "Vertical Dark", user: req.user };
    res.render("Dashboard/index", { layout: "vertical-dark-layout" });
  });

  app.get("/vertical-rtl", isUserAllowed, function (req, res) {
    res.locals = { title: "Vertical Rtl", user: req.user };
    res.render("Dashboard/index", { layout: "vertical-rtl-layout" });
  });

  // Color Theme Horizontal
  app.get("/horizontal-dark", isUserAllowed, function (req, res) {
    res.locals = { title: "Horizontal Dark", user: req.user };
    res.render("Dashboard/index", { layout: "horizontal-dark-layout" });
  });

  app.get("/horizontal-rtl", isUserAllowed, function (req, res) {
    res.locals = { title: "Horizontal Rtl", user: req.user };
    res.render("Dashboard/index", { layout: "horizontal-rtl-layout" });
  });

  // Calendar
  app.get("/calendar", isUserAllowed, function (req, res) {
    res.locals = { title: "Calendar", user: req.user };
    res.render("Calendar/calendar");
  });

  // Chat
  app.get("/chat", isUserAllowed, function (req, res) {
    res.locals = { title: "Chat", user: req.user };
    res.render("Chat/chat");
  });

  // Ecomerce
  app.get("/ecommerce-products", isUserAllowed, function (req, res) {
    res.locals = { title: "Products", user: req.user };
    res.render("Ecommerce/ecommerce-products");
  });
  app.get("/ecommerce-product-detail", isUserAllowed, function (req, res) {
    res.locals = { title: "Product Detail", user: req.user };
    res.render("Ecommerce/ecommerce-product-detail");
  });
  app.get("/ecommerce-orders", isUserAllowed, function (req, res) {
    res.locals = { title: "Orders", user: req.user };
    res.render("Ecommerce/ecommerce-orders");
  });
  app.get("/ecommerce-customers", isUserAllowed, function (req, res) {
    res.locals = { title: "Customers", user: req.user };
    res.render("Ecommerce/ecommerce-customers");
  });
  app.get("/ecommerce-cart", isUserAllowed, function (req, res) {
    res.locals = { title: "Cart", user: req.user };
    res.render("Ecommerce/ecommerce-cart");
  });
  app.get("/ecommerce-checkout", isUserAllowed, function (req, res) {
    res.locals = { title: "Checkout", user: req.user };
    res.render("Ecommerce/ecommerce-checkout");
  });
  app.get("/ecommerce-shops", isUserAllowed, function (req, res) {
    res.locals = { title: "Shops", user: req.user };
    res.render("Ecommerce/ecommerce-shops");
  });
  app.get("/ecommerce-add-product", isUserAllowed, function (req, res) {
    res.locals = { title: "Add Product", user: req.user };
    res.render("Ecommerce/ecommerce-add-product");
  });

  // Email
  app.get("/email-inbox", isUserAllowed, function (req, res) {
    res.locals = { title: "Inbox", user: req.user };
    res.render("Email/email-inbox");
  });
  app.get("/email-read", isUserAllowed, function (req, res) {
    res.locals = { title: "Email Read", user: req.user };
    res.render("Email/email-read");
  });

  // Invoice
  app.get("/invoices-list", isUserAllowed, function (req, res) {
    res.locals = { title: "Invoice List", user: req.user };
    res.render("Invoice/invoices-list");
  });
  app.get("/invoices-detail", isUserAllowed, function (req, res) {
    res.locals = { title: "Invoice Detail", user: req.user };
    res.render("Invoice/invoices-detail");
  });

  // Contacts
  app.get("/contacts-grid", isUserAllowed, function (req, res) {
    res.locals = { title: "User Grid", user: req.user };
    res.render("Contacts/contacts-grid");
  });
  app.get("/contacts-list", isUserAllowed, function (req, res) {
    res.locals = { title: "User List", user: req.user };
    res.render("Contacts/contacts-list");
  });
  app.get("/contacts-profile", isUserAllowed, function (req, res) {
    res.locals = { title: "Profile", user: req.user };
    res.render("Contacts/contacts-profile");
  });

  // Pages
  app.get("/pages-starter", isUserAllowed, function (req, res) {
    res.locals = { title: "Starter Page" };
    res.render("Pages/pages-starter");
  });
  app.get("/pages-timeline", isUserAllowed, function (req, res) {
    res.locals = { title: "Timeline" };
    res.render("Pages/pages-timeline");
  });
  app.get("/pages-faqs", isUserAllowed, function (req, res) {
    res.locals = { title: "FAQs" };
    res.render("Pages/pages-faqs");
  });
  app.get("/pages-pricing", isUserAllowed, function (req, res) {
    res.locals = { title: "Pricing" };
    res.render("Pages/pages-pricing");
  });

  // UI
  app.get("/ui-alerts", isUserAllowed, function (req, res) {
    res.locals = { title: "Alerts" };
    res.render("Ui/ui-alerts");
  });
  app.get("/ui-buttons", isUserAllowed, function (req, res) {
    res.locals = { title: "Buttons" };
    res.render("Ui/ui-buttons");
  });
  app.get("/ui-cards", isUserAllowed, function (req, res) {
    res.locals = { title: "Cards" };
    res.render("Ui/ui-cards");
  });
  app.get("/ui-carousel", isUserAllowed, function (req, res) {
    res.locals = { title: "Carousel" };
    res.render("Ui/ui-carousel");
  });
  app.get("/ui-dropdowns", isUserAllowed, function (req, res) {
    res.locals = { title: "Dropdowns" };
    res.render("Ui/ui-dropdowns");
  });
  app.get("/ui-grid", isUserAllowed, function (req, res) {
    res.locals = { title: "Grid" };
    res.render("Ui/ui-grid");
  });
  app.get("/ui-images", isUserAllowed, function (req, res) {
    res.locals = { title: "Images" };
    res.render("Ui/ui-images");
  });
  app.get("/ui-lightbox", isUserAllowed, function (req, res) {
    res.locals = { title: "Lightbox" };
    res.render("Ui/ui-lightbox");
  });
  app.get("/ui-modals", isUserAllowed, function (req, res) {
    res.locals = { title: "Modals" };
    res.render("Ui/ui-modals");
  });
  app.get("/ui-rangeslider", isUserAllowed, function (req, res) {
    res.locals = { title: "Range Slider" };
    res.render("Ui/ui-rangeslider");
  });
  app.get("/ui-session-timeout", isUserAllowed, function (req, res) {
    res.locals = { title: "Session Timeout" };
    res.render("Ui/ui-session-timeout");
  });
  app.get("/ui-progressbars", isUserAllowed, function (req, res) {
    res.locals = { title: "Progress Bars" };
    res.render("Ui/ui-progressbars");
  });
  app.get("/ui-sweet-alert", isUserAllowed, function (req, res) {
    res.locals = { title: "Sweet Alert" };
    res.render("Ui/ui-sweet-alert");
  });
  app.get("/ui-tabs-accordions", isUserAllowed, function (req, res) {
    res.locals = { title: "Tabs & Accordions" };
    res.render("Ui/ui-tabs-accordions");
  });
  app.get("/ui-typography", isUserAllowed, function (req, res) {
    res.locals = { title: "Typography" };
    res.render("Ui/ui-typography");
  });
  app.get("/ui-video", isUserAllowed, function (req, res) {
    res.locals = { title: "Video" };
    res.render("Ui/ui-video");
  });
  app.get("/ui-general", isUserAllowed, function (req, res) {
    res.locals = { title: "General" };
    res.render("Ui/ui-general");
  });
  app.get("/ui-colors", isUserAllowed, function (req, res) {
    res.locals = { title: "Colors" };
    res.render("Ui/ui-colors");
  });
  app.get("/ui-rating", isUserAllowed, function (req, res) {
    res.locals = { title: "Rating" };
    res.render("Ui/ui-rating");
  });
  app.get("/ui-notifications", isUserAllowed, function (req, res) {
    res.locals = { title: "Notifications" };
    res.render("Ui/ui-notifications");
  });

  // Forms
  app.get("/form-elements", isUserAllowed, function (req, res) {
    res.locals = { title: "Basic Elements", user: req.user };
    res.render("Form/form-elements");
  });
  app.get("/form-validation", isUserAllowed, function (req, res) {
    res.locals = { title: "Validation", user: req.user };
    res.render("Form/form-validation");
  });
  app.get("/form-advanced", isUserAllowed, function (req, res) {
    res.locals = { title: "Advanced Plugins" };
    res.render("Form/form-advanced");
  });
  app.get("/form-editors", isUserAllowed, function (req, res) {
    res.locals = { title: "Editors" };
    res.render("Form/form-editors");
  });
  app.get("/form-uploads", isUserAllowed, function (req, res) {
    res.locals = { title: "File Uploads" };
    res.render("Form/form-uploads");
  });
  app.get("/form-xeditable", isUserAllowed, function (req, res) {
    res.locals = { title: "Xeditable" };
    res.render("Form/form-xeditable");
  });
  app.get("/form-repeater", isUserAllowed, function (req, res) {
    res.locals = { title: "Repeater" };
    res.render("Form/form-repeater");
  });
  app.get("/form-wizard", isUserAllowed, function (req, res) {
    res.locals = { title: "Wizard" };
    res.render("Form/form-wizard");
  });
  app.get("/form-mask", isUserAllowed, function (req, res) {
    res.locals = { title: "Form Mask" };
    res.render("Form/form-mask");
  });

  // Tables
  app.get("/tables-basic", isUserAllowed, function (req, res) {
    res.locals = { title: "Bootstrap Basic" };
    res.render("Tables/tables-basic");
  });
  app.get("/tables-datatable", isUserAllowed, function (req, res) {
    res.locals = { title: "Datatables" };
    res.render("Tables/tables-datatable");
  });
  app.get("/tables-responsive", isUserAllowed, function (req, res) {
    res.locals = { title: "Responsive" };
    res.render("Tables/tables-responsive");
  });
  app.get("/tables-editable", isUserAllowed, function (req, res) {
    res.locals = { title: "Editable" };
    res.render("Tables/tables-editable");
  });

  // Charts
  app.get("/charts-apex", isUserAllowed, function (req, res) {
    res.locals = { title: "Apex" };
    res.render("Charts/charts-apex");
  });
  app.get("/charts-chartjs", isUserAllowed, function (req, res) {
    res.locals = { title: "Chartjs" };
    res.render("Charts/charts-chartjs");
  });
  app.get("/charts-flot", isUserAllowed, function (req, res) {
    res.locals = { title: "Flot" };
    res.render("Charts/charts-flot");
  });
  app.get("/charts-knob", isUserAllowed, function (req, res) {
    res.locals = { title: "Jquery Knob" };
    res.render("Charts/charts-knob");
  });
  app.get("/charts-sparkline", isUserAllowed, function (req, res) {
    res.locals = { title: "Sparkline" };
    res.render("Charts/charts-sparkline");
  });

  // Icons
  app.get("/icons-unicons", isUserAllowed, function (req, res) {
    res.locals = { title: "Unicons" };
    res.render("Icons/icons-unicons");
  });
  app.get("/icons-boxicons", isUserAllowed, function (req, res) {
    res.locals = { title: "Boxicons" };
    res.render("Icons/icons-boxicons");
  });
  app.get("/icons-materialdesign", isUserAllowed, function (req, res) {
    res.locals = { title: "Material Design" };
    res.render("Icons/icons-materialdesign");
  });
  app.get("/icons-dripicons", isUserAllowed, function (req, res) {
    res.locals = { title: "Dripicons" };
    res.render("Icons/icons-dripicons");
  });
  app.get("/icons-fontawesome", isUserAllowed, function (req, res) {
    res.locals = { title: "Font Awesome" };
    res.render("Icons/icons-fontawesome");
  });

  // Maps
  app.get("/maps-google", isUserAllowed, function (req, res) {
    res.locals = { title: "Google" };
    res.render("Maps/maps-google");
  });
  app.get("/maps-vector", isUserAllowed, function (req, res) {
    res.locals = { title: "Vector" };
    res.render("Maps/maps-vector");
  });
  app.get("/maps-leaflet", isUserAllowed, function (req, res) {
    res.locals = { title: "Leaflet" };
    res.render("Maps/maps-leaflet");
  });

  // Users

  // app.post("/api/sign-up", usersController.createUser);

  // app.post("/api/user", usersController.retrieveUserById);

  // app.put("/api/user", usersController.updateUser);

  // app.delete("/api/user", usersController.deleteUser);

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
    res.redirect("/");
  });

  // jobs routes

  //application routes
  app.get("/application", (req, res) => {
    var today = new Date();
    const month =
      today.getMonth() < 10 ? `0${today.getUTCMonth()}` : today.getUTCMonth();
    today = `${today.getFullYear()}-${month}-${today.getDate()}`;
    res.locals = { title: "Application", user: req.user };
    res.render("Application/step-1.ejs");
  });
};
