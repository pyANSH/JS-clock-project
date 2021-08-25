setInterval(() => {
    d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();
    hhr = 30*hh + mm/2;
    mmr = 6*mm;
    ssr = 6*ss;

    hour.style.transform = `rotate(${hhr}deg)`;
    minute.style.transform = `rotate(${mmr}deg)`;
    second.style.transform = `rotate(${ssr}deg)`;
}, 1000);
