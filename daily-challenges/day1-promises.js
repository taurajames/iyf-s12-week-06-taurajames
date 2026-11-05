// ==========================================
// DAY 1: WORKING WITH PROMISES
// ==========================================

// Create a Promise
const fetchUser = new Promise((resolve, reject) => {
    console.log("Fetching user information...");

    setTimeout(() => {
        const user = {
            name: "Taura James",
            country: "Kenya",
            course: "Web Development"
        };

        resolve(user);
    }, 2000);
});

// Handle the Promise
fetchUser
    .then((user) => {
        console.log("User information received!");
        console.log("Name:", user.name);
        console.log("Country:", user.country);
        console.log("Course:", user.course);
    })
    .catch((error) => {
        console.log("Error:", error);
    });