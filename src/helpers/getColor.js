export function getColor(rating) {
  const number = Math.round(rating * 100);
  if (800 > number && number >= 650) return 'yellow';
  if (650 > number && number >= 400) return 'orange';
  if (400 > number) return 'red';
}
