/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 * 
* Remember to look here http://visualgo.net/sorting
*/

//no enhacemnets
function bubbleSort(arr) {
    l=arr.length;
    for(i=0; i<l-1; i++) 
    {
        for (j=0; j<l-1;j++) 
        {
            if (arr[j]>arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));

// this alg time comlexity is O((l-1)(l-1)=O(n*n) and O(1) space complexity


//enhacemnets
function eBubbleSort(arr) {
    l=arr.length;
    didSwap=false;
    for(i=0; i<l-1; i++) 
    {
        for (j=0; j<l-1;j++) 
        {
            if (arr[j]>arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]=temp;
                didSwap=true
            }

        }
        if (!didSwap) {
            break;
        }
        didSwap=false;
    }
    return arr;
}


// this alg time comlexity is O(n*n) in worst case and O(n) in best case


console.log(eBubbleSort(a));

/*More credits: Do you need to consider every element every time you iterate
 through the array? Again: Has the time complexity of your algorithm changed? 
  -not really we can just change the inner loop limit to l-i-1 because the elemnts that goit to the end already 
  passed through the whole array so no need to check them agian
  it doesnt changes the comlexity its still O(n^2) in theory but it really helps 
 */