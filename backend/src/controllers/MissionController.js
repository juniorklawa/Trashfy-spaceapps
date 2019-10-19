const Mission = require('../models/Mission');

module.exports = {
  async store(req, res) {
    console.log(req.body);
    console.log(req.file)
    const { reward, type, city, neighborhood, street, descriptionOption } = req.body;
    const {filename} = req.file 

    mission = await Mission.create({
      reward,
      picture : filename,
      type,
      city,
      neighborhood,
      street,
      descriptionOption
    })


    return res.json(mission)

  }
}