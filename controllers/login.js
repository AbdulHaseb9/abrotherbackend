const user = require("../models/user");
const bcrypt = require("bcrypt");

const login = async (req, resp) => {
  try {
    const { emailorphone, password } = req.body;
    if (emailorphone && password) {
      const finduser = await user.findOne({ emailorphone });
      if (finduser) {
        const comparepassword = await bcrypt.compare(
          password,
          finduser.password
        );
        if (comparepassword) {
          resp.status(202).json("Login Successfully");
        } else {
          resp.status(400).json("Invalid Credentials");
        }
      } else {
        resp.json("email not found");
      }
    } else {
      resp.status(400).jso("please fill all fields properly");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
