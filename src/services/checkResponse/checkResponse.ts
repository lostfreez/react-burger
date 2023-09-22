export function checkResponse(response: Response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((response) => {
      let error = new Error(response.message);
      throw error;
    });
  }
}
