//Today's Problem – The Collatz sequence problem
/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet 
(Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/


function collatz(num){
    len=1
    while (num!=1 && num!=0) {
        

        if (num%2==0)
        {
            num/=2;
        }
        else 
        {
            num=(num*3)+1;
        }
        
        len++;
    }
    return len
}

console.log(collatz(8))
console.log(collatz(837799));
//console.log(collatz(205676).length);
//console.log(collatz(675666).length);
//console.log(collatz(789999).length);
//console.log(collatz(837799).length);
//console.log(collatz(912345).length);

//m= new Map();
//num=0
//chain=0
//for (i=1; i<1000000; i++){
//    m.set(i,collatz(i).length);
//}

//console.log( Math.max(m.values()))

longestchain=0
num=0
for (i=1; i<1000000; i++) 
{
    chain=collatz(i)
    if (chain>longestchain)
    {
        longestchain=chain
        num=i
    }
}

console.log(longestchain)
console.log(num)