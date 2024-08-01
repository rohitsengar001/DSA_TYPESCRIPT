/**
 * problem url:https://leetcode.com/problems/decode-ways/description/
 * problem : Leetcode 91
 */
const dp = new Map();
let n = 0; //size of string

function numDecodings(s: string): number {
  n = s.length;
  dp.clear();
  return helper(s, 0);
}

function helper(s: string, pos: number): number {
  if (pos === n) return 1;
  if (s[pos] == "0") return 0;
  if (dp.has(pos)) return dp.get(pos);
  //there are only two choise to take string
  //first choice : take single chars
  let count = helper(s, pos + 1);

  //second choice : take two chars
  if (pos < n - 1 && s.substring(pos, 2) < "27") count += helper(s, pos + 2);
  dp.set(pos, count);
  return count;
}

console.log(numDecodings('1201234'));