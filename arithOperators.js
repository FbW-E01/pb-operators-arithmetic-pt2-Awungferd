//**Basic Arithmetic Problems**

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
const sold = 6450;
const unitPrice = 15;
const result = sold / unitPrice;
console.log("The total number of tickets sold were:", result);

//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500;
const weeksInYear = 52;
const annualIncome = weeklyIncome * weeksInYear;
console.log("Sylvia makes an annual income of", annualIncome, "dollars.");

//**Percentage**

//Q3. Calculate the percentage of 17/30. Expected output: number%
const X = 17;
const Y = 30;
const decimalConvert = X / Y;
const percentage = decimalConvert * 100;
console.log("17/30 is", percentage, "%");
//**Geometry Formulas**

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sides = 4;
const sideLength = 4.75;
const perimeter = sides * sideLength;
console.log("The perimeter of the square is", perimeter, "cm");
//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const sideX = 5;
const sideY = 6;
const sideZ = 7;
const trianglePerimeter = sideX + sideY + sideZ;
console.log("The perimeter of the triangle is", trianglePerimeter, "cm");

//Q6. Calculate the area of a square. Each side is 5cm.
const length = 5;
const width = 5;
const areaOfSquare = length * width;
console.log("The area of the square is", areaOfSquare, "sq. cm.");

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

/**
 *  sides a, b, c = 5cm, 6cm, 7cm respectively
 */
const sideA = 5;
const sideB = 6;
const sideC = 7;
const semiPerimeter = (5 + 6 + 7) / 2;
const triangleArea =
  Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * semiPerimeter - sideB) *
  (semiPerimeter - sideC);
console.log("The area of the triangle is " + triangleArea + "sq.cm");

//Q8. Calculate the volume of a cube. Length of each side is 9cm.
//volume of a cub is measured L*W*H
const volume = 9 * 3;
console.log("The volume of the cube is", volume, "cubic cm");
//**Consumer Formula**

//Q9. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
/*Percentage is calculated: X/Y*100 where X is the percentage fraction and Y is the number */

const food = 22.35;
const tip = 10;
const netBill = (tip / food) * 100;
console.log("Total bill = €", netBill);

//bill2
const food2 = 26.67;
const tip2 = 15;
const netBill2 = (tip2 / food2) * 100;
console.log("Total bill2 = €", netBill2);

//bill3

const food3 = 35.37;
const tip3 = 20;
const netBill3 = (tip3 / food3) * 100;
console.log("Total bill3 = €", netBill3);
//**Average**

//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hours worked per day?

//NB: Average is sum of values divided y number of values
const sumOfValues = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
const numberofValues = 10;
const averageHours = sumOfValues / numberofValues;
console.log("Noemy works an average of", averageHours, "per day");

//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?

//Expected output: Score in the sixth test: --.

const totalAverage = 85;
const firstFive = 75 + 70 + 85 + 90 + 100;
const totalTests = 6;
const sixthTest = totalAverage * totalTests - firstFive;
console.log("His score in the sixth test was", sixthTest);

//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average
const requiredAverage = 80;
const testsToTake = 9;
const acquiredAverage = 78;
const takenTests = 8;
const minimumAverageLeft = (takenTests * requiredAverage) / acquiredAverage;
console.log(
  "James needs a minimum of " + minimumAverageLeft + "% to get an 80% average"
);
