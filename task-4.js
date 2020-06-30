let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let result = '';
const quantity = prompt('"Какое количество дроидов вы хотите купить?"');


if (quantity === null) { 
    result = alert("Отменено пользователем!");
    console.log(result);

} else if (isNaN(quantity[0]) || isNaN(quantity)) { 
    result = prompt("Введите число");
    console.log(result);
            
        } else { 
    totalPrice = pricePerDroid * quantity;
}
 
if (!result) {
            
    if ((credits - totalPrice) <= 0) {  
        result = alert('"Недостаточно средств на счету!"')
        window.console.log(result);

    } else {
        credits = credits - totalPrice;
        result = alert(`"Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов"`);
        console.log(result);
    }

} else {
    console.log(result);
}




