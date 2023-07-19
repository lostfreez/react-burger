export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error("Ошибка создания заказа");
    error.response = response;
    throw error;
  }
}
