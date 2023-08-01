const check_data = (req, res, next) => {
  let { name, number, course } = req.body;
  if (name && number && course) {
    next();
  } else {
    res.send(" enter a vlaid details");
  }
};

module.exports = { check_data };
