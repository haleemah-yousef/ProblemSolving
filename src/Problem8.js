/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(parentheses) 
{
    let openningPar=['(','{','['];
    let closingPar=[')','}',']'];
    let s = []

    for ( i=0; i<parentheses.length; i++)
    {
        if (openningPar.includes(parentheses[i]))
        {
            s.push(parentheses[i]);
        }
        else if (closingPar.includes(parentheses[i]) && s.length !== 0)
        {
            par=s.pop()
            if (par=='(')
            {
                if (parentheses[i]!=')')
                    return false;
            }
            else if (par=='{')
            {
                if (parentheses[i]!='}')
                    return false;
            }
            else if (par=='[')
            {
                if (parentheses[i]!=']')
                    return false;
            }
        }
    }
    return (s.length==0)

}



console.log( balancedParens('[](){}'));
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false