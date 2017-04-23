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
