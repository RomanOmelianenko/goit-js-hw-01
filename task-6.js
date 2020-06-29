let total = 0;

do {
    let input = prompt('Введите число');
    if (input === null) {
        break;
    }

    input = Number(input);

    const notNumber = Number.isNaN(input);

    if (notNumber) {
        input = alert('Было введено не число, попробуйте еще раз!');
        console.log(input);
        continue;
    }

    total += input;
} while(true);

let input = alert(`Общая сумма чисел равна ${total}`);
console.log(input);


