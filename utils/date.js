export function formatDate(dateString) {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedDate.replace(" р.", "");
}
