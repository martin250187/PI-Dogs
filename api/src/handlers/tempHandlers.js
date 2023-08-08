const {
  getTemp,
  createTemp,
} = require("../controllers/temperamentsControllers");

const getTempHandler = async (req, res) => {
  try {
    const temperaments = await getTemp();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createTempHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const newTemp = await createTemp({
      name,
    });
    res.status(201).json(newTemp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getTempHandler,
  createTempHandler,
  insertTempHandler,
};
