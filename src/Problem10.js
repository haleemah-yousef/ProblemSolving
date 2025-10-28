/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
//Works for any number of input strings:
/**?
 * if we take an array of string we can create a set from the first element and then
 *  for loop through the rest of the array and create a set for each string and intersect it with 
 * the result we had so far
 */

function commonCharactersArr(arrStr)
{
    if (arrStr.length==0)
    return;

    let result = new Set(arrStr[0]);
    for (let str of arrStr) 
    {
        result=result.intersection(new Set(str));
    }

    return result;

}

console.log(commonCharactersArr(['acexivou', 'aegihobu','aeu'])); // Returns: 'aeu'


function commonCharacters(str1, str2) 
{
    let mySet1= new Set(str1);
    let mySet2= new Set(str2);
    return mySet1.intersection(mySet2);

    /*
    result = []
    for (i=0; i<str2.length ; i++)
    {
        if (mySet.has(str2[i]))
            result.push(str2[i]);
    }
    return result
    */
}

console.log(commonCharacters('acexivou', 'aegihobu')); // Returns: 'aeiou'



