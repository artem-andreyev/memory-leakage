// function func() {
//     window.smth = "string";
// }

// const someRes = getData();
// const node = document.querySelector(".class"); // Ссылка на класс которого не сущетсвует но функция все равно работает из за setInterval и занимает память

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() { // Замыкание
//     const potentionallyHugeArray = [];
//     return function inner() {
//         potentionallyHugeArray.push("Hello");
//         console.log("Hello!!");
//     }
// }

// const sayHello = outer(); 

function createElement() { // Правильный код - после срабатывания функции, удаляет ее и очищает память
    const div = document.createElement("div");
    div.id = "test";
    document.body.append(testDiv);
}

createElement();

document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById("test"));
}

deleteElement();