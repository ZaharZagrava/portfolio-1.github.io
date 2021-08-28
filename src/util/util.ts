import { DateTime } from "luxon";

export const getYearDiff = (from: DateTime, to: DateTime) => {
  const d = from.diff(to, ["years", 'months']).toObject();

  console.log('@d');
  console.log(d);
  const years = d.years && Math.round(Math.abs(d.years));
  const months = d.months && Math.round(Math.abs(d.months));

  let str = '';
  if(years && months) str = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`
  else if(years) str = `${years} year${years !== 1 ? 's' : ''}`
  else if (months) str = `${months} month${months !== 1 ? 's' : ''}`

  return str
}
