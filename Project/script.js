"use strict";

let money = 0,
    time = '';

money = +prompt("Ваш бюджет на месяц?", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");



let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "0");

    if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' &&
        a.length < 50) {

        appData.expenses[a] = b;
    } else {
        console.log('Неверные данные. Повторите ввод.')
        --i;
    }
}

appData.moneyPerDay = Math.floor(appData.budget / 30);

alert("Ваш бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 & appData < 2000) {
    alert('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    alert('Высокий уровень достатка');
} else {
    alert('Ошибка!');
}