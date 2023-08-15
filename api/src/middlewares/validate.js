const validate = (req, res, next) => {
  const { name, height_min, height_max, weight_min, weight_max,life_span, image } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required!" });
  if (!height_min || !height_max) return res.status(400).json({ error: "Both height values are required!" });
  if (!weight_min || !weight_max) return res.status(400).json({ error: "Both weight values are required!" });
  if (!life_span) return res.status(400).json({ error: "Life Span is required!" });
  if (!image) return res.status(400).json({ error: "Image URL is required!" });
  next();
};
module.exports = validate;
