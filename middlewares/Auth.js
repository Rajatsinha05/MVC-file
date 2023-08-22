const isAuth = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.redirect("/student/login");
  }
};


module.exports =isAuth