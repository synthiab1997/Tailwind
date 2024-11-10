import "./css/style.css"

import router from "./src/js/router";

await router(window.location.pathname);

// src/index.js

import { createPost } from './src/js/api/post/create'
import { readPosts } from './src/js/api/post/read';
import { updatePost } from './src/js/api/post/update';
import { deletePost } from './src/js/api/post/delete';

async function initializeApp() {
    const token = localStorage.getItem('jwtToken'); // Get the JWT token from local storage

    if (!token) {
        // If no token, redirect to login
        alert('Please log in to manage your posts.');
        window.location.href = 'login.html';
        return;
    }

    // Load posts and other necessary data
    await loadPosts(token);

    // Add event listeners for creating/updating posts etc.
}

// Load posts function
async function loadPosts(token) {
    try {
        const posts = await readPosts(token); // Assuming this function retrieves posts
        // Render posts in the UI...
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Call the initialize function
initializeApp();



