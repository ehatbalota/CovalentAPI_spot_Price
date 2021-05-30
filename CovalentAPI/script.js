// Set your API key here // API anahtarınızı buradan ayarlayın
const APIKEY = 'ckey_0ffa61ead8af4e558a25ba7682e';

// Token table reset // Jeton tablosu sıfırlama
const tableRef = document.getElementById('tokenTable').getElementsByTagName('tbody')[0];
tableRef.innerHTML = "";

// Covalent API request setup // Kovalent API isteği kurulumu
const url = new URL(`https://api.covalenthq.com/v1/pricing/volatility/?&key=ckey_0ffa61ead8af4e558a25ba7682e"`);
url.search = new URLSearchParams({
    key: APIKEY,
    tickers: ["BTC", "ETH","USDT","LEO","LINK","BNB","BAT",]
})

// Use Fetch API to get Covalent data and display in token table // Kovalent verileri almak ve belirteç tablosunda görüntülemek için Getirme API'sini kullanın
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let tokens = data.data.items;
    return tokens.map(function(token) { // Map through the results and for each run the code below
    tableRef.insertRow().innerHTML = 
        `<td><img src=${token.logo_url} style=width:50px;height:50px;></td>` +
        `<td> ${token.contract_name} </td>` +
        `<td> ${token.contract_ticker_symbol} </td>` +
        `<td> $${parseFloat(token.quote_rate).toFixed(2)} </td>`
    })
})
