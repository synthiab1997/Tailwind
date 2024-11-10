import { API_AUTH_REGISTER, API_KEY } from "../constants.js";

export const registerUser = async (name, email, password) => {
    const response = await fetch(API_AUTH_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Unable to register user.");
    }

    return await response.json();
};

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");
    form?.addEventListener("submit", async (event) => {
        event.preventDefault();

        document.getElementById("errorMessages").innerText = "";
        document.getElementById("successMessages").innerText = "";

        const name = document.getElementById("register-username").value.trim();
        const email = document.getElementById("register-email").value.trim();
        const password = document.getElementById("register-password").value.trim();

        if (!name || !email || !password) {
            document.getElementById("errorMessages").innerText = "All fields are required.";
            return;
        }

        try {
            await registerUser(name, email, password);
            document.getElementById("successMessages").innerText = "User registered successfully!";
            setTimeout(() => window.location.href = "/", 800);  // Redirect to login page
        } catch (error) {
            document.getElementById("errorMessages").innerText = "Error: " + error.message;
        }
    });
});
