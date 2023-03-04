let button = document.querySelector(`.btn`);
let result = document.querySelector(`.result`);


button.addEventListener(`click`, function() {
    let a = document.getElementById(`a`).value;
    let b = document.getElementById(`b`).value;
    let c = document.getElementById(`c`).value;
    let disc = b**2-4*a*c;
    let xoneup, xonedown, xtwoup, xtwodown;
    let xup, xdown;
    let resx;
    let resxone;
    let resxtwo;
    console.log(`disc` + disc);
    result.innerHTML = `Решение: <br>
     (квадратное уравнение) <br> 
     a=${a}; b=${b}; c=${c} <br>
     D=b^2-4ac=${b}^2-4*${a}*${c}=${b**2}-${4*a*c}=${disc}
     `
    if (disc > 0) {
        //если больше нуля
        result.innerHTML += ` > 0  два корня <br>`
        //первый корень
        result.innerHTML += `x1=(-b+√D)/2a=`
    if (calculate(disc) === true) {
        //если можно извлечь
        console.log(`можно`);
         xoneup = -b+Math.sqrt(disc);
        console.log(`xoneup` + xoneup);
         xonedown = 2*a;
    console.log(`xonedown` + xonedown);
    result.innerHTML += `(${-b}+${Math.sqrt(disc)})/${xonedown}=${xoneup}/${xonedown}`
    if (xoneup % xonedown == 0) {
        //если можно поделить без остатка
    resxone = xoneup/xonedown;
    result.innerHTML += `=${resxone}`
       console.log(`resxone` + resxone);
    } else {
        resxone = `${xoneup}/${xonedown}`;
        console.log(`результат ${xoneup}/${xonedown}`);
    };
    } else {
        //если нельзя извлечь
         xoneup = `${-b}+√${disc}`;
        console.log(`нельзя!`);
         xonedown = 2*a;
    console.log(`xonedown` + xonedown);
    console.log(`результат ${xoneup}/${xonedown}`);
     resxone = `(${xoneup})/${xonedown}`;
     result.innerHTML += `${resxone}`;
    }
    //второй корень
    result.innerHTML += `<br>x2=(-b-√D)/2a=`
    if (calculate(disc) === true) {
        //если можно извлечь
        console.log(`можно`);
         xtwoup = -b-Math.sqrt(disc);
        console.log(`xtwoup` + xtwoup);
         xtwodown = 2*a;
         result.innerHTML += `(${-b}-${Math.sqrt(disc)})/${xtwodown}=${xtwoup}/${xtwodown}`
    console.log(`xtwodown` + xtwodown);
    if (xtwoup % xtwodown == 0) {
        //если можно поделить без остатка
         resxtwo = xtwoup/xtwodown;
        console.log(`resxtwo` + resxtwo);
        result.innerHTML += `=${resxtwo}`
     } else {
         resxtwo = `${xtwoup}/${xtwodown}`;
         console.log(`результат ${xtwoup}/${xtwodown}`);
         resxone = `${xtwoup}/${xtwodown}`;
     };
    } else {
         //если нельзя извлечь
         xtwoup = `${-b}-√${disc}`;
        console.log(`нельзя!`);
         xtwodown = 2*a;
    console.log(`xtwodown` + xtwodown);
    console.log(`результат ${xtwoup}/${xtwodown}`);
     resxtwo = `(${xtwoup})/${xtwodown}`;
     result.innerHTML += `${resxtwo}`;
    }; //конец
    result.innerHTML += `<br>Ответ: x1=${resxone}; x2=${resxtwo}`
    } else if (disc < 0) {
        //если дискриминант меньше 0
        result.innerHTML += ` < 0  корней нет <br> Ответ: корней нет`
        console.log(`корней нет`)
    } else {
        //если равен 0
        result.innerHTML += ` = 0  один корень <br>`
        result.innerHTML += `x=-b/2*a=${-b}/${2*a}`
         xup = -b;
        console.log(`xup` + xup);
         xdown = 2*a;
    console.log(`xdown` + xdown);
    if (xup % xdown == 0) {
        //можно ли поделить без остатка
         resx = xup/xdown;
         result.innerHTML += `=${resx} <br>`
        console.log(`resx` + resx);
        result.innerHTML += `<br>Ответ: ${resx}`
     } else {
         console.log(`результат ${xup}/${xdown}`);
        result.innerHTML += `<br>Ответ: ${xup}/${xdown}`;
     };
    };
} );
function calculate(number)
{
    let result = Math.sqrt(number);
    return (result % 1 === 0);
}5
