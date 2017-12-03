function random (randomNumber, number) {
  console.log(randomNumber, number)
  if(randomNumber === number) {
    console.log('Good work');
  } else {
    console.log('Bad work');
  }
}

random(Math.floor(Math.random() * 11), 10)
