const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikunjnavapara1230@gmail.com",
    pass: "andznvkfuwivehxe",
  },
});


module.exports=transport

