let message = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`));  
  }
  return message;
}
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(number) {  
  while (number >= 0) {
  console.log(number);
  number--;
}
}