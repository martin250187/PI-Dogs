const {
  getTemperaments
} = require("../controllers/temperamentsControllers");

const getTempHandler = async (req, res) => {
  try {
    const temperaments = await getTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTempHandler,
};
