// // ********** VARIABLES

let color = 'pink';
let shade = 'hot';
color = shade + color;
// console.log(color);
// // QUIZ ONE
//   // A 'pink'
//   // B 'hotpink'
//   // C 'pinkhot'
//   // D undefined



let articleOfClothing = 'trousers';
color = color + articleOfClothing;
// console.log(color);
// // QUIZ TWO
//   // A 'hotpinkarticleOfClothing'
//   // B 'trousershotpink'
//   // C  pinktrousers
//   // D 'hotpinktrousers'




















// // ********** CONDITIONALS

const sockDrawerCapacity = 32;
let sockCount = 24;
let sockStatus;

if (sockCount > sockDrawerCapacity) {
  sockStatus = 'too many socks!';
} else if (sockCount < sockDrawerCapacity) {
  sockStatus = 'plenty of room for socks!';
} else {
  sockStatus = '🧦 🧦 🧦 🧦 🧦';
}
// console.log(sockStatus);
// // QUIZ THREE
//   // A 'too many socks!'
//   // B 'plenty of room for socks!'
//   // C '🧦 🧦 🧦 🧦 🧦'
//   // D undefined



sockCount += 8;

if (sockCount > sockDrawerCapacity) {
  sockStatus = 'too many socks!';
} else if (sockCount < sockDrawerCapacity) {
  sockStatus = 'plenty of room for socks!';
} else {
  sockStatus = '🧦 🧦 🧦 🧦 🧦';
}
// console.log(sockStatus);
// // QUIZ FOUR
//   // A 'too many socks!'
//   // B 'plenty of room for socks!'
//   // C '🧦 🧦 🧦 🧦 🧦'
//   // D undefined



let lizIsWearingSocks = true;
let fruit;

if (sockCount === 32 && lizIsWearingSocks === false) {
  fruit = 'apple';
} else if (sockCount < 32 || lizIsWearingSocks === false) {
  fruit = 'banana';
} else if (sockCount <=32 && lizIsWearingSocks) {
  fruit = 'plum';
} else {
  fruit = 'tomato?';
}
// console.log(fruit);
// // QUIZ FIVE
//   // A 'apple'
//   // B 'banana'
//   // C 'plum'
//   // D 'tomato?'




















// // ********** ARRAYS

let someCookies = ['choc chip', 'pb', 'monster', 'gingerbread', 'sugar'];

// console.log(someCookies[someCookies.length - 2]);
// // QUIZ SIX
//   // A 'sugar'
//   // B 'gingerbread'
//   // C 'monster'
//   // D 'pb'



// console.log(someCookies.pop());
// // QUIZ SEVEN
//   // A 'sugar'
//   // B 'gingerbread'
//   // C 'monster'
//   // D 'pb'



// console.log(someCookies[someCookies.length - 2]);
// // QUIZ EIGHT
//   // A 'sugar'
//   // B 'gingerbread'
//   // C 'monster'
//   // D 'pb'



let attemptToConfuse = [ ['a', 'b', 'c'], ['d', 'e', 'f'] ];
// console.log(attemptToConfuse[0][2]);
// // QUIZ NINE
//   // A 'a'
//   // B 'c'
//   // C 'd'
//   // D 'e'



// console.log(attemptToConfuse[1][0]);
// // QUIZ TEN
//   // A 'a'
//   // B 'c'
//   // C 'd'
//   // D 'e'




















// // ********** LOOPS

const colors = ['red', 'yellow', 'blue'];
let selected;

for (let i=0; i<colors.length; i++) {
  if (i === 2) {
    selected = colors[i];
  }
}
// console.log(selected);
// // QUIZ ELEVEN
//   // A 'red'
//   // B 'yellow'
//   // C 'blue'
//   // D undefined


let opposite;

for (let color of colors) {
  if (color === 'yellow') {
    opposite = 'purple';
  } else if (color === 'blue') {
    opposite = 'orange';
  }
}
// console.log(opposite);
// // QUIZ TWELVE
//   // A 'yellow'
//   // B 'purple'
//   // C 'blue'
//   // D 'orange'


// color is in local scope - let is used
for (let color of colors) {
  let nothing = undefined;
  // color = 'huh';
}

// console log globally-scoped color
// console.log(color);

// // QUIZ THIRTEEN
//   // A 'red'
//   // B 'hotpinktrousers'
//   // C 'blue'
//   // D undefined


// color is in global scope - let is not used
for (color of colors) {
  let nothing = undefined;
  // color = 'huh';
}

//console log globally-scoped color
// console.log(color);

// // QUIZ THIRTEEN POINT FIVE
//   // A 'red'
//   // B 'hotpinktrousers'
//   // C 'blue'
//   // D undefined



let whatIsThis = '';

for (let color of colors) {
    whatIsThis += color;
}
// console.log(whatIsThis);
// // QUIZ FOURTEEN
//   // A 'red'
//   // B 'redyellow'
//   // C 'redyellowblue'
//   // D undefined



let andWhatIsThis = '';
for (let color of colors) {
    andWhatIsThis += color[0];
}
// console.log(andWhatIsThis);
// // QUIZ FIFTEEN
//   // A 'ryb'
//   // B 'redyellowblue'
//   // C 'blueyellowred'
//   // D undefined












// Assign `myValue` to 3. Then, loop through the numbers array, logging the value
// of each array item. If any item matches `myValue`, then also log “Hooray!"

let numbers = [3, 5, 7, 10];

let myValue = 3;

for (let i = 0; i < numbers.length; i++) { // loop through numbers array
  // console.log('item value is', numbers[i]);
  if (numbers[i] === myValue) {
    // console.log('Hooray');
  }
}
