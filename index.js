function clock() {
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    
    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    
    let hours = (`${hour}:${minute}:${second}`);
    document.querySelector('.clock').value = hours;
}

let time = setInterval(clock, 1000);
