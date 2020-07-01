const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let inputUser = prompt('Введите пароль');

if (inputUser === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
    alert(message);

} else if (inputUser === null) {
    message = 'Отменено пользователем!';
    alert(message);
    
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}




