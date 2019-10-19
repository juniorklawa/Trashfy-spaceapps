const User = require('../models/User');

module.exports = {
  async store(req, res) {
    console.log(req.body);
    console.log(req.file)
    const { username, points, type } = req.body;


    let user = await User.findOne({ username })

    if (!user) {
      user = await User.create({
        username,
        points,
        type: type
      })


      return res.json(user)
    }
  }
}