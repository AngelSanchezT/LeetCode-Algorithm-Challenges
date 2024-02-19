/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let arr1 = [l1.val]
    while (l1.next !== null) {
        l1 = l1.next;
        arr1.push(l1.val)
    }

    let arr2 = [l2.val]
    while (l2.next !== null) {
        l2 = l2.next;
        arr2.push(l2.val)
    }

    const num1 = BigInt(arr1.reverse().join(''));
    const num2 = BigInt(arr2.reverse().join(''));
    const arrResult = String(num1 + num2).split('').reverse();

    let nodeResult = new ListNode(arrResult[arrResult.length - 1], null)
    
    for(let i = arrResult.length - 2 ; i >= 0; i --) {
        let nodeTemp = new ListNode(arrResult[i], nodeResult)
        nodeResult = nodeTemp
    }
    
    return nodeResult;

};
