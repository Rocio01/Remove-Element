var removeElement = function(nums, val) { 
  for(let i = nums.length; i >= 0; i--){
     if(nums[i] === val) {
      nums.splice(i, 1)
     }
  }  
  return nums.length;
};

// your input
// [3,2,2,3]
// 3

// Output
// [2,2]
// Expected
// [2,2]