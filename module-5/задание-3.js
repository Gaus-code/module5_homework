/*задание 3
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".
*/
const str = 'Hello';
const HELLO = str.split('').reverse().join('');
console.log(HELLO);