/*
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of ways to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

// Recursion approach

function countWays(coins,n,s) {
        if (s==0)
            return 1;
        if (s<0)
            return 0;
        if (n==0)
            return 0;

        return countWays(coins,n,s-coins[n-1])+ countWays(coins,n-1,s);
    }

function coinCombination(nump) {
    coinsarr = [200,100,50,20,10,5,2,1];
    return countWays(coinsarr,coinsarr.length,nump);

}

console.log(coinCombination(200))

