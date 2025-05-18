function printDivisors(num) {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
  }
  printDivisors(12); // Məsələn: 1, 2, 3, 4, 6, 12
  
  
  //////////////////////////////////////
  
  
  function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    console.log(count);
  }
  countDivisors(12); // Output: 6
  
  
  ///////////////////////////////////////
  
  
  function upperStr(str) {
    return str.toUpperCase();
  }
  console.log(upperStr("salam")); // SALAM
  
  
  //////////////////////////////////////////
  
  
  function power(x, y) {
    return Math.pow(x, y);
  }
  let base = Number(prompt("Ədədi daxil edin:"));
  let exponent = Number(prompt("Qüvvət dəyərini daxil edin:"));
  console.log(power(base, exponent));
  
  
  //////////////////////////////////////////////
  
  
  function convert(str) {
    let result = "";
    for (let char of str) {
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }
  console.log(convert('saLamNecesen')); // SAlAMnECESEN
  
  
  //////////////////////////////////////////////////
  
  
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
  
  if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
  }
  
  if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
  }
  
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
  
  const teaIndex = shoppingCart.indexOf('Tea');
  if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
  }
  
  console.log(shoppingCart);
  
  
  //////////////////////////////////////////////////////////////
  
  
  const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
    'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
  ];
  
  countries.reverse();
  console.log(countries);
  
  const indexCanada = countries.indexOf('Canada');
  const indexDenmark = countries.indexOf('Denmark');
  if (indexCanada !== -1 && indexDenmark !== -1) {
    countries.splice(Math.min(indexCanada, indexDenmark), 2, 'Azerbaijan');
  }
  console.log(countries);
  
  
  ////////////////////////////////////////////////////////////////
  
  
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
  const backEnd = ['Node', 'Express', 'MongoDB'];
  const fullStack = frontEnd.concat(backEnd);
  console.log(fullStack);
  
  
  ////////////////////////////////////////////////////////////////
  
  
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  
  console.log(itCompanies.slice(0, 3));
  console.log(itCompanies.slice(-3));
  console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2) + 1));
  
  console.log([...itCompanies].sort());
  
  itCompanies.forEach(company => console.log(company.toUpperCase()));
  
  if (itCompanies.includes('Google')) {
    console.log('Google');
  } else {
    console.log('Company not found');
  }
  
  // Filter etmədən 2-dən çox 'o' olanları tapmaq:
  for (let company of itCompanies) {
    let count = 0;
    for (let char of company.toLowerCase()) {
      if (char === 'o') count++;
    }
    if (count > 1) {
      console.log(company);
    }
  }
  
  
  /////////////////////////////////////////////////////////////
  
  
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) console.log(i);
  }
  
  /////////////////////////////////////////////////////////////
  
  
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  
  //////////////////////////////////////////////////////////////////
  
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  
  
  //////////////////////////////////////////////////////////////////
  
  
  const products = [
    { id: 1, title: "Smartphone", price: 799.99 },
    { id: 2, title: "Laptop", price: 1299.99 },
    { id: 3, title: "Coffee Maker", price: 99.99 },
    { id: 4, title: "Headphones", price: 199.99 },
    { id: 5, title: "Smart TV", price: 699.99 },
  ];
  
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  const average = total / products.length;
  
  console.log("Total:", total.toFixed(2));
  console.log("Average:", average.toFixed(2));