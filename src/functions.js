export const shorten = (str, count) => {
  const words = str.split(" ");
  if (words.length <= count) return str;

  const lessWords = words.slice(0, count);
  return lessWords.join(" ") + "...";
};

export const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
