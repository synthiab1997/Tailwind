import { API_AUTH_REGISTER, API_KEY } from "../constants.js";

export const registerUser = async (name, email, password) => {
    console.log("Using API_AUTH_REGISTER:", API_AUTH_REGISTER); // Debugging endpoint
    console.log("Using API_KEY:", API_KEY);                     // Debugging API key

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
        throw new Error(error.message || "Unable to register user. Please try again.");
    }

    return await response.json();
};

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");
    form?.addEventListener("submit", async (event) => {
        event.preventDefault();

        document.getElementById("errorMessages").innerText = "";
        document.getElementById("successMessages").innerText = "";

<<<<<<< HEAD
        // Get form input values
=======
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
        const name = document.getElementById("register-username").value.trim();
        const email = document.getElementById("register-email").value.trim();
        const password = document.getElementById("register-password").value.trim();

<<<<<<< HEAD
        // Basic validation
=======
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
        if (!name || !email || !password) {
            document.getElementById("errorMessages").innerText = "All fields are required.";
            return;
        }

        try {
<<<<<<< HEAD
            // Attempt to register the user
=======
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
            await registerUser(name, email, password);
            document.getElementById("successMessages").innerText = "User registered successfully!";
            setTimeout(() => window.location.href = "/", 800);  // Redirect to login page
        } catch (error) {
            document.getElementById("errorMessages").innerText = "Error: " + error.message;
        }
    });
});
