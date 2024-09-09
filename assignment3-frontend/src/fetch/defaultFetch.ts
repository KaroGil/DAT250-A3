// A default fetch function that is used to fetch data from the backend.
export const defaultFetch = async (url: string, method: string, token?: string, body?: object) => {
  const response = await fetch("http://localhost:8080" + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return response.json();
};