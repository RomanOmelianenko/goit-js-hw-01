const total = 100;
const ordered = 120;

if (ordered >= 1 && ordered <= total) {
    console.log('"Заказ оформлен, с вами свяжется менеджер!"');

} else if (ordered === 0) {
    console.log('"Вы ничего не заказали!"');

} else {
    console.log('"На складе недостаточно товаров!"');
}




