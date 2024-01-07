// // Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);
// // element.style.height = "300px";
// // element.style.backgroundColor = "#27647B";
// // element.style.margin = '50px';
// // element.style.paddingTop = '50px';
// // element.style.fontSize = '35px'
// // element.style.color = 'red';

// // element.textContent = 'It\'s me and you';

// // element.className = 'pet-listing dog';

// // element.classList.remove('dog');
// // element.classList.add('cats');
// // const lu = document.getElementsByTagName('ul')[0];
// // const firstChild = ul.querySelector('li:nth-child(1)');
// // ul.removeChild(firstChild);

// ul.remove();

const main = document.getElementById('main');
main.remove();
// document.body.append(element);
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion";