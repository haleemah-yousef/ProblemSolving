 /*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
*/


function indexOfItem(arr,num) 
{
    l=arr.length
    low = 0
    high = arr.length-1
    mid=Math.floor((high+low)/2)

    while (high>=low) 
    {
        if (arr[mid]==num)
            return mid;
        if (num>arr[mid])
            low=mid+1
        else
            high=mid-1
        mid=Math.floor((high+low)/2)
    }

    return -1
}



console.log(indexOfItem([1,2,3,4,5],2))