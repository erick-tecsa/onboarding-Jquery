export default function formatData(data) {
  const day = new Date(data).getDate();
  const month = new Date(data).getMonth() + 1;
  const year = new Date(data).getFullYear();

  if (month < 10) {
    return `${day}/0${month}/${year}`;
  } else {
    return `${day}/${month}/${year}`;
  }
}
