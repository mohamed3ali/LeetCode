/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLen = 0 ;
    let start = 0;
    for(let end = 0 ; end< s.length; end++){
        let lastChar = s[end];
        if(map[lastChar] === undefined){
            map[lastChar] = 0;
        }
        map[lastChar] +=1;
        while(map[lastChar] > 1){
            let firstChar = s[start];
            map[firstChar] -= 1;
            start += 1;
        }
        maxLen = Math.max(maxLen, end - start + 1)
    }
    return maxLen;
};