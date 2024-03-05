# Task Operations on Different Data Structures

You should be able to solve every combination of tasks both iteratively and recursively

1. **Array**

   - Iteratively: Find the max element in an array.
     ```python
     def find_max_iterative(arr):
         max_element = float('-inf')
         for element in arr:
             max_element = max(max_element, element)
         return max_element
     ```
   - Recursively: (Note: Recursion may not be the most efficient approach for this task.)
     ```python
     def find_max_recursive(arr, index):
         if index == len(arr) - 1:
             return arr[index]
         return max(arr[index], find_max_recursive(arr, index + 1))
     ```

2. **Linked List**

   - Iteratively: Find the sum of elements in a linked list.
     ```python
     def sum_of_elements_iterative(head):
         current = head
         total_sum = 0
         while current:
             total_sum += current.data
             current = current.next
         return total_sum
     ```
   - Recursively:
     ```python
     def sum_of_elements_recursive(node):
         if not node:
             return 0
         return node.data + sum_of_elements_recursive(node.next)
     ```

3. **Stack**

   - Iteratively: Check whether `x` is contained in the stack.
     ```python
     def contains_x_iterative(stack, x):
         return x in stack
     ```
   - Recursively: (Note: Recursion may not be the most suitable for this task.)
     ```python
     def contains_x_recursive(stack, x):
         if not stack:
             return False
         return stack.pop() == x or contains_x_recursive(stack, x)
     ```

4. **Queue**

   - Iteratively: Get the reversed version of the queue.
     ```python
     def reverse_queue_iterative(queue):
         reversed_queue = []
         while queue:
             reversed_queue.insert(0, queue.pop(0))
         return reversed_queue
     ```
   - Recursively: (Note: Recursion may not be the most suitable for this task.)
     ```python
     def reverse_queue_recursive(queue):
         if not queue:
             return []
         front = queue.pop(0)
         reversed_queue = reverse_queue_recursive(queue)
         return reversed_queue + [front]
     ```

5. **Tree**

   - Iteratively: Find the sum of elements in a tree (assuming a binary tree).
     ```python
     def sum_of_elements_tree_iterative(root):
         if not root:
             return 0
         total_sum = 0
         stack = [root]
         while stack:
             current = stack.pop()
             total_sum += current.data
             if current.right:
                 stack.append(current.right)
             if current.left:
                 stack.append(current.left)
         return total_sum
     ```
   - Recursively:
     ```python
     def sum_of_elements_tree_recursive(node):
         if not node:
             return 0
         return node.data + sum_of_elements_tree_recursive(node.left) + sum_of_elements_tree_recursive(node.right)
     ```

6. **BST**

   - Iteratively: Check whether `x` is contained in the BST.
     ```python
     def contains_x_bst_iterative(root, x):
         current = root
         while current:
             if current.data == x:
                 return True
             elif current.data < x:
                 current = current.right
             else:
                 current = current.left
         return False
     ```
   - Recursively:
     ```python
     def contains_x_bst_recursive(root, x):
         if not root:
             return False
         if root.data == x:
             return True
         elif root.data < x:
             return contains_x_bst_recursive(root.right, x)
         else:
             return contains_x_bst_recursive(root.left, x)
     ```

7. **Tree - Reversed Version**

   - Recursively:
     ```python
     def reverse_tree_recursive(root):
         if not root:
             return None
         root.left, root.right = root.right, root.left
         reverse_tree_recursive(root.left)
         reverse_tree_recursive(root.right)
         return root
     ```
   - Iteratively:

     ```python
     def reverse_tree_iterative(root):
         if not root:
             return None
         stack = [root]
         while stack:
             current = stack.pop()
             current.left, current.right = current.right, current.left
             if current.right:
                 stack.append(current.right)
             if current.left:
                 stack.append(current.left)
         return root

     ```

8. **Tree - Sorted Version**

   - In-order traversal of a BST gives a sorted version of it. So, you can use the iterative or recursive in-order traversal algorithm.

   Iterative:

   ```python
   def in_order_traversal(root):
       result = []
       stack = []
       current = root
       while current or stack:
           while current:
               stack.append(current)
               current = current.left
           current = stack.pop()
           result.append(current.data)
           current = current.right
       return result
   ```

Recursive:

