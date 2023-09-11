let lastPrice = null;

let coins = ['btc', 'eth','bnb', 'atom', 'inj'];

coins.forEach( coin => {
    WS = new WebSocket (`wss://stream.binance.com:9443/ws/${coin}usdt@ticker`);
    WS.onmessage = (event) => {
        const Price = document.querySelector(`#${coin}-coin .price`);
        const PriceChange = document.querySelector(`#${coin}-coin .price-change`);
        const coinVolume = document.querySelector(`#${coin}-coin .volume`);

        let stockObject = JSON.parse(event.data);
        let price = parseFloat(stockObject.c).toFixed(2);
        let priceChange = parseFloat(stockObject.P).toFixed(2);
        let volume = parseFloat((stockObject.q - stockObject.v)/1000000).toFixed(2);

        Price.innerText = `$ ${price}`;
        Price.style.color = lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
        lastPrice = price;
        PriceChange.innerText = `${priceChange}%`;
        PriceChange.style.color = priceChange < 0 ? 'red' : 'green';
        coinVolume.innerText = `$${volume}M`;
    }
});

// // btc
// let btcWS = new WebSocket ('wss://stream.binance.com:9443/ws/btcusdt@ticker');
// const btcPrice = document.querySelector('#btc-coin .price');
// const btcPriceChange = document.querySelector('#btc-coin .price-change');

// btcWS.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.c).toFixed(2);
//     let priceChange = parseFloat(stockObject.P).toFixed(2);
//     btcPrice.innerText = `$ ${price}`;
//     btcPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
//     lastPrice = price;
//     btcPriceChange.innerText = `${priceChange}%`;
//     btcPriceChange.style.color = priceChange < 0 ? 'red' : 'green';
// }

// // eth
// let ethWS = new WebSocket ('wss://stream.binance.com:9443/ws/ethusdt@ticker');
// const ethPrice = document.querySelector('#eth-coin .price');
// const ethPriceChange = document.querySelector('#eth-coin .price-change');

// ethWS.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.c).toFixed(2);
//     let priceChange = parseFloat(stockObject.P).toFixed(2);
//     ethPrice.innerText = `$ ${price}`;
//     ethPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
//     lastPrice = price;
//     ethPriceChange.innerText = `${priceChange}%`;
// }

// // bnb
// let bnbWS = new WebSocket ('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
// const bnbPrice = document.querySelector('#bnb-coin .price');
// const bnbPriceChange = document.querySelector('#bnb-coin .price-change');

// bnbWS.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.c).toFixed(2);
//     let priceChange = parseFloat(stockObject.P).toFixed(2);
//     bnbPrice.innerText = `$ ${price}`;
//     bnbPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
//     lastPrice = price;
//     bnbPriceChange.innerText = `${priceChange}%`;
// }

// // inj
// let injWS = new WebSocket ('wss://stream.binance.com:9443/ws/injusdt@ticker');
// const injPrice = document.querySelector('#inj-coin .price');
// const injPriceChange = document.querySelector('#inj-coin .price-change');

// injWS.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.c).toFixed(2);
//     let priceChange = parseFloat(stockObject.P).toFixed(2);
//     injPrice.innerText = `$ ${price}`;
//     injPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
//     lastPrice = price;
//     injPriceChange.innerText = `${priceChange}%`;
// }

// // inj
// let atomWS = new WebSocket ('wss://stream.binance.com:9443/ws/atomusdt@ticker');
// const atomPrice = document.querySelector('#atom-coin .price');
// const atomPriceChange = document.querySelector('#atom-coin .price-change');

// atomWS.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.c).toFixed(2);
//     let priceChange = parseFloat(stockObject.P).toFixed(2);
//     atomPrice.innerText = `$ ${price}`;
//     atomPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
//     lastPrice = price;
//     atomPriceChange.innerText = `${priceChange}%`;
// }
// 
