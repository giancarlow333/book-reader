// Redirects to the login page if you are not logged in
// Source: Class activity 14.24
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
module.exports = withAuth;
  