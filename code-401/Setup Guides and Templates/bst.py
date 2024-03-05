# 1. Given a Binary Search Tree, Find the sum of all elements ... Iteratively.
# 1. Given a Binary Search Tree, Find the sum of all elements ... Recursively.
# 1. Given a Binary Search Tree, Determine if a specific value is present ... Iteratively.
# 1. Given a Binary Search Tree, Determine if a specific value is present ... Recursively.
# 1. Given a Binary Search Tree, Return a list of all duplicate values/keys ... Iteratively.
# 1. Given a Binary Search Tree, Return a list of all duplicate values/keys ... Recursively.
# 1. Given a Binary Search Tree, Remove all duplicate values/keys ... Iteratively.
# 1. Given a Binary Search Tree, Remove all duplicate values/keys ... Recursively.
# 1. Given a Binary Search Tree, Find the maximum value ... Iteratively.
# 1. Given a Binary Search Tree, Find the maximum value ... Recursively.
# 1. Given a Binary Search Tree, Find the minimum value ... Iteratively.
# 1. Given a Binary Search Tree, Find the minimum value ... Recursively.
# 1. Given a Binary Search Tree, Reverse the values ... Iteratively.
# 1. Given a Binary Search Tree, Reverse the values ... Recursively.
# 1. Given a Binary Search Tree, Sort the values ... Iteratively.
# 1. Given a Binary Search Tree, Sort the values ... Recursively.




class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class BinarySearchTree:
    def __init__(self):
        self.root = None

    # Insert a value into the BST
    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if not node.left:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        elif value > node.value:
            if not node.right:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)

    # 1. Find the sum of all elements Iteratively
    def sum_iterative(self):
        if not self.root:
            return 0
        stack = [self.root]
        total_sum = 0
        while stack:
            node = stack.pop()
            total_sum += node.value
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return total_sum

    # 2. Find the sum of all elements Recursively
    def sum_recursive(self, node):
        if not node:
            return 0
        return node.value + self.sum_recursive(node.left) + self.sum_recursive(node.right)

    # 3. Determine if a specific value is present Iteratively
    def search_iterative(self, value):
        if not self.root:
            return False
        current = self.root
        while current:
            if value == current.value:
                return True
            elif value < current.value:
                current = current.left
            else:
                current = current.right
        return False

    # 4. Determine if a specific value is present Recursively
    def search_recursive(self, node, value):
        if not node:
            return False
        if value == node.value:
            return True
        elif value < node.value:
            return self.search_recursive(node.left, value)
        else:
            return self.search_recursive(node.right, value)

    # 5. Return a list of all duplicate values/keys Iteratively
    def find_duplicates_iterative(self):
        if not self.root:
            return []
        seen = set()
        duplicates = []
        stack = [self.root]
        while stack:
            node = stack.pop()
            if node.value in seen:
                duplicates.append(node.value)
            else:
                seen.add(node.value)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return duplicates

    # 6. Return a list of all duplicate values/keys Recursively
    def find_duplicates_recursive(self, node, seen=None):
        if not node:
            return []
        if seen is None:
            seen = set()
        duplicates = []
        if node.value in seen:
            duplicates.append(node.value)
        else:
            seen.add(node.value)
        duplicates += self.find_duplicates_recursive(node.left, seen)
        duplicates += self.find_duplicates_recursive(node.right, seen)
        return duplicates

    # 7. Remove all duplicate values/keys Iteratively
    def remove_duplicates_iterative(self):
        if not self.root:
            return
        seen = set()
        stack = [self.root]
        while stack:
            node = stack.pop()
            if node.value in seen:
                node.value = None  # Mark for removal
            else:
                seen.add(node.value)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        self.remove_marked_nodes()

    # Helper function to remove marked nodes
    def remove_marked_nodes(self):
        if not self.root:
            return
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            if node.left and node.left.value is None:
                node.left = None
            if node.right and node.right.value is None:
                node.right = None
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    # 8. Remove all duplicate values/keys Recursively
    def remove_duplicates_recursive(self, node=None, seen=None):
        if not node:
            return
        if seen is None:
            seen = set()
        if node.value in seen:
            node.value = None  # Mark for removal
        else:
            seen.add(node.value)
        self.remove_duplicates_recursive(node.left, seen)
        self.remove_duplicates_recursive(node.right, seen)
        self.remove_marked_nodes()

    # 9. Find the maximum value Iteratively
    def find_max_iterative(self):
        if not self.root:
            return None
        current = self.root
        while current.right:
            current = current.right
        return current.value

    # 10. Find the maximum value Recursively
    def find_max_recursive(self, node):
        if not node:
            return float('-inf')
        if not node.right:
            return node.value
        return self.find_max_recursive(node.right)

    # 11. Find the minimum value Iteratively
    def find_min_iterative(self):
        if not self.root:
            return None
        current = self.root
        while current.left:
            current = current.left
        return current.value

    # 12. Find the minimum value Recursively
    def find_min_recursive(self, node):
        if not node:
            return float('inf')
        if not node.left:
            return node.value
        return self.find_min_recursive(node.left)

    # 13. Reverse the values Iteratively (Inorder Traversal)
    def reverse_iterative(self):
        stack = []
        current = self.root
        while stack or current:
            if current:
                stack.append(current)
                current = current.left
            else:
                current = stack.pop()
                current.left, current.right = current.right, current.left
                current = current.left

    # 14. Reverse the values Recursively
    def reverse_recursive(self, node):
        if not node:
            return
        node.left, node.right = node.right, node.left
        self.reverse_recursive(node.left)
        self.reverse_recursive(node.right)

    # 15. Sort the values Iteratively (using Inorder Traversal)
    def sort_iterative(self):
        if not self.root:
            return []
        sorted_list = []
        stack = []
        current = self.root
        while stack or current:
            if current:
                stack.append(current)
                current = current.left
            else:
                current = stack.pop()
                sorted_list.append(current.value)
                current = current.right
        return sorted_list

    # 16. Sort the values Recursively (using Inorder Traversal)
    def sort_recursive(self, node):
        if not node:
            return []
        sorted_list = []
        sorted_list += self.sort_recursive(node.left)
        sorted_list.append(node.value)
        sorted_list += self.sort_recursive(node.right)
        return sorted_list