const validate = (data) => {
  let regexURLImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  const errors = {};
  if (!data.name) {
    errors.name = "Name is required!";
  }
  if (!data.height_min || !data.height_max) {
    errors.height = "Both height values are required!";
  } else if (data.height_min <= 0 || data.height_max <= 0) {
    errors.height = "Both height values must be positive numbers!";
  }
  if (!data.weight_min || !data.weight_max) {
    errors.weight = "Both weight values are required!";
  } else if (data.weight_min <= 0 || data.weight_max <= 0) {
    errors.weight = "Both weight values must be positive numbers!";
  }
  if (!data.life_span) {
    errors.life_span = "Life Span is required!";
  }
  if (!data.image || !regexURLImage.test(data.image)) {
    errors.image = "Image URL is required and must be a URL of an image!";
  }
  return errors;
};
export default validate;
