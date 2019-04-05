export const DbModel = {
    user: 'User'
}

export const ConnectionString = "mongodb://localhost/school-mgt";
// "mongodb://127.0.0.1:27017/student-app"
//"mongodb://localhost/school-mgt";

export const jwtSecret =
    process.env.JWT_SECRET ||
    'bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4';