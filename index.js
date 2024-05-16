/*let name = "Vitor";
let age = 18;
let online = true;

document.getElementById("p1").textContent = `My name is ${name}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `I am ${online ? "online" : "offline"}`;
*/

let username;

username = window.prompt(`What is your name?`);

document.getElementById("p1").textContent = `My name is ${username}`;