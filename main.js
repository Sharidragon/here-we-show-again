// contribution are Javier S., Melissa Lloyd, Garrett Cox and Giovanni Zaccaro
const mainElement = document.querySelector('main')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

// Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
const kata1heading = document.createElement('h1')
const kata1Answer = document.createElement('div')
mainElement.append(kata1heading)
mainElement.append(kata1Answer)
kata1heading.append('Kata 1')
    let counter1 =1
        const limit =20
    while (counter1 <= limit) {
        kata1Answer.append(counter1 + ', ')
  counter1 +=1
}   

// Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2heading = document.createElement('h1')
const kata2Answer = document.createElement('div')
mainElement.append(kata2heading)
mainElement.append(kata2Answer)
kata2heading.append('Kata 2')
    let counter2 = 2
    while (counter2 <= 20) {
        kata2Answer.append(counter2 + ', ')
  counter2 += 2
}


// Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
const kata3heading = document.createElement('h1')
const kata3Answer = document.createElement('div')
mainElement.append(kata3heading)
mainElement.append(kata3Answer)
kata3heading.append('Kata 3')
  let counter3 = 1
  while (counter3 <= 20) {
    kata3Answer.append(counter3 + ', ')
    counter3 += 2
  }


// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4heading = document.createElement('h1')
const kata4Answer = document.createElement('div')
mainElement.append(kata4heading)
mainElement.append(kata4Answer)
kata4heading.append('Kata 4')
  let counter4 = 5
  while (counter4 <= 100) {
    kata4Answer.append(counter4 + ', ')    
    counter4 += 5
  }

// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
const kata5heading = document.createElement('h1')
const kata5Answer = document.createElement('div')
mainElement.append(kata5heading)
mainElement.append(kata5Answer)
kata5heading.append('Kata 5')
  let counter5 = 1
  while (counter5 <= 100) {
  const isSquare = Number.isInteger(Math.sqrt(counter5));
  if (isSquare) {
    kata5Answer.append(counter5 + ', ')  
  }
  counter5 += 1
}

// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
const kata6heading = document.createElement('h1')
const kata6Answer = document.createElement('div')
mainElement.append(kata6heading)
mainElement.append(kata6Answer)
kata6heading.append('Kata 6')
for (let counter6 = 20; counter6 >= 1; counter6 -=1){
    kata6Answer.append(counter6 + ', ')  
  }

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
const kata7heading = document.createElement('h1')
const kata7Answer = document.createElement('div')
mainElement.append(kata7heading)
mainElement.append(kata7Answer)
kata7heading.append('Kata 7')
    for (let counter7 = 20; counter7 >= 2; counter7 -= 2){
    kata7Answer.append(counter7 + ', ') 
}  

// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
const kata8heading = document.createElement('h1')
const kata8Answer = document.createElement('div')
mainElement.append(kata8heading)
mainElement.append(kata8Answer)
kata8heading.append('Kata 8')

    let counter8 = 19
    while (counter8 >= 2) {
    kata8Answer.append(counter8 + ', ') 
  counter8 -= 2
}

// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
const kata9heading = document.createElement('h1')
const kata9Answer = document.createElement('div')
mainElement.append(kata9heading)
mainElement.append(kata9Answer)
kata9heading.append('Kata 9')
    let counter9 = 100
    while (counter9 >= 0) {
    kata9Answer.append(counter9 + ', ')   
  counter9 -= 5
}

// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
const kata10heading = document.createElement('h1')
const kata10Answer = document.createElement('div')
mainElement.append(kata10heading)
mainElement.append(kata10Answer)
kata10heading.append('Kata 10')
    let counter10 = 100
    while (counter10 >= 0) {
const isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
        kata10Answer.append(counter10 + ', ')    
}
counter10 -= 1
}

// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const kata11heading = document.createElement('h1')
const kata11Answer = document.createElement('div')
mainElement.append(kata11heading)
mainElement.append(kata11Answer)
kata11heading.append('Kata 11')
    for (i = 0; i < sampleArray.length; i += 1){
        kata11Answer.append(sampleArray[i] + ', ')
    }

// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
const kata12heading = document.createElement('h1')
const kata12Answer = document.createElement('div')
mainElement.append(kata12heading)
mainElement.append(kata12Answer)
kata12heading.append('Kata 12')
for (let index = 0; index < sampleArray.length; index ++ ){
    if ((sampleArray[index] % 2) != 1){
        kata12Answer.append(sampleArray[index] + ', ')
    }
} 

// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13heading = document.createElement('h1')
const kata13Answer = document.createElement('div')
mainElement.append(kata13heading)
mainElement.append(kata13Answer)
kata13heading.append('Kata 13')
for (let index = 0; index < sampleArray.length; index ++ ){
    if ((sampleArray[index] % 2) != 0){
        kata13Answer.append(sampleArray[index] + ', ')
    }

} 

// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14heading = document.createElement('h1')
const kata14Answer = document.createElement('div')
mainElement.append(kata14heading)
mainElement.append(kata14Answer)
kata14heading.append('Kata 14')
// Math.sqrt(x)
    // function squareIt(number)
    // return number * number
    // kata14Answer.append(sampleArray + ', ')  



// Display the sum of all the numbers from 1 to 20.
const kata15heading = document.createElement('h1')
const kata15Answer = document.createElement('div')
mainElement.append(kata15heading)
mainElement.append(kata15Answer)
kata15heading.append('Kata 15')
// function sum(input){
//     for (var i = 0; i <= 20; i += 1)




// Display the sum of all the elements in sampleArray.
const kata16heading = document.createElement('h1')
const kata16Answer = document.createElement('div')
mainElement.append(kata16heading)
mainElement.append(kata16Answer)
kata16heading.append('Kata 16')

// Display the smallest element in sampleArray.
const kata17heading = document.createElement('h1')
const kata17Answer = document.createElement('div')
mainElement.append(kata17heading)
mainElement.append(kata17Answer)
kata17heading.append('Kata 17')

// Display the largest element in sampleArray.
const kata18heading = document.createElement('h1')
const kata18Answer = document.createElement('div')
mainElement.append(kata18heading)
mainElement.append(kata18Answer)
kata18heading.append('Kata 18')

// Display 20 solid gray rectangles, each 20px high and 100px wide.
const kata19heading = document.createElement('h1')
const kata19Answer = document.createElement('div')
mainElement.append(kata19heading)
mainElement.append(kata19Answer)
kata19heading.append('Kata 19')

// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
const kata20heading = document.createElement('h1')
const kata20Answer = document.createElement('div')
mainElement.append(kata20heading)
mainElement.append(kata20Answer)
kata20heading.append('Kata 20')

// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
const kata21heading = document.createElement('h1')
const kata21Answer = document.createElement('div')
mainElement.append(kata21heading)
mainElement.append(kata21Answer)
kata21heading.append('Kata 21')

// As in #21, but alternate colors so that every other rectangle is red.
const kata22heading = document.createElement('h1')
const kata22Answer = document.createElement('div')
mainElement.append(kata22heading)
mainElement.append(kata22Answer)
kata22heading.append('Kata 22')

// As in #21, but color the rectangles with even widths red.
const kata23heading = document.createElement('h1')
const kata23Answer = document.createElement('div')
mainElement.append(kata23heading)
mainElement.append(kata23Answer)
kata23heading.append('Kata 23')
