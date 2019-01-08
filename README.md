# JavaScript-Calculator

## Introduction
Hey there! Here I have created a four function calculator using JavaScript and a bit of JQuery for DOM Manipulation. The user enters the operation they wish to perform, hits the "=" button and are presented with the calculated result. The program can handle both single and multiple operation expressions, following standard order of operations rules.

I took on this project to test my ability to handle advanced array manipulation and looping. Incorporating order of operations capabilities proved much more difficult than anticipated. But, after a good amount of thinking, research and some trial and error, I was eventually able to code it! Please see below for more info on the specific logic used under "General Methodology."

## Technologies 
HTML 5<br/>
CSS 3<br/>
JavaScript<br/>
JQuery<br/>

## General Methodology
The main methodology I implemented in this project was array concatenation, parsing and looping. When the user clicks on a number or operation, all the corresponsing values are pushed to an array called expressionArr. 

For example,

If a user enters 5 + 2 / 3 ==> ["2", "5", "+". "2". "/", "3"] is now the new expressionArr.

The next step was take loop through the array and ensure that multiple digit numbers are accounted for. Here, I used some logic to essentially say that anytime an array element is followed by a number, combine them, and add the new multiple digit number to the array, replacing the original two.

From here, the array would become ["25", "+", "2", "/", "3"], and I would then loop through the array once more and parse all the strings that included numbers to numbers and push them to an array called calculationArr.

So, calculationArr = [25, "+", 2, "/", 3].

Now here was the difficult part: Order of Operations.

Order of operations states the following:
1) Do multiplication/division from left to right, then
2) Do addition/subtraction from left to right.

In order to achieve this, I looped through the calculationArr yet again and anytime a multiplication or division symbol was found, I would perform the respective operation on the number before and after the sign and replace it in the array. The same was then performed for addition/subtraction but strictly done after mutiplication/division were complete. 

Once all the operations were complete, the calculationArr should have only one number, and that would be the result.

Well, that was a lot. 
Please feel free to take a look at my code and reach out with any questions! 

## Credits
Apple iOS Calculator Design
SchemeColor article - https://www.schemecolor.com/apple-calculator-app-icon-2017-colors.php
