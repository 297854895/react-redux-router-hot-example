export default function replaceAll(str, key, word) {
  const reg = new RegExp(key, 'g');
  const words = str.replace(reg, word);
  return words;
}
