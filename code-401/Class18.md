# Class 18 - Cryptography

## Lab 18 - Cracking the Caesar cipher

### Overview - Chess Board

Today we’ll be constructing chess boards like it’s 1980.

No prebuilt images, just the power of arrays and pixel art.

### Feature Tasks and Requirements

1. Your job is to render out chess boards with red and blue queens on them.

2. We’re keeping it really basic here so the only pieces are queens and each queen is represented by a blue or red square.

3. Chess board is an 8 by 8 grid of alternating black and white squares. The queens are red and blue squares.

4. Each board will have one red and one blue queen at different coordinates. In addition to displaying the board you’ll need to identify if the queens are “under attack” based on their coordinates.

### Implementation Notes

- Define a ChessBoard class

- Should contain an 8x8 grid.

  - Each cell in the grid should have a color represented in RGB format.
    - Black: (0, 0, 0)
    - White: (1, 1, 1)
    - Blue: (0, 1, 1)
    - Red: (1, 0.2, 0)

- Should have an `add_red` method that accepts a row and column as input which colors the corresponding cell.
- Should have an `add_blue` method that accepts a row and column as input which colors the corresponding cell.
- Should have a `render` method that displays the chess board on the screen with red and blue shown in correct locations.
- Should have an `is_under_attack` method that returns a boolean if red is under attack by a blue piece horizontally, vertically, or diagonally.
- Diagonal attacks can come from four directions. Make sure to handle all of them.

- Render your board for each `is_under_attack` scenario:

  1. Horizontal (aka same row).
  2. Vertical (aka same column).
  3. Four Diagonals.
  4. A "Not Under Attack" scenario.

### User Acceptance Tests

There are no acceptance tests required. The notebook should clearly show that the various `is_under_attack` scenarios have been handled.

## Code Challenge

- **Branch Name:** stack-queue-pseudo
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Create a new class called pseudo queue.
2. Do not use an existing Queue.
3. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
4. Internally, utilize 2 Stack instances to create and manage the queue

- `enqueue`

  - **Arguments:** value
  - Inserts a value into the PseudoQueue, using a first-in, first-out approach.

- `dequeue`
  - **Arguments:** none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

**NOTE:** The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

### Example

```python
# Example
queue = PseudoQueue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
value = queue.dequeue() # Output: 5
```

#### Enqueue

| Input            | Args | Internal State        |
| ---------------- | ---- | --------------------- |
| [10]->[15]->[20] | 5    | [5]->[10]->[15]->[20] |
|                  | 5    | [5]                   |

#### Dequeue

| Input                 | Output | Internal State  |
| --------------------- | ------ | --------------- |
| [5]->[10]->[15]->[20] | 20     | [5]->[10]->[15] |
| [5]->[10]->[15]       | 15     | [5]->[10]       |

## Written Class Notes


## Read 18 - Cryptography

## Resources Link/Pages


- [Encryption, Decryption & Hacking](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:online-data-security/xcae6f4a7ff015e7d:data-encryption-techniques/a/encryption-decryption-and-code-cracking)
- [Ceasar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Cryptography Crash Course](https://www.youtube.com/watch?v=jhXCTbFnK8o)

**Bookmark and Review**

- [Introduction to Cryptography](https://thebestvpn.com/cryptography/)
- [How Computers Generate Random Numbers](https://www.howtogeek.com/183051/htg-explains-how-computers-generate-random-numbers/)



## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Understanding cryptography helps developers become more security-conscious. It allows them to recognize potential vulnerabilities and implement secure coding practices.

## Reading Questions

1. What is the basic principle behind the Caesar Cipher, and how was it used historically?

      - The Caesar Cipher is a substitution cipher that shifts the letters of the alphabet by a certain amount. Julius Caesar, the historical figure who used it, employed a shift of 3. For example, 'A' becomes 'D,' 'B' becomes 'E,' and so on. Caesar used this method to encode messages, and the recipients, who knew the shift amount, could easily decode them. The Caesar Cipher is a form of symmetric encryption, as the same key (shift value) is used for both encryption and decryption.

2. What are the key differences between symmetric and asymmetric encryption? How is asymmetric used in secure communication today?

      - Symmetric: It uses a single key for both encryption and decryption. The sender and receiver must share this secret key securely. While it is efficient, key distribution can be a challenge.

      - Asymmetric: It involves a pair of public and private keys. The public key is used for encryption, and the private key is used for decryption. This eliminates the need for sharing a secret key but introduces the complexity of managing key pairs. Asymmetric encryption is commonly used for secure communication by facilitating the exchange of public keys, ensuring secure data transfer.

3. How do computers generate random numbers, and what are the differences between true random number generation (TRNG) and pseudo-random number generation (PRNG)? Discuss their use cases in cryptography.

      - "Computers can generate truly random numbers by observing some outside data, like mouse movements or fan noise, which is not predictable, and creating data from it. This is known as entropy. Other times, they generate "pseudorandom" numbers by using an algorithm so the results appear random, even though they aren't."

      - True Random Number Generation (TRNG): Involves measuring physical phenomena outside the computer, such as atmospheric noise or radioactive decay. This provides "pure randomness" not predictable by an attacker. TRNG is crucial in cryptography, especially for generating unpredictable cryptographic keys.

      - Pseudo-Random Number Generation (PRNG): Relies on algorithms and a seed value to generate numbers that appear random. While not truly random, PRNG is sufficient for certain applications like video games. However, in cryptography, true randomness is preferred to prevent predictability and enhance security.

4. What’s the difference between encryption and decryption? Explain with an analogy.

      - Encryption: It is like locking a message in a secure box. You use a key to scramble the original message (plaintext) into an unreadable format (ciphertext). The locked box (ciphertext) can be safely transmitted or stored.
      - Decryption: It is the process of unlocking the secure box. The recipient uses the appropriate key (same key used for encryption in symmetric encryption or the corresponding private key in asymmetric encryption) to revert the ciphertext back to the original plaintext.
      - Analogy: Think of encryption as putting a message in a locked safe, and decryption as having the key to open the safe and retrieve the message. Only those with the correct key can access the original information, ensuring secure communication.

## Things I want to know more about

- There's a lot of talk in the readings about security. Does this still fall under software dev and not ops?

## Learning Journal

### Reflection

Take 10-15 minutes at the end of lab to respond to the following questions, adapted from the article:

1. What went well, that I might forget if I don’t write down?
    - I liked learning the career stuff today, but I forgot to write most of it down so will rewatch recording later to take notes again.
2. What did I learn today?
    - No matter the skills you have most of your chances of getting hired is through networking, which I don't know how to do well so that's going to be such a challenge. 
3. What should I do differently next time?
    - Take screenshots of the slides.
4. What still puzzles me, or what do I need to learn more about?
    - I'm not understanding trees like I did stacks and queues so I will look at it more.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
      - Assignments are complete. Will work on readings for next week. 

