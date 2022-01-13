const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "Please add superhero name."],
    trim: true,
    unique: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Hero name must be at most 200 characters"],
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
