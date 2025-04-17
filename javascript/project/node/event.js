// const EventEmitter = require('node:events');

// const celebrity = new EventEmitter();

// //Subscribe 
// celebrity.on('race win', function () {
//    console.log('Congratulations! Your are the best!'); 
// });

// celebrity.on('race win', function () {
//     console.log('Boo I could have better than that.'); 
// });

// celebrity.emit('race win');

// process.on('exit', () => {
//    console.log(`Hi, I am free.`); 
// });

// celebrity.on('walk', (how) => {
//     console.log(`He is walking ${how}.`);
// })

// celebrity.emit('walk', 'fast');
// celebrity.emit('walk', 'slow');

const EventEmitter = require('node:events');

class Bangladesh extends EventEmitter {
    flag() {
        console.log(`BD flag contains Red and Green color.`);
    }
}

const bangladesh = new Bangladesh();

// Listener or Observer
bangladesh.on('localDate', (today) => {
    if (today == '01/01') {
        console.log('First day of English calendar.');
    } else if (today == '21/02') {
        console.log('International Mother Language Day.');
    } else if (today == '26/03') {
        console.log('Independence Day.');
    } else if (today == '14/04') {
        console.log('First day of Bangla calendar.');
    } else if (today == '16/12') {
        console.log('Bijoy Dibos.');
    } else {
        console.log('Your are a mad. Give valid date.');
    }
});

process.on('exit', () => {
    console.log('Bangladesh Bangladesh.');
})

// Event
bangladesh.emit('localDate', '01/01');
bangladesh.emit('localDate', '01/02');
bangladesh.emit('localDate', '16/12');

//function
bangladesh.flag();

