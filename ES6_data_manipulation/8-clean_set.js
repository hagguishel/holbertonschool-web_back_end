export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return '';

  const results = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  }
  return results.join('-');
}
