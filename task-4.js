let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let result;
const quantity = prompt('Какое количество дроидов вы хотите купить?');


if (quantity === null) { 
    result = 'Отменено пользователем!';
               
} else {
    totalPrice = pricePerDroid * quantity;
} 
 
if (!result) {
            
    if ((credits - totalPrice) <= 0) {  
        result = 'Недостаточно средств на счету!';
        console.log(result);

    } else {
        credits = credits - totalPrice;
        result = `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`;
        console.log(result);
    }

} else {
    console.log(result);
}




