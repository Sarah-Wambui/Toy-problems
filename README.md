# Week -1 Toy-problems
This repository contains solutions to three toy problems.

## Author
Sarah Wambui

# Challenge 1: Student Grade Generator

## Intoduction

In this challenge one is required to come up with a function that will prompt the user to input student marks and the input to be between 0 and 100. 


## Challenge Context. 
The challenge is to come up with a function that will prompt the user to input student marks. 
The first this is to declare a function and give it a name:

    function gradeGenerator(){
        //code block to be executed
    }

Our function in this case will not be taking any parameters. In the next part we are going to write the code block that will be executed when we call our function. In this code block, we will declare a variable and assign it a value and this value will prompt the user to input student mark which inturn make the grade to be logged. We will use the window prompt() method.

After the declaration we use the if and else if statements to write our range of marks that when the condition inside the if or else if statements is true it will be executed. The grades and rangrs of marks to be input are:

    A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

Ensure that you write the correct range so that when you input your marks in the prompt it will give the right grade.





# Challenge 2: Speed Detector

## Introduction
In this toy problem one is required to write a program that takes the speed of a car. The program should print some statement when certain conditions are met.

## Challenge Context
This challenge requires one to take the speed of car as input. If the speed of the car less that 70, the program should print "Ok". However for every 5 km/s above 70, the program should give one demerit point and print the total number of demerit points. If the points exceed 12 points, the program should print "Licence suspended".

The first thing to do is to declare a function and give it a name. This function too will not take any parameters. In this case our function is :
       
       function calculateSpeed(){
        //code block to be executed
       }

Within the code block, we are going to use the if and else if statements. The first if statement is going to have the condition of speed being less that 70 and if its true the program will print "Ok". The next will be an else statement. In this statement the code block will be counting demerit points for each distance travelled above 70. After getting the points, you use a nested if statement with a condition that when the points are greater that 12 the program prints "Licence Suspended". There is also an else if statement with a code block that the program will print the demerit points if they are less than 12.




# Challenge 3: Net Salary Calculator

## Introduction
In this challenge you are required to create a program which will calculate an individual's Net Salary by getting the inputs of basic salary and benefits. 

## Challenge Context
This challenge requires one to write a program whose major task is to calculate an individual's Net Salary by getting the inputs of basic salary and benefits. You are suppossed to caculate the payee(i.e. Tax), NHIF Deductions, NSSF Deductions , gross salary and, net salary.
The resources one is suppossed to use are:
- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

First create a function that takes in basic salary and benefits as arguments. Then declare a variable of gross income. In Kenya gross income is calculated by adding basic salary and allowances and benefits. For ous instance, our gross income is a sum of basic salary and benefits. 
Next, calculate PAYE. Use the Tax Band Up table to find the ranges of how different incomes are taxed differently. The higher the gross income is the higher the rate of tax or higher paye you will pay.
NHIF is also paid differently. Those with higher incomes will pay more while those who earn less pay less. There is a table that gives the ranges of income and the amount paid.
For NSSF there is a percentage that is deducted from the pensionable income that someone earns.
PAYE, NSSF and NHIF when added together they form the deductions. Subtracting all the deductions from gross income will result to net salary of an individual.



