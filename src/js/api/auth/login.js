import { API_AUTH_LOGIN, API_KEY } from "../constants.js";

async function loginUser(email, password) {
    const errorMessages = document.getElementById("errorMessages");
    const successMessages = document.getElementById("successMessages");

    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
<<<<<<< HEAD
                'x-api-key': API_KEY,
=======
                'x-api-key': API_KEY,  // Include the API key in the headers
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        console.log("API Response:", result); // Log the response for debugging

        if (response.ok && result.data && result.data.accessToken) {
            // Extract the accessToken from the nested data structure
            const accessToken = result.data.accessToken;
            localStorage.setItem("accessToken", accessToken);

<<<<<<< HEAD
            // Optional: Store other user details as needed
            localStorage.setItem("username", result.data.name);
            localStorage.setItem("userEmail", result.data.email);

            successMessages.innerText = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "profile.html", 800); // Adjust redirection as needed
=======
            successMessages.innerText = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "profile.html", 800);  // Adjust redirection if needed
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
        } else {
            // Display error if no token is present or response is not OK
            errorMessages.innerText = `Error: ${result.data.message || 'Invalid login'}`;
        }
    } catch (error) {
        errorMessages.innerText = "An error occurred during login.";
        console.error("Error:", error);
    }
}

<<<<<<< HEAD
// Attach event listener for form submission
=======
>>>>>>> 022502faf6b0e08e0662b6a5dbde2cc4e00ee967
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
