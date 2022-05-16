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
var deleteDuplicates = function(head) {
    //start at head
    //check if curr.val = curr.next.val, 
    //if so, change curr.next to curr.next.next
    //if not, curr = curr.next
    curr = head
    while (curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    
    return head
};