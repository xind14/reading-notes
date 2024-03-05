# Class 5 - Linked Lists, Big O, Resume Workshop

## Lab 5 - None


## Code Challenge - Linked List Implementation


## Written Class Notes

## Read 5 - Implementation: Linked Lists

## Resources Link/Pages

- [Big O: Analysis of Algorithm Efficiency](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/big_oh.html)
- [Linked Lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)

      *What is a Linked List*
      - A sequence of Nodes connected to each other.
      - Each Node references the next Node in the link.
      - Two types: Singly and Doubly (implementing Singly in this case).

      *Terminology*
      - **Linked List:** A data structure containing nodes that point to the next node.
      - **Singly:** One reference, pointing to the Next node.
      - **Doubly:** Two references, pointing to both Next and Previous nodes.
      - **Node:** Individual items in the linked list with data and reference.
      - **Next:** Property in each node containing the reference to the next node.
      - **Head:** Reference to the first node.
      - **Current:** Reference to the node currently being examined.

      *What does it look like*
      - Representation of a Singly Linked List.

      *Traversal*
      - No foreach or for loop for traversal.
      - Depends on the Next value in each node.
      - Approach: while() loop.
      - Current variable guides traversal, starting from Head.

      *Traversal Example*
      - Use case: Checking if LinkedList includes a specific value.
      - Pseudo-code for Includes algorithm.

      *Traversal Big O*
      - Time complexity: O(n) - Worst case when the target node is the last.
      - Space complexity: O(1) - No additional space used.

      *Adding a Node*
      - **Adding O(1):** Replacing Head with a new node.
        - Pseudo-code for Add method.
      - **Adding O(n):** Adding to the middle requires re-allocation.
        - Demonstration with a basic Singly Linked List.
        - Pseudo-code for AddBefore method.

      *AddBefore Big O*
      - Time complexity: O(n) - Worst case when inserting at the end.
      - Space complexity: O(1) - No additional space used.

      *Print Out Nodes*
      - Printing all nodes similar to Includes method.
      - Pseudo-code for Print method.

      *Prerequisites*
      - Consider requiring a value when constructing the Node class.

