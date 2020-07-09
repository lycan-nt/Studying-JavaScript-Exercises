import { data } from "./data.js";

const gender = data.users[0].favorite_artists[0].info?.gender;

if (gender)
{
console.log(gender);
}
else 
{
    console.log("Gender not found");
}