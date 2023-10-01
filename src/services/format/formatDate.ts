function formatDate(isoDateString: string): string {
  const orderDate = new Date(isoDateString);

  orderDate.setHours(orderDate.getHours() + 3);

  const today = new Date();
  const isToday = orderDate.toDateString() === today.toDateString();
  const day = orderDate.getDate();
  const month = orderDate.getMonth() + 1;
  const year = orderDate.getFullYear();
  const hours = orderDate.getHours();
  const minutes = orderDate.getMinutes();

  if (isToday) {
    return `Сегодня, ${hours}:${minutes < 10 ? "0" : ""}${minutes} i-GMT+3`;
  } else {
    return `${day}.${month < 10 ? "0" : ""}${month}.${year}, ${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes} i-GMT+3`;
  }
}

export default formatDate;
