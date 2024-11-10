export const API_BASE_URL = "https://v2.api.noroff.dev";

// Register User
async function registerUser(userData) {
    try {
        const response = await fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

// Login User
async function loginUser(credentials) {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token); // Store token if login is successful
        }
        return data;
    } catch (error) {
        console.error("Error logging in:", error);
    }
}
