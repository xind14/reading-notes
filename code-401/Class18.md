# Class 18 - Cryptography

## Lab 18 - Cracking the Caesar cipher

### Overview - Cryptography

Today we’ll be tackling a cryptographic classic - the Caesar Cipher.

Your job will be to devise a method to encrypt a message that can then be decrypted when supplied with the corresponding key.

But don’t stop there! You’ll also need to devise a way to decipher the encrypted message event when you do NOT have the key!

### Feature Tasks and Requirements

1. Create an encrypt function that takes in a plain text phrase and a numeric shift.

   - The phrase will then be shifted that many letters.
     - E.g. `encrypt('abc', 1)` would return `'bcd'`.
     - E.g. `encrypt('abc', 10)` would return `'klm'`.
   - Shifts that exceed 26 should wrap around.
     - E.g. `encrypt('abc', 27)` would return `'bcd'`.
   - Shifts that push a letter out of range should wrap around.
     - E.g. `encrypt('zzz', 1)` would return `'aaa'`.

2. Create a decrypt function that takes in encrypted text and a numeric shift.

   - This function will restore the encrypted text back to its original form when the correct key is supplied.

3. Create a crack function that will decode the cipher.

   - This function should transform an encrypted message into its original state WITHOUT access to the key.

4. Devise a method for the computer to determine if the code was broken with minimal human guidance.

### Implementation Notes

1. In order to accomplish a certain task you’ll need access to a corpus of English words.
   - A search on something like python list of english words should get you going.

### User Acceptance Tests

1. The application must:

   - encrypt a string with a given shift
   - decrypt a previously encrypted string with the same shift.
   - encryption should handle upper and lower case letters.
   - encryption should allow non-alpha characters but ignore them, including white space.
   - decrypt encrypted version of It was the best of times, it was the worst of times. WITHOUT knowing the shift used.
   - refer to supplied unit tests.

### Stretch Goals

1. Research the Vigenère cipher
2. Find some examples of ROT13 encrypted punchlines, spoilers, etc.
3. Break the code for a message written in language other than English.

### Configuration

1. Create a project named caesar-cipher.

2. Use the project folder as the root of your project’s git repository.

3. Refer to Lab Submission Instructions for detailed instructions.

## Code Challenge

- **Branch Name:** tree-fizz-buzz
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

1. Write a function called fizz buzz tree
2. Arguments: k-ary tree
3. Return: new k-ary tree
4. Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
   - If the value is divisible by 3, replace the value with “Fizz”
   - If the value is divisible by 5, replace the value with “Buzz”
   - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
   - If the value is not divisible by 3 or 5, simply turn the number into a String.

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

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- Today I learned that I'm getting faster at setting up for labs and readmes because I made myself a step by step doc in my notes. I learned to be more ok with thinking using GPT isn't a training wheel, but a tool that can make me go faster. I'm little by little internalizing it's not a limitation if I need to rely on it so much. Maybe I'm learning how to use GPT and that's a different skill set itself.
