const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (BASE_URL, title) => {
  return await fetch(`${BASE_URL}/${title}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { GET, POST, DELETE };
