export default function DateHandler(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, months) {
  return new Date(date.getFullYear(), date.getMonth() - months, date.getDate());
}

// alternative usage
// return data.toISOString().slice(0,10);
// => works same way.
