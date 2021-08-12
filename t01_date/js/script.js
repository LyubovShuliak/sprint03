function getFormattedDate(date) {
  const options1 = {
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'numeric'
  };
  const options2 = {
    weekday: 'long'
  };
  const dateTimeFormat1 = new Intl.DateTimeFormat('en-GB', options2);

  const dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', options1);
  let date2 = dateTimeFormat2.format(date).toString()

  function replacer() {
    return date2.replace(/[/]/g, ".").replace(/[,]/g, "")

  }
  return replacer() + " " + dateTimeFormat1.format(date)


}
const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00')
console.log(getFormattedDate(date1));