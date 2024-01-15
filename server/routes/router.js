import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const router = express.Router();

//----------REGISTRATION--------------//
router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  try {
    if ((!name, !email, !password, !cpassword))
      return res.send({ message: "plz fill deatails", code: 401 });
    if (password !== cpassword)
      return res.send({ message: "passwords must match", code: 401 });

    const isPresent = await User.findOne({ email });
    if (isPresent) {
      return res.send({ message: "User already exist", code: 401 });
    } else {
      const hashpassword = await bcrypt.hash(password, 12);

      const userCreation = new User({
        name,
        email,
        password: hashpassword,
        cpassword: hashpassword,
      });

      const newUser = await userCreation.save();
      res.send({ message: "User Created successfully", code: 201, newUser });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "Server Error", code: 500 });
  }
});

//----------LOGIN--------------//
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if ((!email, !password))
      return res.send({ message: "plz fill deatails", code: 401 });
    const isPresent = await User.findOne({ email });
    if (!isPresent) {
      return res.send({ message: "User not exist", code: 401 });
    } else {
      const isMatch = await bcrypt.compare(password, isPresent.password);
      if (!isMatch) {
        return res.send({ message: "Invalid Credentials password", code: 401 });
      } else {
        const token = jwt.sign({ userId: isPresent._id }, process.env.KEY);
        res.send({ message: "token genearted", token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "Server Error", code: 500 });
  }
});

export default router;
