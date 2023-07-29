/*Задание 7
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа,
 но и, например, знаки, null и так далее.
*/
let values = [1,2,3,4,5,6,7,null,"hello", 10];
let sumPair = 0;
let sumOdd = 0;
let notNumber = 0;
let nullEl = 0;
values.forEach(function(item, index){
    if (item % 2){
        sumPair++;
    }else if (item % 3){
        sumOdd++;
    }else if(item == 0){
        nullEl++;
    }else{
        notNumber++;
    }
});
console.log(sumPair);
console.log(sumOdd);
console.log(notNumber);
console.log(nullEl);