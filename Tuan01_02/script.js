// ---------- Coding Challenge #1 ----------
// 1. Store Mark's and John's mass and height in variables
console.log('Coding Challenge #1');
// Create Object Person
function Person(mass, height) {
   this.mass = mass;
   this.height = height;
}
// Test Data 1:
const Mark = new Person(78, 1.69);
const John = new Person(92, 1.95);
// Test Data 2:
// const Mark = new Person(95, 1.88);
// const John = new Person(85, 1.76);

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// Func calculate BMI
const calBMIs = (mass, height) => mass / (height * height);
const markBMI = calBMIs(Mark.mass, Mark.height);
const johnBMI = calBMIs(John.mass, John.height);
console.log(`Mark BMIs: ${markBMI} \nJohn BMIs: ${johnBMI}`);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = markBMI > johnBMI;
console.log('Mark has a higher BMI than John: ', markHigherBMI);

// ---------- Coding Challenge #2 ----------
console.log('\nCoding Challenge #2');
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
console.log(markBMI > johnBMI ? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!");

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);

// ---------- Coding Challenge #3 ----------
console.log('\nCoding Challenge #3');
const calcAverageScore = (scoreTeam) => {
   if (!Array.isArray(scoreTeam) || scoreTeam.length === 0) {
      return 0;
   }
   const totalScore = scoreTeam.reduce((acc, curr) => acc + curr, 0);
   return totalScore / scoreTeam.length;
};
let dolphinsScore = calcAverageScore([96, 108, 89]),
   koalasScore = calcAverageScore([88, 91, 110]);

// 1. Calculate the average score for each team, using the test data below
console.log(`Average score for Dolphins team: ${dolphinsScore.toFixed(2)}
Average score for Koalas team: ${koalasScore.toFixed(2)}`);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
if (dolphinsScore > koalasScore) console.log('Đội chiến thắng là Dolphins: ', dolphinsScore.toFixed(2));
else if (dolphinsScore === koalasScore) console.log('Hai đội hòa nhau: ', dolphinsScore.toFixed(2));
else console.log('Đội chiến thắng là Koalas: ', koalasScore.toFixed(2));

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
dolphinsScore = calcAverageScore([97, 112, 101]);
koalasScore = calcAverageScore([109, 95, 123]);

if (dolphinsScore > koalasScore && dolphinsScore >= 100)
   console.log('Đội chiến thắng là Dolphins: ', dolphinsScore.toFixed(2));
else if (koalasScore > dolphinsScore && koalasScore >= 100)
   console.log('Đội chiến thắng là Koalas: ', koalasScore.toFixed(2));
else console.log('Cần tối thiểu 100 điểm để chiến thắng ');

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
dolphinsScore = calcAverageScore([97, 112, 101]);
koalasScore = calcAverageScore([109, 95, 106]);

if (dolphinsScore > koalasScore && dolphinsScore >= 100)
   console.log('Đội chiến thắng là Dolphins: ', dolphinsScore.toFixed(2));
else if (dolphinsScore === koalasScore && dolphinsScore >= 100)
   console.log('Hai đội hòa nhau: ', dolphinsScore.toFixed(2));
else if (koalasScore > dolphinsScore && koalasScore >= 100)
   console.log('Đội chiến thắng là Koalas: ', koalasScore.toFixed(2));
else console.log('Cần tối thiểu 100 điểm để chiến thắng ');

// ---------- Coding Challenge #4 ----------
console.log('\nCoding Challenge #4');
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
const calcTip = (bill) => {
   const tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
   console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
};
calcTip(275);
calcTip(40);
calcTip(430);
