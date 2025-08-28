const isMember = true;
const isEmailVerified = true;

//Short Circuiting with &&
const passTest = isMember && isEmailVerified;

console.log(passTest);

//Short Circuiting with ||
const userName = "Dennis";

const result =  userName || "Guest";

console.log(result);