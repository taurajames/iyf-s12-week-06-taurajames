// ==========================================
// DAY 3: ERROR HANDLING
// ==========================================

async function getUserData() {
    try {
        console.log("Loading user data...");

        // Simulate a failed request
        const response = await Promise.reject(
            new Error("Unable to connect to the server.")
        );

        console.log(response);

    } catch (error) {
        console.log("Something went wrong!");
        console.log("Error message:", error.message);

    } finally {
        console.log("Request completed.");
    }
}

// Run the function
getUserData();