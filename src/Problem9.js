/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
*/



function allAnagrams(str) {
  if (str.length <= 1) {
    return [str];
  }
  const results = [];


  for (let i = 0; i < str.length; i++) {
    char = str[i]

    remaining = str.slice(0, i) + str.slice(i + 1);

    perms = allAnagrams(remaining);
    
    for (perm of perms) {
      results.push(char + perm);
    }
  }
  return results;
}

console.log(allAnagrams("abc"));  // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
