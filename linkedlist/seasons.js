const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();

const daysOfTheWeek = new LinkedList();

daysOfTheWeek.addToHead([
  'Monday ',
  'Tuesday ',
  'Wednesday ',
  'Thursday ',
  ''
]);
daysOfTheWeek.printList()

daysOfTheWeek.addToTail([
  'Friday ',
  'Saturday ',
  'Sunday '
]);
daysOfTheWeek.printList()

daysOfTheWeek.removeHead();
daysOfTheWeek.printList();

module.exports = new LinkedList()