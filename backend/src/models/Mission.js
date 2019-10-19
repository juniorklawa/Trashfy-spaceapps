const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
  reward: Number,
  picture: String,
  type: String,
  city: String,
  neighborhood: String,
  street: String,
  descriptionOption: String,
});



module.exports = mongoose.model('Mission', MissionSchema);  