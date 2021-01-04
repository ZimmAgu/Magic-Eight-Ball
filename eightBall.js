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







/*  
    Math.random * 8 generates a random number between 0 & 8

    Math.floor ensures the we can only have whole numbers
    by rounding down    
*/
Math.floor(Math.random() * 8);







eightBall = ` `