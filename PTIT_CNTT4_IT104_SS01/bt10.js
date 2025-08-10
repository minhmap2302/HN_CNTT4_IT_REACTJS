// Khởi tạo mảng các chuỗi bất kỳ, hãy nhóm các chuỗi có các ký tự giống nhau vào trong các mảng riêng. 
// Kết quả cuối cùng là mảng chứa các mảng chuỗi sau khi nhóm.
// Input

// Output

// ["eat", "tea", "tan", "ate", "nat", "bat"]

// [["eat","tea","ate"], ["tan","nat"], ["bat"]]

function groupAnagrams(words) {
  const groups = {};

  for (let word of words) {
    let key = word.split("").sort().join(""); 

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(word); 
  }


  return Object.values(groups);
}
  