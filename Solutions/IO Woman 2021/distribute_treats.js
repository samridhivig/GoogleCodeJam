// Algorithm:
// Step 1: Sort the array of pet sizes
// 
// Calculate number of different sizes : NumberOfGroups
// { 
//    group1: n1,
//    group2: n2,
//    group3: n3, ..
// }
// Total number of treats = n1 + n2 * 2 + n3 * 3 + ... 

function getNumberOfTreats(numberOfPets, petSizes) {
    if (petSizes.length !== numberOfPets) {
        console.error('Incorrect input');
    }

    // sort
    const sortedPetSizes = petSizes.sort();

    // grouping
    const petSizesGrouped = groupPetSizes(sortedPetSizes);

    // counting
    return countNumberOfTreats(petSizesGrouped);
    
}

// Groups pet sizes by size
// Input: [10, 10, 20, 25]
// Output: { 10: 2, 20: 1, 25: 1 }
function groupPetSizes(sortedPetSizes) {
    const groupDict = {};
    
    sortedPetSizes.forEach(petSize => {
       const key = String(petSize);

       if (!Object.keys(groupDict).includes(key)) {
          groupDict[key] = 1;
       } else {
          console.log('sss');
          groupDict[key] += 1;
       }
    });
    
    return groupDict;
}

// Count the number of treats
// Input: { 10: 2, 20: 1, 25, 1 }
// Output: 2 * 1 + 1 * 2 + 1 * 3 = 7
function countNumberOfTreats(groupDict) {
    let countTemp = 1;
    let result = 0;
    
    Object.keys(groupDict).forEach(groupKey => {
        result += groupDict[groupKey] * countTemp;
        countTemp += 1;
    });
    
    return result;
}

console.log(getNumberOfTreats(4, [10, 20, 10, 25]));
// Try other templates: Project -> New
function getNumberOfTreats(numberOfPets, petSizes) {
    if (petSizes.length !== numberOfPets) {
        console.error('Incorrect input');
    }

    // sort
    const sortedPetSizes = petSizes.sort();

    // grouping
    const petSizesGrouped = groupPetSizes(sortedPetSizes);

    // counting
    return countNumberOfTreats(petSizesGrouped);
    
}

// Groups pet sizes by size
// Input: [10, 10, 20, 25]
// Output: { 10: 2, 20: 1, 25: 1 }
function groupPetSizes(sortedPetSizes) {
    const groupDict = {};
    
    sortedPetSizes.forEach(petSize => {
       const key = String(petSize);

       if (!Object.keys(groupDict).includes(key)) {
          groupDict[key] = 1;
       } else {
          console.log('sss');
          groupDict[key] += 1;
       }
    });
    
    return groupDict;
}

// Count the number of treats
// Input: { 10: 2, 20: 1, 25, 1 }
// Output: 2 * 1 + 1 * 2 + 1 * 3 = 7
function countNumberOfTreats(groupDict) {
    let countTemp = 1;
    let result = 0;
    
    Object.keys(groupDict).forEach(groupKey => {
        result += groupDict[groupKey] * countTemp;
        countTemp += 1;
    });
    
    return result;
}

// Example
console.log(getNumberOfTreats(4, [10, 20, 10, 25]));
