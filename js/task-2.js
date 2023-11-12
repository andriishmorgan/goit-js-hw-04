function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }
    let totalCalories = 0;
    let totalDays = days.length;
    for (const day of days) {
        totalCalories += day.calories;
    }
    const avarageCalories = totalCalories / totalDays;

    return avarageCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);