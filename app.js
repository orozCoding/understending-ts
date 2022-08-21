// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 5,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 5,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person.role);
