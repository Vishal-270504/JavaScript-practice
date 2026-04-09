// The Permission Checker(Nested Objects)
// In real apps(like React / Node), user data is usually nested.Write a function named canEdit that takes a user object.It should return true ONLY if the user's role is "admin"
// OR if their settings object has editRights: true. Otherwise, return false.
// (Hint: To access a nested key, just chain the dots: user.settings.editRights).

function canEdit(user) {
        if (user.role === "admin" || user.settings.editRights === true) {
            return true;
        } else {
            return false;
        }
    }


console.log(canEdit({ name: "John", role: "admin", settings: { editRights: false } })); // true (because role is admin)
console.log(canEdit({ name: "Jane", role: "user", settings: { editRights: true } }));  // true (because editRights is true)
console.log(canEdit({ name: "Bob", role: "user", settings: { editRights: false } }));  // false