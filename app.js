let hr1 = document.getElementById('hour1');
let min1 = document.getElementById('min1');
let sec1 = document.getElementById('sec1');

let hr2 = document.getElementById('hour2');
let min2 = document.getElementById('min2');
let sec2 = document.getElementById('sec2');

let hr3 = document.getElementById('hour3');
let min3 = document.getElementById('min3');
let sec3 = document.getElementById('sec3');

let hr4 = document.getElementById('hour4');
let min4 = document.getElementById('min4');
let sec4 = document.getElementById('sec4');

function displayTime() {
    let date = new Date();

    // Eastern Time Zone
    let easternDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    let hh1 = easternDate.getHours();
    let mm1 = easternDate.getMinutes();
    let ss1 = easternDate.getSeconds();
    let easternTime = easternDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });


    // Western Time Zone
    let westernDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    let hh2 = westernDate.getHours();
    let mm2 = westernDate.getMinutes();
    let ss2 = westernDate.getSeconds();
    let westernTime = westernDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });


    // Pakistan Time Zone
    let pakistanDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
    let hh3 = pakistanDate.getHours();
    let mm3 = pakistanDate.getMinutes();
    let ss3 = pakistanDate.getSeconds();
    let pakistanTime = pakistanDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });


    // China Time Zone
    let chinaDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    let hh4 = chinaDate.getHours();
    let mm4 = chinaDate.getMinutes();
    let ss4 = chinaDate.getSeconds();
    let chinaTime = chinaDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });


    let hRotation1 = 30 * hh1 + mm1 / 2;
    let mRotation1 = 6 * mm1;
    let sRotation1 = 6 * ss1;

    let hRotation2 = 30 * hh2 + mm2 / 2;
    let mRotation2 = 6 * mm2;
    let sRotation2 = 6 * ss2;

    let hRotation3 = 30 * hh3 + mm3 / 2;
    let mRotation3 = 6 * mm3;
    let sRotation3 = 6 * ss3;

    let hRotation4 = 30 * hh4 + mm4 / 2;
    let mRotation4 = 6 * mm4;
    let sRotation4 = 6 * ss4;

    let timezoneName1 = document.querySelector('.losangeles-name');
    let timezoneDate1 = document.querySelector('.losangeles-date');
    let timezoneTime1 = document.querySelector('.losangeles-time');

    timezoneName1.textContent = 'New York';
    // console.log(easternTime);
    timezoneTime1.textContent = easternTime;
    timezoneDate1.textContent = easternDate.toDateString();

    let timezoneName2 = document.querySelector('.newyork-name');
    let timezoneDate2 = document.querySelector('.newyork-date');
    let timezoneTime2 = document.querySelector('.newyork-time');

    timezoneName2.textContent = 'Los Angeles';
    timezoneTime2.textContent = westernTime;
    timezoneDate2.textContent = westernDate.toDateString();

    let timezoneName3 = document.querySelector('.pakistan-name');
    let timezoneDate3 = document.querySelector('.pakistan-date');
    let timezoneTime3 = document.querySelector('.pakistan-time');

    timezoneName3.textContent = 'Pakistan';
    timezoneTime3.textContent = pakistanTime;
    timezoneDate3.textContent = pakistanDate.toDateString();

    let timezoneName4 = document.querySelector('.china-name');
    let timezoneDate4 = document.querySelector('.china-date');
    let timezoneTime4 = document.querySelector('.china-time');

    timezoneName4.textContent = 'China';
    timezoneTime4.textContent = chinaTime;
    timezoneDate4.textContent = chinaDate.toDateString();


    hr1.style.transform = `rotate(${hRotation1}deg)`;
    min1.style.transform = `rotate(${mRotation1}deg)`;
    sec1.style.transform = `rotate(${sRotation1}deg)`;

    hr2.style.transform = `rotate(${hRotation2}deg)`;
    min2.style.transform = `rotate(${mRotation2}deg)`;
    sec2.style.transform = `rotate(${sRotation2}deg)`;

    hr3.style.transform = `rotate(${hRotation3}deg)`;
    min3.style.transform = `rotate(${mRotation3}deg)`;
    sec3.style.transform = `rotate(${sRotation3}deg)`;

    hr4.style.transform = `rotate(${hRotation4}deg)`;
    min4.style.transform = `rotate(${mRotation4}deg)`;
    sec4.style.transform = `rotate(${sRotation4}deg)`;
}

setInterval(displayTime, 1000);
