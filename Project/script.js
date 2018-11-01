"use strict";

let money = 0;
let time = '';

money = prompt("Ваш бюджет на месяц?", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");



let appData = {
    money: money,
    time: time,
    expenses: '',
    optionalExpenses: '',
    income: [],
    savings: false
};

let expensesTitle = prompt("Введите обязательную статью расходов в этом месяце", "");
let expensesPrice = prompt("Во сколько обойдется?", "0");

appData.optionalExpenses = {expensesTitle, expensesPrice};

alert("Ваш бюджет на один день: " + (money/30));

console.log(appData.optionalExpenses);