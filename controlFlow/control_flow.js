// Exercise 1
let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else{
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

// Exercise 2
let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else{
        userMessage = "Welcom, User!"
    }
} else{
    userMessage = "Please log in to access the system.";
}
console.log(userMessage);

// Exercise 3
let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Exercise 4
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status: ", authenticationStatus);