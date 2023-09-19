async function authentication(method, enteredEmail, enteredPassword) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyB8UKX01ej56zQqRtj4SyU_XPLXfn54XBo`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    }
  );
  return response;
}

export default authentication;
