const total = 100;
const ordered = 50;

if (ordered >= 1 && ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер!');

} else if (ordered === 0) {
    console.log('Вы ничего не заказали!"');

} else {
    console.log('На складе недостаточно товаров!');
}




