///////////////////////////////
// Magic Eight Ball Project //
//     From Codecademy      //
//////////////////////////////






// So the program knows my name
let userName = `Zim`;

/*  If the username has a name in it 
    the program will greet the user with their name
    If not 
    then the the user will just be greeted by the word Hello */
userName ? console.log(`Hello ${userName}!`) 
         : console.log(`Hello!`)














// This is the question that is being asked
let userQuestion = 'Will Drake drop his album this month?';

/*  Prints what question was asked to the screen
    as well as who asked the question */
console.log(`${userName} asked the question ${userQuestion}`);







/*  This space separates the users question 
    and the eight ball's answer */
console.log(``);














/*  
    Math.random * 8 generates a random number between 0 & 8

    Math.floor ensures the we can only have whole numbers
    by rounding down    
*/
randomNumber = Math.floor(Math.random() * 8);










let eightBall = ` `









/*  
    This switch statement choose what Magic Eight ball term 
    will be printed to the screen

    The case number is decided by the randomNumber variable
*/
switch (randomNumber) {

    case 0:
        eightBall =`It is certain`;
        break;

    case 1:
        eightBall = `It is decidedly so`;
        break;

    case 2:
        eightBall = `Reply hazy try again`;
        break;

    case 3:
        eightBall = `cannot predict now`;
        break;

    case 4:
        eightBall = `Do not count on it`;
        break;

    case 5:
        eightBall = `My sources say no`;
        break;

    case 6:
        eightBall = `Outlook not so good`;
        break;

    case 7:
        eightBall = `Signs point to yes`;
        break;

} // End of switch statement
 

//  Prints the response of the magic eight ball
console.log(`The magic eight ball says:`);
console.log(`${eightBall}`);
