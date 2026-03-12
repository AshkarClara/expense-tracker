function numbersOnly(e, min, max) {
  let value = e.target.value;

  // remove non-numeric characters
  value = value.replace(/\D/g, '');

  // limit max length
  if (value.length > max) {
    value = value.slice(0, max);
  }

  e.target.value = value;
}