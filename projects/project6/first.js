const result = document.getElementById('result');

setInterval(()=>{
    const currenttime = Date.now();
const olympictime = new Date(2028,6,14).getTime();

let timer = olympictime-currenttime;

const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;

const hour= Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;

const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;

const second = Math.floor((timer)/(1000));
timer%=1000;

result.textContent= `${day}:Days ${hour}Hour: ${minute} Minute: ${second} Second`;
},1000)
// const currenttime = Date.now();
// const olympictime = new Date(2028,6,14).getTime();

// let timer = olympictime-currenttime;

// const day = Math.floor((timer)/(1000*60*60*24));
// timer%=1000*60*60*24;

// const hour= Math.floor((timer)/(1000*60*60));
// timer%=1000*60*60;

// const minute = Math.floor((timer)/(1000*60));
// timer%=1000*60;

// const second = Math.floor((timer)/(1000));
// timer%=1000;

// result.textContent= `Days:${day} Hour:${hour} Minute:${minute} Second:${second}`;

