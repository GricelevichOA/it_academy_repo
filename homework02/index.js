// переменные и ввод
let firstName = prompt("Введите ваше имя");
let lastName = prompt("Введите вашу фамилию");
let surname = prompt("Введите ваше отчество");
const age = parseInt(prompt("Введите ваш возраст (в диапазоне от 14 до 120"));
const sex = confirm("Ваш пол - мужской?");
 
// вывод
if (firstName && lastName && surname && !isNaN(age) && age >= 14 && age <= 120) {
    alert(`
        Ваше ФИО: ${lastName} ${firstName} ${surname}
        Ваш возраст в годах: ${age}
        Ваш возраст в днях: ${age * 365}
        Через 5 лет вам будет: ${age + 5}
        Ваш пол: ${sex ? "Мужской" : "Женский"}
        Вы на пенсии: ${isPensioner(age, sex) ? "Да" : "нет"}
    `);
} else { // консоль эррор на всякий случай
    console.error("Введены неверные данные")
}

// проверка на пенсию
function isPensioner(age, sex) {
    if ((sex && age >= 63) || (!sex && age >= 58) )
        return true;
    else
        return false;
}