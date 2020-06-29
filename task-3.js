const ADMIN_PASSWORD = 'jqueryismyjam';
let message = '';

let inputUser = prompt('"Введите пароль"');

if (inputUser === ADMIN_PASSWORD) {
    let message = alert('"Добро пожаловать!"')
    console.log(message);
} else if (inputUser === null) {
    let message = alert('"Отменено пользователем!"');
    console.log(message);
} else {
    let message = alert('"Доступ запрещен, неверный пароль!"');
    console.log(message);
}




