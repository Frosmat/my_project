"use strict";

let money = 0,
    time = '';

function start() {
    money = +prompt("Ваш бюджет на месяц?", "0");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "0");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


}

start();



let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "0");

            if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' &&
                a.length < 50) {

                appData.expenses[a] = b;
            } else {
                alert('Неверные данные. Повторите ввод.')
                    --i;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ваш бюджет на один день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert('Минимальный уровень достатка.');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            alert('Высокий уровень достатка');
        } else {
            alert('Ошибка!');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма вклада?", 0),
                percent = +prompt("Какой процент?", 0);

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозите: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optionalExpenses = prompt("Статья не обязательных расходов?", '');
            appData.optionalExpenses[i] = optionalExpenses;
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет доп. доход? (Перечислить через запятую)', "");

            if ((typeof (items) === 'string') && (typeof (items) != null) && items != '' && items.length < 50) {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
                appData.income.forEach(function (value, index) {
                    console.log(`Cпособ подработки №${index + 1}: ${value}.`)
                })
            } else {
                alert('Неверные данные. Повторите ввод.')
                    --i;
            }
        }
    },
    developerLog: function(){
        for (const key in appData) {
            console.log(`Наша программа включает в себя данные:  ${key} - ${appData}`);
        }
    }
};
