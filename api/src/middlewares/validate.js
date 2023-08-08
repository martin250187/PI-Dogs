const validate = (req, res, next) => {
  const { name, height, weight, life_span, image } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required!" });
  if (!height) return res.status(400).json({ error: "Height is required!" });
  if (!weight) return res.status(400).json({ error: "Weight is required!" });
  if (!life_span) return res.status(400).json({ error: "Life Span is required!" });
  if (!image) return res.status(400).json({ error: "Image URL is required!" });
  next();
};
module.exports = validate;
