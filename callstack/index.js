const coo = () => {
    console.log("COO")
}

const boo = () => {
    console.log("BOO");
    coo();
}

const foo = () => {
    console.log("FOO");
    boo();
}

console.log("RUN MAIN SCRIPT");
coo();
foo();