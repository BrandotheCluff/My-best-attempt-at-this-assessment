const firstName = 'Jenny!';

// console.log(`Welcome ${firstName}`);

let x = 'Full-Metal Alchemist'
let empty = ''

reader.question('is' + x + '10 code units long?', function(x) {
    if (x.length >= 10) {
        console.log(`Way to go, ${firstName}! Your password is long enough!`)
    }else if(x.length < 10){
        console.log(`Sorry, ${firstName}, password is not long enough!`)
    } 

});

