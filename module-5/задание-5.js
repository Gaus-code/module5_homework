/*Задание 5
Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива. 
*/
var arr = ['JavaScript', 'ECMAScript', 'jQuery'];
let countElements = arr.length;
console.log(countElements);
for (var i = 0, l = arr.length; i < l; i++) {
    console.log(arr[i]);
}
