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

function coinCombination(nump) {
    coins = [1,2,5,10,20,50,100,200];
    ways=0
    /*
    I'm not really sure how i can implement it but if we can create sort of a a tree for every coin that could be used 
    so for the 1 pound i will have all the other coins as children except the 2 pounds and when i go deep in the tree 
    i will keep track of the paths like the sum of the coins 
    but im not sure how i can make sure to not have the same combinations in different paths of the trees*/


}