```python
def in_order_traversal_recursive(root):
    result = []
    if root:
        result += in_order_traversal_recursive(root.left)
        result.append(root.data)
        result += in_order_traversal_recursive(root.right)
    return result
```



[DSA Questions](https://codefellows.github.io/dsa-practice/)
[DSA GH](https://github.com/codefellows/dsa-practice)


Certainly! Here is the corrected list with every line starting with "1." in Markdown syntax:

1. Given an Array, Find the sum of all elements ... Iteratively.
1. Given an Array, Find the sum of all elements ... Recursively.
1. Given an Array, Determine if a specific value is present ... Iteratively.
1. Given an Array, Determine if a specific value is present ... Recursively.
1. Given an Array, Return a list of all duplicate values/keys ... Iteratively.
1. Given an Array, Return a list of all duplicate values/keys ... Recursively.
1. Given an Array, Remove all duplicate values/keys ... Iteratively.
1. Given an Array, Remove all duplicate values/keys ... Recursively.
1. Given an Array, Find the maximum value ... Iteratively.
1. Given an Array, Find the maximum value ... Recursively.
1. Given an Array, Find the minimum value ... Iteratively.
1. Given an Array, Find the minimum value ... Recursively.
1. Given an Array, Reverse the values ... Iteratively.
1. Given an Array, Reverse the values ... Recursively.
1. Given an Array, Sort the values ... Iteratively.
1. Given an Array, Sort the values ... Recursively.

1. Given a Stack, Find the sum of all elements ... Iteratively.
1. Given a Stack, Find the sum of all elements ... Recursively.
1. Given a Stack, Determine if a specific value is present ... Iteratively.
1. Given a Stack, Determine if a specific value is present ... Recursively.
1. Given a Stack, Return a list of all duplicate values/keys ... Iteratively.
1. Given a Stack, Return a list of all duplicate values/keys ... Recursively.
1. Given a Stack, Remove all duplicate values/keys ... Iteratively.
1. Given a Stack, Remove all duplicate values/keys ... Recursively.
1. Given a Stack, Find the maximum value ... Iteratively.
1. Given a Stack, Find the maximum value ... Recursively.
1. Given a Stack, Find the minimum value ... Iteratively.
1. Given a Stack, Find the minimum value ... Recursively.
1. Given a Stack, Reverse the values ... Iteratively.
1. Given a Stack, Reverse the values ... Recursively.
1. Given a Stack, Sort the values ... Iteratively.
1. Given a Stack, Sort the values ... Recursively.

1. Given a Queue, Find the sum of all elements ... Iteratively.
1. Given a Queue, Find the sum of all elements ... Recursively.
1. Given a Queue, Determine if a specific value is present ... Iteratively.
1. Given a Queue, Determine if a specific value is present ... Recursively.
1. Given a Queue, Return a list of all duplicate values/keys ... Iteratively.
1. Given a Queue, Return a list of all duplicate values/keys ... Recursively.
1. Given a Queue, Remove all duplicate values/keys ... Iteratively.
1. Given a Queue, Remove all duplicate values/keys ... Recursively.
1. Given a Queue, Find the maximum value ... Iteratively.
1. Given a Queue, Find the maximum value ... Recursively.
1. Given a Queue, Find the minimum value ... Iteratively.
1. Given a Queue, Find the minimum value ... Recursively.
1. Given a Queue, Reverse the values ... Iteratively.
1. Given a Queue, Reverse the values ... Recursively.
1. Given a Queue, Sort the values ... Iteratively.
1. Given a Queue, Sort the values ... Recursively.

1. Given a Linked List, Find the sum of all elements ... Iteratively.
1. Given a Linked List, Find the sum of all elements ... Recursively.
1. Given a Linked List, Determine if a specific value is present ... Iteratively.
1. Given a Linked List, Determine if a specific value is present ... Recursively.
1. Given a Linked List, Return a list of all duplicate values/keys ... Iteratively.
1. Given a Linked List, Return a list of all duplicate values/keys ... Recursively.
1. Given a Linked List, Remove all duplicate values/keys ... Iteratively.
1. Given a Linked List, Remove all duplicate values/keys ... Recursively.
1. Given a Linked List, Find the maximum value ... Iteratively.
1. Given a Linked List, Find the maximum value ... Recursively.
1. Given a Linked List, Find the minimum value ... Iteratively.
1. Given a Linked List, Find the minimum value ... Recursively.
1. Given a Linked List, Reverse the values ... Iteratively.
1. Given a Linked List, Reverse the values ... Recursively.
1. Given a Linked List, Sort the values ... Iteratively.
1. Given a Linked List, Sort the values ... Recursively.

1. Given a Binary Tree, Find the sum of all elements ... Iteratively.
1. Given a Binary Tree, Find the sum of all elements ... Recursively.
1. Given a Binary Tree, Determine if a specific value is present ... Iteratively.
1. Given a Binary Tree, Determine if a specific value is present ... Recursively.
1. Given a Binary Tree, Return a list of all duplicate values/keys ... Iteratively.
1. Given a Binary Tree, Return a list of all duplicate values/keys ... Recursively.
1. Given a Binary Tree, Remove all duplicate values/keys ... Iteratively.
1. Given a Binary Tree, Remove all duplicate values/keys ... Recursively.
1. Given a Binary Tree, Find the maximum value ... Iteratively.
1. Given a Binary Tree, Find the maximum value ... Recursively.
1. Given a Binary Tree, Find the minimum value ... Iteratively.
1. Given a Binary Tree, Find the minimum value ... Recursively.
1. Given a Binary Tree, Reverse the values ... Iteratively.
1. Given a Binary Tree, Reverse the values ... Recursively.
1. Given a Binary Tree, Sort the values ... Iteratively.
1. Given a Binary Tree, Sort the values ... Recursively.

1. Given a Binary Search Tree, Find the sum of all elements ... Iteratively.
1. Given a Binary Search Tree, Find the sum of all elements ... Recursively.
1. Given a Binary Search Tree, Determine if a specific value is present ... Iteratively.
1. Given a Binary Search Tree, Determine if a specific value is present ... Recursively.
1. Given a Binary Search Tree, Return a list of all duplicate values/keys ... Iteratively.
1. Given a Binary Search Tree, Return a list of all duplicate values/keys ... Recursively.
1. Given a Binary Search Tree, Remove all duplicate values/keys ... Iteratively.
1. Given a Binary Search Tree, Remove all duplicate values/keys ... Recursively.
1. Given a Binary Search Tree, Find the maximum value ... Iteratively.
1. Given a Binary Search Tree, Find the maximum value ... Recursively.
1. Given a Binary Search Tree, Find the minimum value ... Iteratively.
1. Given a Binary Search Tree, Find the minimum value ... Recursively.
1. Given a Binary Search Tree, Reverse the values ... Iteratively.
1. Given a Binary Search Tree, Reverse the values ... Recursively.
1. Given a Binary Search Tree, Sort the values ... Iteratively.
1. Given a Binary Search Tree, Sort the values ... Recursively.













given a linked list of single digit numbers write a method that will add one to the number that is represented by the linked list so for example an odometer where it increments up so 1234 null will output 1235 then 1236 always positive number can have zeros

```python
# Define the Node class representing a node in a linked list
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Function to reverse a linked list
def reverse(head):
    prev = None
    current = head

    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node

    return prev

# Function to add one to a number represented by a linked list
def addOne(head):
    # Reverse the linked list to simplify addition
    head = reverse(head)
    current = head
    carry = 1  # Initialize carry to 1 since we are adding one

    while current:
        # Check if the current digit is not 9
        if current.val != 9:
            current.val += carry
            carry = 0  # Reset carry to 0
            break
        else:
            current.val = 0  # Set 9 to 0 for the current digit

        # If the next node is None, add a new node with value 0
        if current.next is None:
            current.next = Node(0)
            current = current.next
        else:
            current = current.next

    # If there is still a carry, add a new node with value 1
    if carry:
        current.next = Node(1)

    # Reverse the linked list back to its original order
    return reverse(head)

# Test case: 1234
input_head = Node(1, Node(2, Node(3, Node(4))))

# Print the original list
print("Original list:")
current = input_head
while current:
    print(current.val, end=" ")
    current = current.next
print()

# Call the addOne function
output_head = addOne(input_head)

# Print the modified list after adding one
print("After adding one:")
current = output_head
while current:
    print(current.val, end=" ")
    current = current.next
print()
```





