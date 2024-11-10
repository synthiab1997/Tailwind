import { API_AUTH_LOGIN, API_KEY } from "../constants.js";

async function loginUser(email, password) {
    const errorMessages = document.getElementById("errorMessages");
    const successMessages = document.getElementById("successMessages");

    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,  // Include the API key in the headers
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            const accessToken = data.token;
            localStorage.setItem("accessToken", accessToken);

            successMessages.innerText = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "profile.html", 800);  // Adjust redirection if needed
        } else {
            errorMessages.innerText = `Error: ${data.message}`;
        }
    } catch (error) {
        errorMessages.innerText = "An error occurred during login.";
        console.error("Error:", error);
    }
}

document.getElementById('login-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
        document.getElementById("errorMessages").innerText = "Both email and password are required.";
        return;
    }

    loginUser(email, password);
});
