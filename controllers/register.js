const bcrypt = require("bcrypt");
const user = require("../models/user");
require("dotenv").config();

const register = async (req, resp) => {
  try {
    const { name, emailorphone, password } = req.body;
    if (name && emailorphone && password) {
      const alreadyexist = await user.findOne({ emailorphone });
      if (alreadyexist) {
        return resp
          .status(402)
          .json("This email is already associated with an account.");
      } else {
        const hashpassword = await bcrypt.hash(
          password, 7 );
        const saveuser = new user({
          name,
          emailorphone,
          password: hashpassword,
        });
        await saveuser.save();
        resp.status(202).json("Registered Successfully");
      }
    } else {
      resp.json("Please fill all fields Properly");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = register;
