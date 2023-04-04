const rent = 400;
const tax = '12%' // is divided by 100 to get decimal value
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay === 0 && minuteOfDay === 0) { // 00 is not a number, checks if value is = to 0
	const taxAsDecimal = parseInt(tax) / 100 // parseInt function changes string to number 
    const salaryAfterTax = salary * (1 - taxAsDecimal) // (1-taxAsDecimal) because we want the rest of the amount - the salary, we aren't trying to get the tax amount
	balance = salaryAfterTax - transport - food - rent // QUESTION why don't we put const with balance??
}
	
console.log('R' + balance.toFixed(2)) // added prefix R & changed to.Fixed(2) as required