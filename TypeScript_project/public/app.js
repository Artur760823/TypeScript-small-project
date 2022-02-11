//interface
const me = {
    name: "Artur",
    age: 45,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
console.log(me);
import { Invoice } from './modules/invoice.js';
const invOne = new Invoice('My', "work on website", 222);
const invTwo = new Invoice('Eve', "work for Tax Dep", 1222);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//form
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
