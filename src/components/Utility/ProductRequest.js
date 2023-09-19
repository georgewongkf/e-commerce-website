async function productRequest(source, method, products) {
  const response = await fetch(source, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  });

  return response;
}

export default productRequest;
