let currencyFrom = document.getElementById('fxspanfm'),
  currencyTo = document.getElementById('fxspanto'),
  send = document.getElementById('fxexchangerateAmount'),
  receive = document.getElementById('fxexchangerateResult'),
  currencys = {
    from: "USD",
    to: "XOF",
    amount: '1'
  };
  

const getCurrencys = (e) => {
  e.preventDefault();
  const { name, value } = e.target;

  currencys = {
    ...currencys,
    [name]: value
  }
  console.log('currencys: ', currencys);
  if(currencys.from && currencys.to && currencys.amount) {
    getValues();
  }
}

const getValues = () => {
  axios({
    method: 'GET',
    url: `https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${currencys.from}&to=${currencys.to}&amount=${currencys.amount}`,
    headers: {
      'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
      'x-rapidapi-key': 'e862f20e95msh9cf99cee98a2aadp14348ejsn266a9f555aae'
    }
  })
  .then(response => {
    console.log('response: ', response.data)
    currencyFrom.innerHTML = currencys.from,
    currencyTo.innerHTML = currencys.to,
    send.value = currencys.amount;
    receive.innerHTML = response.data.result;
  })
  .catch(err => console.log('error: ', err))
}

window.onload = () => {
  // init();
  getValues();
}
