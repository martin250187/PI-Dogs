const {
  getDogs,
  getDogById,
  getDogsByName,
  createDog,
} = require("../controllers/dogsControllers");

const getDogsHandler = async (req, res) => {
  try {
    let dogs = {};
    const { name } = req.query;
    name ? (dogs = await getDogsByName(name)) : (dogs = await getDogs());
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "postgres" : "api";
    const dog = await getDogById(id, source);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDogHandler = async (req, res) => {
  try {
    const { name, height_min, height_max, weight_min, weight_max, life_span, image } = req.body;
    await createDog({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      image,
    });
    res.status(201).send("Your dog has been created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogsHandler, getDogHandler, createDogHandler };
