async function convertCurrency(from, to, amount) {
  try {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
    const res = await fetch(url);
    const data = await res.json();
    const rate = data[from][to];
    console.log(`${amount} ${from.toUpperCase()} = ${(amount * rate).toFixed(2)} ${to.toUpperCase()}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

convertCurrency("usd", "inr", 10);