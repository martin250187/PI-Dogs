const validate = (data) => {
  let regexURLImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  const errors = {};
  if (!data.name) {
    errors.name = "Name is required!";
  }
  if (!data.height) {
    errors.height = "Height is required!";
  }
  if (!data.weight) {
    errors.weight = "Weight is required!";
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
