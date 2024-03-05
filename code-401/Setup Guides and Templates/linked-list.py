# 1. Given a Linked List, Find the sum of all elements ... Iteratively.
# 1. Given a Linked List, Find the sum of all elements ... Recursively.
# 1. Given a Linked List, Determine if a specific value is present ... Iteratively.
# 1. Given a Linked List, Determine if a specific value is present ... Recursively.
# 1. Given a Linked List, Return a list of all duplicate values/keys ... Iteratively.
# 1. Given a Linked List, Return a list of all duplicate values/keys ... Recursively.
# 1. Given a Linked List, Remove all duplicate values/keys ... Iteratively.
# 1. Given a Linked List, Remove all duplicate values/keys ... Recursively.
# 1. Given a Linked List, Find the maximum value ... Iteratively.
# 1. Given a Linked List, Find the maximum value ... Recursively.
# 1. Given a Linked List, Find the minimum value ... Iteratively.
# 1. Given a Linked List, Find the minimum value ... Recursively.
# 1. Given a Linked List, Reverse the values ... Iteratively.
# 1. Given a Linked List, Reverse the values ... Recursively.
# 1. Given a Linked List, Sort the values ... Iteratively.
# 1. Given a Linked List, Sort the values ... Recursively.


class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def display(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")

    # 1. Find the sum of all elements Iteratively
    def sum_iterative(self):
        current = self.head
        total_sum = 0
        while current:
            total_sum += current.value
            current = current.next
        return total_sum

    # 2. Find the sum of all elements Recursively
    def sum_recursive(self, node):
        if not node:
            return 0
        return node.value + self.sum_recursive(node.next)

    # 3. Determine if a specific value is present Iteratively
    def search_iterative(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    # 4. Determine if a specific value is present Recursively
    def search_recursive(self, node, value):
        if not node:
            return False
        if node.value == value:
            return True
        return self.search_recursive(node.next, value)

    # 5. Return a list of all duplicate values/keys Iteratively
    def find_duplicates_iterative(self):
        current = self.head
        seen = set()
        duplicates = []
        while current:
            if current.value in seen:
                duplicates.append(current.value)
            else:
                seen.add(current.value)
            current = current.next
        return duplicates

    # 6. Return a list of all duplicate values/keys Recursively
    def find_duplicates_recursive(self, node, seen=None):
        if seen is None:
            seen = set()
        if not node:
            return []
        if node.value in seen:
            return [node.value] + self.find_duplicates_recursive(node.next, seen)
        else:
            seen.add(node.value)
            return self.find_duplicates_recursive(node.next, seen)

    # 7. Remove all duplicate values/keys Iteratively
    def remove_duplicates_iterative(self):
        current = self.head
        seen = set()
        prev = None
        while current:
            if current.value in seen:
                prev.next = current.next
            else:
                seen.add(current.value)
                prev = current
            current = current.next

    # 8. Remove all duplicate values/keys Recursively
    def remove_duplicates_recursive(self, node=None, seen=None):
        if seen is None:
            seen = set()
        if node is None:
            return
        if node.value in seen:
            return self.remove_duplicates_recursive(node.next, seen)
        else:
            seen.add(node.value)
            node.next = self.remove_duplicates_recursive(node.next, seen)
            return node

    # 9. Find the maximum value Iteratively
    def find_max_iterative(self):
        if not self.head:
            return None
        current = self.head
        max_value = current.value
        while current:
            if current.value > max_value:
                max_value = current.value
            current = current.next
        return max_value

    # 10. Find the maximum value Recursively
    def find_max_recursive(self, node):
        if not node:
            return float('-inf')
        return max(node.value, self.find_max_recursive(node.next))

    # 11. Find the minimum value Iteratively
    def find_min_iterative(self):
        if not self.head:
            return None
        current = self.head
        min_value = current.value
        while current:
            if current.value < min_value:
                min_value = current.value
            current = current.next
        return min_value

    # 12. Find the minimum value Recursively
    def find_min_recursive(self, node):
        if not node:
            return float('inf')
        return min(node.value, self.find_min_recursive(node.next))

    # 13. Reverse the values Iteratively
    def reverse_iterative(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

    # 14. Reverse the values Recursively
    def reverse_recursive(self, node):
        if not node or not node.next:
            self.head = node
            return
        self.reverse_recursive(node.next)
        node.next.next = node
        node.next = None

    # 15. Sort the values Iteratively (using Bubble Sort)
    def sort_iterative(self):
        if not self.head:
            return
        swapped = True
        while swapped:
            swapped = False
            current = self.head
            while current.next:
                if current.value > current.next.value:
                    current.value, current.next.value = current.next.value, current.value
                    swapped = True
                current = current.next

    # 16. Sort the values Recursively (using Merge Sort)
    def sort_recursive(self, head):
        if not head or not head.next:
            return head
        mid = self.get_middle(head)
        next_to_mid = mid.next
        mid.next = None
        left = self.sort_recursive(head)
        right = self.sort_recursive(next_to_mid)
        return self.merge(left, right)

    def get_middle(self, head):
        if not head:
            return head
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def merge(self, left, right):
        if not left:
            return right
        if not right:
            return left
        if left.value < right.value:
            result = left
            result.next = self.merge(left.next, right)
        else:
            result = right
            result.next = self.merge(left, right.next)
        return result