- [What’s a Linked List, Anyway pt1](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

      *Introduction*
      - Linear data structures: Organizing information with various tools.
      - Data structures include variables, arrays, hashes, and objects.

      *Linked Lists Basics*
      - **Linear Data Structures:** Sequenced and ordered, like hopscotch.
      - **Linear vs. Non-linear:** Linear structures traverse sequentially; non-linear structures have no order.

      *Arrays vs. Linked Lists*
      - **Memory Management:**
        - Arrays need contiguous memory.
        - Linked lists use scattered memory, dynamic and flexible.

      *Memory Allocation*
      - **Static vs. Dynamic Data Structures:**
        - Arrays are static, fixed memory allocation.
        - Linked lists are dynamic, can grow or shrink in memory.

      *Parts of a Linked List*
      - Series of nodes make up a linked list.
      - Head: Reference to the first node.
      - Nodes contain data and reference to the next node.
      - End: Node pointing to null.

      *Node Functionality*
      - Node's role: Knows its data and neighbor.
      - Linked lists don't need contiguous memory due to node references.
      - Dynamic growth and shrinkage without copying elements.

      *Types of Linked Lists*
      1. **Singly Linked Lists:**
        - Traverse in one direction.
      2. **Doubly Linked Lists:**
        - Nodes have references to both next and previous nodes.
      3. **Circular Linked Lists:**
        - No end node pointing to null; tail connects to the beginning.

      *Conclusion*
      - Linked lists' power lies in dynamic memory use.
      - Understanding node fundamentals is key.
      - Types of linked lists depend on problem-solving needs.

- [What’s a Linked List, Anyway pt2](https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996)

      *Introduction*
      - **Linear Data Structures:** Organizing information using various tools.
      - Data structures include variables, arrays, hashes, and objects.

      *Linked Lists Basics*
      - **Linear Data Structures:** Sequenced and ordered, like hopscotch.
      - **Linear vs. Non-linear:** Linear structures traverse sequentially; non-linear structures have no order.

      *Arrays vs. Linked Lists*
      - **Memory Management:**
        - Arrays need contiguous memory.
        - Linked lists use scattered memory, dynamic, and flexible.

      *Memory Allocation*
      - **Static vs. Dynamic Data Structures:**
        - Arrays are static, fixed memory allocation.
        - Linked lists are dynamic, can grow or shrink in memory.

      *Parts of a Linked List*
      - Series of nodes make up a linked list.
      - **Head:** Reference to the first node.
      - Nodes contain data and reference to the next node.
      - **End:** Node pointing to null.

      *Node Functionality*
      - Node's role: Knows its data and neighbor.
      - Linked lists don't need contiguous memory due to node references.
      - Dynamic growth and shrinkage without copying elements.

      *Types of Linked Lists*
      1. **Singly Linked Lists:**
        - Traverse in one direction.
      2. **Doubly Linked Lists:**
        - Nodes have references to both next and previous nodes.
      3. **Circular Linked Lists:**
        - No end node pointing to null; tail connects to the beginning.

      *Conclusion*
      - Linked lists' power lies in dynamic memory use.
      - Understanding node fundamentals is key.
      - Types of linked lists depend on problem-solving needs.

## Answer

To turn in your reading “Reply” to this discussion by teaching something that you learned. Then review what one of your classmates learned, and leave a comment.

Some ideas for how you might want to teach:

- Use an analogy
- Explain a detail in depth
- Use WHY, WHAT, HOW structure
- Tutorial / walk through an example
- Write a quiz
- Create a vocabulary/definition list
- Write a cheat sheet
- Create a diagram / visualization / cartoon of a topic
- Anthropomorphize the concepts, and write a conversation between them
- Build a map of the information
- Construct a fill-in-the-blank worksheet for the topic

### Vocabulary/Definition List for Linked Lists

1. **Linked List:**

   - _Definition:_ A linear data structure consisting of a sequence of elements, where each element points to the next one in the sequence.
   - _Analogy:_ Imagine a linked list as a train, where each train car represents a node, and the connection between cars represents the links between nodes.

2. **Node:**

   - _Definition:_ The basic building block of a linked list, containing data and a reference to the next node in the sequence.
   - _Analogy:_ Think of a node as a treasure chest; it holds valuable information (data) and a map (reference) to the next treasure chest.

3. **Head:**

   - _Definition:_ The reference to the first node in a linked list.
   - _Analogy:_ The head is like the engine of a train, leading the way and indicating the starting point of the linked list.

4. **Next:**
   - _Definition:_ Each node contains a property called Next. This property contains the reference to the next node.
   - _Analogy:_ Visualize a relay race; the baton (Next) is passed from one runner (node) to the next, ensuring a seamless transition in the linked list.
5. **Current:**

   - _Definition:_ The Current is a reference of type Node to the node that is currently being looked at. When traversing, you create a new Current variable at the Head to guarantee you are starting from the beginning of the linked list.
   - _Analogy:_ Think of the Current as a tour guide; it leads you through the linked list, starting afresh from the Head to ensure you don't miss any part of the journey.

6. **Singly Linked List:**

   - _Definition:_ A type of linked list where each node points to the next one in a single direction.
   - _Analogy:_ Picture a line of people holding hands; each person (node) is connected to the next one, forming a singly linked structure.

7. **Doubly Linked List:**

   - _Definition:_ A type of linked list where each node has references to both the next and previous nodes.
   - _Analogy:_ Imagine a two-way street; each vehicle (node) can move forward (next) or backward (previous), allowing bidirectional navigation.

8. **Circular Linked List:**

   - _Definition:_ A linked list in which the last node connects back to the first node, forming a closed loop.
   - _Analogy:_ Like a necklace with no clasp, a circular linked list creates a continuous loop with no clear start or end.

9. **Dynamic Memory Allocation:**

   - _Definition:_ Allocating memory for nodes as needed during runtime, allowing for flexible and efficient memory use.
   - _Analogy:_ Think of a dynamic memory allocation as booking seats on a bus; you only allocate space when new passengers (nodes) join the journey.

10. **Contiguous Memory:**

    - _Definition:_ Memory allocation where elements are stored in adjacent locations, as seen in arrays.
    - _Analogy:_ Similar to a bookshelf where books (elements) are placed side by side, contiguous memory allows for easy access in a linear fashion.

11. **Scattered Memory:**

    - _Definition:_ Memory allocation where elements are stored in non-contiguous locations, characteristic of linked lists.
    - _Analogy:_ Picture scattered islands in an archipelago; each island (element) exists independently, and the links (connections) guide the traversal.

12. **Static Data Structure:**

    - _Definition:_ A structure with fixed memory allocation, like arrays.
    - _Analogy:_ Compare a static structure to a fixed-size box; it has a predetermined capacity, and you cannot exceed its limits.

13. **Dynamic Data Structure:**

    - _Definition:_ A structure with flexible memory allocation that can grow or shrink, like linked lists.
    - _Analogy:_ Think of a dynamic structure as a expandable folder; it can adjust its size based on the number of papers (nodes) you add or remove.

14. **Linear Data Structure:**

    - _Definition:_ A structure where elements are arranged in a sequential order.
    - _Analogy:_ Visualize a conveyor belt at a factory; elements move one after the other in a linear fashion for efficient processing.

15. **Traversal:**
    - _Definition:_ Moving through the elements of a linked list, either for searching, processing, or modification.
    - _Analogy:_ Similar to exploring a path in a garden; traversal involves moving from one node to another, enjoying the journey through linked elements.

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
    - I was following along with the demo, so I didn't fully pay attention so I need to go back to look at that.
2. What did I learn today?
    - I learned tips to redo resume like using gpt to tailor resume to job posting
3. What should I do differently next time?
    - I really don't know. I don't think this new method of just lecturing/reading off slides is working because I fell asleep so many times.
4. What still puzzles me, or what do I need to learn more about?
    - Everything. I felt like I wasn't taught anything and we're just expected to know it by reading articles or documentation but I don't learn that way so I've been just watching youtube videos
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
      - the code challenge is complete and so is the resume and power hour

## Career 5 - Partner Power Hour - Report #1

> If there is no live presentation on campus in this module, select the appropriate presentation from the list below. All presenters are open to connections and invite you to reach out to them, so that you can to learn more about them, their company, and the industry.
> You may find it difficult or challenging to connect with industry professionals and gain an inside look at how the tech world operates. We’ve drawn on our network to bring you speakers and topics relevant to this stage of your career transition. These presentations may serve to educate, enlighten, and motivate you along your journey. Take advantage of this opportunity, and make the most of the insights these presentations provide… you never know where a connection will lead.

1. [Breaking Down the Tech Interview w/Rover - Rover Engineering Team](https://youtu.be/_6Fi8FFvdQs)
2. [Whiteboarding Tips & Strategies - Roger Huba](https://youtu.be/aDL3403Q6xY)
3. [Automate Yourself Out of a Job - Adam Eivy](https://youtu.be/2VJV-zNCtF8)
4. [Communication Under Stress - Eve Denison](https://youtu.be/K0fnB3ygcm4)
5. [Deep dive - Dev Tools - David Souther](https://youtu.be/nGNQCisfj8Q)
6. [CI/CD History Lesson - Kat Cosgrove](https://youtu.be/_Md_NTWNgOE)
7. [The 7 C’s of Cybersecurity & Coding - Courtney Hans](https://youtu.be/GqRDGi4ta5U)
8. [Your Net Worth - John Cokos](https://youtu.be/Qu-_1b3xYGQ)

> Breaking Down the Tech Interview w/Rover - Rover Engineering Team

1. Share one or two ways the speaker’s information will change your approach to your career transition.

    - Master the art of asking questions.
    - Showcase curiosity and ask insightful questions.
    - Assess the team's receptiveness to change.
    - Understand company goals and discuss your contribution.
    - Be prepared to share what excites you about the future of the company and your vision of success in the role.
    - Possible interview question to think about: What is the person excited about for the future of company, what they see as success for that role


1. List a few key take-aways from this presentation.

    - **Overview:**

      - 2-3 rounds for internships and full-time roles.
      - May include phone screens, behavioral interviews, technical assessments, pair programming, take-home projects, and final round interviews onsite.

    - **Behavioral Interviews:**
      - **Preparation:**
        - Know yourself and your accomplishments.
        - Familiarize yourself with company values.
        - Explain why you're excited about the company.

      - **Tips:**
        - Align responses with company values.
        - Relate experiences to values during interviews.
        - Example (Rover): Relate experiences to the value of discipline in debates.

      - **Common Questions:**
        - Discuss group work experiences.
        - Explain how the job aligns with career goals.
        - Emphasize team player qualities.

    - **Technical Assessments:**
      - **Software Engineer:**
        - Screening skills assessment.
        - Pair programming with an engineer.
        - Completion of a take-home project.
        - Ability to explain technical details on the resume.

      - **Tips:**
        - Review data structures.
        - Use your preferred coding language.
        - Practice problems with others.
        - Be honest about skills.
        - Discuss edge cases and test solutions.

      - **Product Manager:**
        - Skills looked for include user empathy, data-driven reasoning, concise communication, cross-functional stakeholder management, and risk assessment.
        - Noncoding skills: problem-solving, adaptability, communication.

      - **Tips:**
        - Master the art of asking questions.
        - Showcase curiosity and ask insightful questions.

      - **Common Questions:**
        - Assess the team's receptiveness to change.
        - Understand company goals and discuss your contribution.


1. Share a screenshot of your LinkedIn connection request, including a nicely worded note, sent to the speaker or someone else at their company.
   ![Rosie Brezynski](./img/rosie-brezynski%20.png)

## Career 5 - Resume Completed
