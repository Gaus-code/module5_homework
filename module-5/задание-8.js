/* Задание 8
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде 
«Ключ — Х, значение — Y». Используйте шаблонные строки. 
*/
let vegetables = new Map([
    ["tomato", "red"],
    ["cucumber", "green"],
    ["carrot", "orange"],
]);
for (let pair of vegetables.entries()) {
    // pair - это массив [key, values]
    // console.log(pair[0]); // ключ
    // console.log(pair[1]); // значение
    console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}