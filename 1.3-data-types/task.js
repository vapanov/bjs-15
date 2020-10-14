function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    "use strict";
    debugger;
    let errorMsg;

    if (isNaN(percent) || !percent) errorMsg = `Параметр "процент" содержит неправильное значение ${percent}.`;
    if (isNaN(contribution)) errorMsg = `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}.`;
    if (isNaN(amount) || !amount) errorMsg = `Параметр "сумма кредита" содержит неправильное значение ${amount}.`;
    if (isNaN(date) || !date) errorMsg = `Параметр "срок погашения кредита" содержит неправильное значение ${date}.`;

    if (errorMsg) {
      console.log(errorMsg);
      return errorMsg;
    }

    // тело кредита
    let totalPrincipal = amount - contribution;

    // количество выплачиваемых месяцев вводится в функцию параметром date, если верить легенде дз
    let now = new Date();
    let month = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));

    let monthPercent = percent / (12 * 100);

    let monthPayment = totalPrincipal * (monthPercent + monthPercent / (Math.pow((1 + monthPercent), month) - 1));

    let totalAmount = (monthPayment * month).toFixed(2);

    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}