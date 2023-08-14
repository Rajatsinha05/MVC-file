const check_data = (req, res, next) => {
  let { name, number, course } = req.body;
  if (name && number && course) {
    next();
  } else {
    res.send(" enter a vlaid details");
  }
};

const checkCookies = (req, res, next) => {
  console.log(req.cookies);

  if(req.cookies.user){

    next();
  }
  else{
    res.redirect("/student/signup");
  }
}
module.exports = { check_data,checkCookies };
