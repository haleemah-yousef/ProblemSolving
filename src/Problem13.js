/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediately see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

function dirReduc(directions) {
    let result = [];

    for (let direction of directions) {
        if (result.length === 0) {
            result.push(direction);
        } else {
            last = result[result.length - 1];

            if (
                (direction === "NORTH" && last === "SOUTH") ||
                (direction === "SOUTH" && last === "NORTH") ||
                (direction === "EAST" && last === "WEST") ||
                (direction === "WEST" && last === "EAST")
            ) 
            {
                result.pop();
            } 
            else 
            {
                result.push(direction);
            }
        }
    }

    return result;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])); // []
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])); // ["WEST", "WEST"]
