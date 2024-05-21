let username;

document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("myTitle").textContent = `Hello ${username}`;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}