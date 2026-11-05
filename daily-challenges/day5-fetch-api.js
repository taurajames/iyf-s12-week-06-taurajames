// ==========================================
// DAY 5: FETCH API
// ==========================================

async function getPosts() {
    try {
        console.log("Fetching posts...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error("Failed to retrieve posts.");
        }

        const post = await response.json();

        console.log("Post retrieved successfully!");
        console.log("Title:", post.title);
        console.log("Body:", post.body);

    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

// Run the function
getPosts();