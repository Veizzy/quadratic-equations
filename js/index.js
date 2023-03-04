let button = document.querySelector(`.btn`);
let result = document.querySelector(`.result`);


button.addEventListener(`click`, function() {
    let a = document.getElementById(`a`).value;
    let b = document.getElementById(`b`).value;
    let c = document.getElementById(`c`).value;
    let disc = b**2-4*a*c;
    let resxone;
    let resxtwo;
    console.log(`disc` + disc);
    if (disc > 0) {
    if (calculate(disc) === true) {
        console.log(`можно`);
        let xoneup = -b+Math.sqrt(disc);
        console.log(`xoneup` + xoneup);
        let xonedown = 2*a;
    console.log(`xonedown` + xonedown);
    if (xoneup % xonedown == 0) {
    resxone = xoneup/xonedown;
       console.log(`resxone` + resxone);
    } else {
        resxone = `${xoneup}/${xonedown}`;
        console.log(`результат ${xoneup}/${xonedown}`);
    };
    } else {
        let xoneup = `${-b}+√${disc}`;
        console.log(`нельзя!`);
        let xonedown = 2*a;
    console.log(`xonedown` + xonedown);
    console.log(`результат ${xoneup}/${xonedown}`);
     resxone = `(${xoneup})/${xonedown}`;
    }
    if (calculate(disc) === true) {
        console.log(`можно`);
        let xtwoup = -b-Math.sqrt(disc);
        console.log(`xtwoup` + xtwoup);
        let xtwodown = 2*a;
    console.log(`xtwodown` + xtwodown);
    if (xtwoup % xtwodown == 0) {
         resxtwo = xtwoup/xtwodown;
        console.log(`resxtwo` + resxtwo);
     } else {
         resxtwo = `${xtwoup}/${xtwodown}`;
         console.log(`результат ${xtwoup}/${xtwodown}`);
     };
    } else {
        let xtwoup = `${-b}-√${disc}`;
        console.log(`нельзя!`);
        let xtwodown = 2*a;
    console.log(`xtwodown` + xtwodown);
    console.log(`результат ${xtwoup}/${xtwodown}`);
     resxtwo = `(${xtwoup})/${xtwodown}`;
    };
    result.innerHTML = `ответ: x1=${resxone}; x2=${resxtwo}`
    } else if (disc < 0) {
        console.log(`корней нет`)
        result.innerHTML = `ответ: корней нет`;
    } else {
        let xup = -b;
        console.log(`xup` + xup);
        let xdown = 2*a;
    console.log(`xdown` + xdown);
    if (xup % xdown == 0) {
        let resx = xup/xdown;
        console.log(`resx` + resx);
        result.innerHTML = `ответ: ${resx}`
     } else {
         console.log(`результат ${xup}/${xdown}`);
         result.innerHTML = `ответ: ${xup}/${xdown}`;
     };
    };
} );
function calculate(number)
{
    let result = Math.sqrt(number);
    return (result % 1 === 0);
}
