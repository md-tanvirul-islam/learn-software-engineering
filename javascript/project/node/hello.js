const mission = process.argv[2];

if (mission == 'learn') {
    console.log('Time to write some Node Code!');
} else {
    console.log(`Is ${mission} really more fun?`);
}

console.log(process.argv);

console.log(
    `
    Browser Vs Node
    1. window to global \n
    2. document to process \n
    3. history to module \n
    4. location to __filename, __dirname \n
    5. navigator to require() \n
    `
);