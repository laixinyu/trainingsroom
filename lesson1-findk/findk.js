/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var start = 0;
  var end = nums.length - 1;
  var key = nums.length - k;
  while (true) {
    var i = partition(nums, start, end);
    if (i === key) {
      return nums[key];
    } else if (i < key) {
      start = i + 1;
    } else {
      end = i - 1;
    }
  }
};
function partition(arr, start, end) {
  if (end > start) {
    swap(arr, start, start + Math.floor((end - start) / 2));
  }
  var pivot = arr[start];
  var j = start;

  for (var i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      if (++j === i) continue;
      swap(arr, i, j);
    }
  }
  swap(arr, start, j);
  return j;
}
// 交换 位置
function swap(ary, i, j) {
  var temp = ary[i];
  ary[i] = ary[j];
  ary[j] = temp;
}

var arrElement = document.querySelector(".inputvalue");
var calculate = document.querySelector(".calculate");
var inputK = document.querySelector(".inputK");
var reg = /^\d+$/;
calculate.addEventListener("click", function () {
  var jsonData = JSON.parse(arrElement.value);
  var arr = Array.from(jsonData);
  var result = findKthLargest(arr, inputK.value);
  var element = document.createElement("div");
  element.innerHTML = result;
  document.body.appendChild(element);
});
