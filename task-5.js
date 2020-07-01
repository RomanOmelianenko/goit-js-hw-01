
let price = 0;

let inputCountry = prompt('Введите страну для доставки');
inputCountry = inputCountry.toLowerCase();
inputCountry = inputCountry.charAt(0).toUpperCase() + inputCountry.slice(1);

switch(inputCountry) {
    case 'Китай':
        price = 100;
        break;

    case 'Чили':
        price = 250;
        break;

    case 'Австралия':
        price = 170;
        break;
    
    case 'Индия':
        price = 80;
        break;

    case 'Ямайка':
        price = 120;
        break;

    default:
        alert('В вашей стране доставка не доступна');
            
}

if (price > 0) {
    alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
}   



