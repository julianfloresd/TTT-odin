const findTheOldest = function(array) {
  const date = new Date()
  let currentYear = date.getFullYear
  
  array.forEach(element => {
      if (element.hasOwnProperty("yearOfDeath") == true) {
        element.ageCalc = element.yearOfDeath - element.yearOfBirth
      } else {
        element.ageCalc = currentYear - element.yearOfBirth
      }
    
  });

  let highestAge = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].ageCalc > highestAge) {
      highestAge = array[i].ageCalc
    } else {
      continue;
    }
  }

  for (let n = 0; n < array.length - 1; n++) {
    if (array[n].ageCalc == highestAge) {
      return array[n]
    } else {
      continue;
    }
  }
};
