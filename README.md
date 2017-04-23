# enukeAssignment
This is an assignment given by enuke software for hiring node engineers

Q. When is it a good idea to not use NodeJs? Why? 
Ans. Node.js is not good for CPU intensive application due to its single threaded model. So If an application have large calculation like, scientific calculation in robotics and huge calculations in space craft application in these cases it is not idea to use Node.js it is good to go for some other languages like python or java.

-- go to project folder and run npm install
-- To run tests go to project folder and type npm test
-- to run http server go to project folder and type node app.js
-- hit the api through postman or browser


api details - 
1. getMarcoPoloGame    - return the series with success true or false.
2. parseInvoiceNumbers - read the invoices from file and write the result in file - output_user_story_1.txt.
3. getTopSecret        - read the code from file and write the secret code in file - output_top_secret1.txt





Node Interview Excercises

For these take home exercises you will be asked to write a few short programs and answer a simple question.

Place all relevant files in a .zip file named [your name]_so_node_test.zip, and include a README.md file which explains how to run the programs, what is required to run the programs, how to run the unit tests and any other relevant information.

You may use any resources to answer finish these taks, but all code and answers must be your own.

The Marco Polo Game
A Simple Question about NodeJs
Implementing a User Story


Marco Polo Instructions

In the old city of Venice it was important for children to be good at math so they could grow up to be great merchants. One way for the children of Venice to practice their math skills was to play a game called Marco Polo, named after the great explorer from Venice.

The game is simple.
The children sit around in a circle and count the numbers from 1 to 100. However, every time the number that a child is supposed to say is divisible by 4, the child says 'marco' instead of the number. Every time the number is divisible by 7, the child says 'polo' instead of the number. If the number is divisible by both 4 and 7, the child will say 'marcopolo'.

Goal

Your task is to write a web service that will print out all the correct answers for this game from 1 to 1,000,000 with 1,000 numbers per line. The Web service must be written in a way which will allow multiple users to access the service at the same time without receiving any errors or having a long delay.

Expected Output

When executed, your function should print 1,000 lines of answers for all the numbers from 1 to 1,000,000.

You may use the following output as the expected result for numbers 1 to 30 for your unit test.

1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30
Your unit tests should also demonstrate that two or three users can access the api at the same time without any problem.



Simple NodeJs Question

Include in your README.md file the answer the following question:

When is it a good idea to not use NodeJs? Why? 

User Story Instructions:

The following exercise has one user story to implement. Your goal is to have a working node service that implements the use case.

You can assume the input is valid. You don't need to handle unexpected characters or invalid spacing in the input file.

Guidelines:

We are looking for:

A Node.js app.
Working code.
Readable code.
Well designed code (Object Oriented).
Simple code.
Unit Tests.
Keep your code simple, don't over engineer. Good luck!

User Story 1 - Parse invoice numbers

We have recently decided to digitise our old invoice archives. Since finding a volunteer for such an arduous task was impossible, an employee was selected at random and instructed to type in all invoice numbers into a text file.

Little did we know that the employee we picked is an aspiring ASCII artist. Instead of handing us a file containing a set of numbers, we ended up with 7-segment display representations of the invoice numbers.

This is where you come in. Write a simple node service that allows the user to upload a text file of 7-segment invoice numbers, and outputs a list with the parsed invoice numbers.

Input:

A text file containing several hundreds of invoice numbers in the following form:

      _  _     _  _  _  _  _  (line 1)
    | _| _||_||_ |_   ||_||_| (line 2)
    ||_  _|  | _||_|  ||_| _| (line 3)
                              (line 4)
      _  _  _  _  _  _     _  (line 5)
  |_||_|| ||_||_   |  |  ||_  (line 6)
    | _||_||_||_|  |  |  | _| (line 7)
                              (line 8)
Invoice number format:

Each invoice number is constructed of 9 digits [0..9]
Invoice number is written using _ and | characters.
Invoice number input takes 4 lines.
The first 3 lines contain 27 characters.
The fourth line is blank.
Note: You can use input_user_story_1.txt to feed your program.

Output:

A text file with the parsed invoice numbers. One number per row.

Example:

  123456789
  490867715
Note: You can use output_user_story_1.txt to test that the output file generated by your program is correct.

User Story 2 - Top Secret

During your in-person interview, you will be asked to modify your code to handle User Story 2. So be sure your code can be easily modified. More details will be given during the interview.

Input:

Example:


      _  _     _  _  _  _  _  (line 1)
    | _| _||_||_ |_   ||_||_| (line 2)
    ||_  _|  | _||_|  ||_| _| (line 3)
                              (line 4)
      _  _  _  _  _  _     _  (line 5)
  |_||_|| ||_||    |  |  ||_  (line 6)
    | _||_||_||_|  |     | _| (line 7)
                              (line 8)
Output:

Example:


  123456789
  4908?7?15 ILLEGAL
