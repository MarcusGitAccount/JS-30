
  function printArray(array){
    let result = [];

    array.forEach(val => result.push(JSON.stringify(val, 2, null)));
    return result.join(' ');
  }

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  console.log('1.\n', printArray(inventors.filter(inventor => parseInt(inventor.year / 100) === 15)));
  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  console.log('2.\n', printArray(inventors.map(inventor => {
  return {'first': inventor.first, 'last': inventor.last};
  })));
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  console.log('3.\n', printArray(inventors.sort((a, b) => {
    return a.year > b.year ? 1 : -1;
  })));
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  console.log('4. ', inventors.reduce((a, b) => a + b.passed - b.year, 0));
  // 5. Sort the inventors by years lived
  console.log('5.\n', printArray(inventors.sort((a, b) => {
    return a.passed - a.year > b.passed - b.year ? 1 : -1;
  })));
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  let boulevards = [], result = [];
  boulevards.forEach(val => {
    if (val.match(/(de)/).length !== 0)
      result.push(val);
  });
  // 7. sort Exercise
  // Sort the people alphabetically by last name
  console.log('7.\n', printArray(people.sort((a, b) => {
    return a.split(', ')[1] > b.split(', ')[1] ? 1 : -1;
  })));
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

  console.log('8.\n', JSON.stringify(data.reduce((object, value) => {
    if (!object[value])
      object[value] = 0;
    object[value]++;
    return object;
  }, {}), null, 2));