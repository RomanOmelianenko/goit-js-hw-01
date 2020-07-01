let total = 0;

do {
    let input = prompt('Введите число');
    if (input === null) {
        break;
    }

    input = Number(input);

    const notNumber = Number.isNaN(input);

    if (notNumber) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    }

    total += input;
} while(true);

alert(`Общая сумма чисел равна ${total}`);



