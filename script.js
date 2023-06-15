function threeSum(arr, target) {
// write your code here
	 arr.sort((a, b) => a - b); // sort the array in ascending order
  let closestSum = Infinity;
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let diff = Math.abs(target - sum);
      
      if (diff === 0) {
        // we found a sum that is equal to the target, so we can return it
        return sum;
      }
      
      if (diff < Math.abs(target - closestSum)) {
        // update the closestSum if the current sum is closer to the target
        closestSum = sum;
      }
      
      if (sum < target) {
        // if the sum is less than target, we need to increase the sum
        left++;
      } else {
        // if the sum is greater than target, we need to decrease the sum
        right--;
      }
    }
  }
  
  return closestSum;
  
}

module.exports = threeSum;
