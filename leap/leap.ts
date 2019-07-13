function isLeapYear(year:number) {
  return (divisibleByFour(year) && notACentury(year) || divisibleByFourHundred(year));
}

function divisibleByFour(year:number) {
  return (year % 4 === 0);
}

function notACentury(year:number) {
  return (year % 100 !== 0);
}

function divisibleByFourHundred(year:number) {
  return (year % 400 === 0);
}

export default isLeapYear
