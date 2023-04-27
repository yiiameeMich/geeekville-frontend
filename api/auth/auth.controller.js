const User = require("../user/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateAccessToken = (login, id) => {
  const payload = {
    login,
    id
  }
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '24h'})
}

class authController {

  async register(req, res) {
    try {
      const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
      }

      const isLoginTaken = await User.findOne({username: userData.username})

      if (isLoginTaken) {
        return res.status(400).json({message: "This login is already taken"})
      }

      const passwordHashed = bcrypt.hashSync(userData.password, 7)

      const newUser = await new User({
        username: userData.username,
        password: passwordHashed,
        email: userData.email,
        phoneNumber: userData.phoneNumber
      })

      await newUser.save()

      const token = generateAccessToken(newUser.username, newUser._id)

      return res.json({
          token,
          username: newUser.username,
          bonuses: newUser.bonusesAmount,
      })

    } catch (error) {
      console.log(error)
      return res.status(400).json({message: "Registration error"})
    }

  }

  async login(req, res) {
    try {
      const userData = {
        username: req.body.username,
        password: req.body.password,
      }

      const user = await User.findOne({ username: userData.username })

      if (!user) {
        return res.status(400).json({ message: "This user does not exist or given data is incorrect" })
      }

      // if (!user.isVerified) {
      //   return res.status(400).json({ message: "'This account isn't verified" })
      // }

      const token = generateAccessToken(user.username, user._id)

      return res.json({
          token,
          username: user.username,
          bonuses: user.bonusesAmount,
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Authorization error" })
    }
  }
}

module.exports = new authController()