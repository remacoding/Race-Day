let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;
let runnerAge = 22;
if (earlyRegistration && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegistration && runnerAge > 18) {
  console.log(`The race starts at 9:30 am. Your race number is: ${raceNumber}`);
} else if ((earlyRegistration = false && runnerAge > 18)) {
  console.log(
    `The race starts at 11:00 am. Your race number is: ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `The race starts at 12:30 pm. Your race number is: ${raceNumber}`
  );
} else {
  console.log("Please visit the registratin desk for more information");
}
