const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const app_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");

    const serverClient = connect(app_key, api_secret, api_id);

    const token = serverClient.createUserToken(userId);

    bcrypt.hash(password, 10, function (err, hashedPassword) {
      res.status(200).json({
        token,
        fullName,
        username,
        userId,
        hashedPassword,
        phoneNumber,
      });
    });
  } catch (error) {
    console.log(error);

    res.status(404).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(app_key, api_secret, api_id);
    const client = StreamChat.getInstance(app_key, api_secret);

    const { users } = await client.queryUsers({ name: username });

    if (!users.length)
      return res.status(400).json({ message: "User not found" });

    const token = serverClient.createUserToken(users[0].id);

    bcrypt.compare(password, users[0].hashedPassword, function (err, success) {
      if (!success)
        return res.status(500).json({ message: "Incorrect password" });

      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    });
  } catch (error) {
    console.log(error);

    res.status(404).json(error);
  }
};
module.exports = { signup, login };
