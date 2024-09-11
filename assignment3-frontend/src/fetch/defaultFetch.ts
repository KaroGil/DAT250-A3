// A default fetch function that is used to fetch data from the backend.
export const defaultFetch = async (url: string, method: string, token?: string, body?: object) => {
  const response = await fetch("http://localhost:8080/api" + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok && method === "GET") {
    return response.json();
  }
  else{
    return response.json();
  }
};