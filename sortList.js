// const inputList = [
//     { firstName: 'George', lastName: 'Ionescu', birthDate: '1992-02-20' },
//     { firstName: 'Maria', lastName: 'Popescu', birthDate: '1995-03-13' },
//     { firstName: 'Mihai', lastName: 'Enescu', birthDate: '1980-01-02' },
//     { firstName: 'Elena', lastName: 'Popescu', birthDate: '1990-12-13' },
//     { firstName: 'Andrei', lastName: 'Ionescu', birthDate: '1996-03-01' },
//     { firstName: 'Sergiu', lastName: 'Ionescu', birthDate: '1990-02-01' }
//];

const sortList = (list) => {
  if (list.length === 0) {
    return;
  }

  // declare variables will be used
  const countNames = {};
  const sortedList = {};

  // count each time same name exist in the list (for lastName property)
  for (const name of list) {
    countNames[name.lastName] = countNames[name.lastName]
      ? countNames[name.lastName] + 1
      : 1;
  }

  // create a new array and sort it by birthDate property, than sort again by lastName property
  list
    .sort((a, b) => {
      ageA = new Date(a.birthDate);
      ageB = new Date(b.birthDate);
      return ageA - ageB;
    })
    .sort((a, b) => countNames[b.lastName] - countNames[a.lastName]);

  // assign to the sortedList object the key (lastNames) and the values (array with firstName value that correspond to same lastName)
  for (let i = 0; i < list.length; i++) {
    const lastName = list[i].lastName;
    sortedList[lastName] = list
      .filter((item) => item.lastName === lastName)
      .map((item) => item.firstName);
  }

  return sortedList;
};
