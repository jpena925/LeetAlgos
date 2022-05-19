/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    //1  2  3  4  5
    //P. C. N
    //loop through setting curr.next to previous
    let prev = null
    let curr = head
    let next = null
    while(curr !== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
    
};