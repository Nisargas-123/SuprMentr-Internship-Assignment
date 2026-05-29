let form = document.getElementById("myForm");
let message = document.getElementById("message");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    }
    else if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
    }
    else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
    }
});