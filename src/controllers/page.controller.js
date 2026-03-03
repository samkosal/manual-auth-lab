const homePage = (req, res) => {
    res.render("home", { title: "Campus Club Hub" });
};

const dashboardPage = (req, res) => {
    // console.log(req.user); // Log the user object to the console
    // ...existing code...
    
    res.render("dashboard", {
        title: "Dashboard",
        user: req.user
    });
    console.log(req.user)
};

const adminPage = (req, res) => {
    res.render("admin", { title: "Admin Panel" });
};

export default { homePage, dashboardPage, adminPage };