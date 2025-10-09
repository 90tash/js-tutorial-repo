const accountId = 12345
let accountMail = "pashishkumar360@gmail.com"
var accountPassword = "345678"
accountCity = "Dhenkanal"
let accountState;

// accountId = 54321; // not allowed
accountMail = "wizardx0010@gmail.com"
accountPassword = "876543"
accountCity = "Bhubaneswar"

/*
Prefer not to use 'var' for variable declaration.
Because it shows issues in block scope and function scope.
*/

console.log(accountId);
console.table([accountId, accountMail, accountPassword, accountCity, accountState])