document; // переменная для доступа к DOM
document.children; // дочерние элементы

const item1 = document.getElementById("item-1");
const item2 = document.querySelector("#item-2");
const lis = document.getElementsByTagName("li");
const lis2 = document.querySelectorAll("li");
const classes = document.getElementsByClassName("test_class");

item2.textContent = "new text";