// call() apply() bind()


function a() {
    console.log('h1');
}

a.call();
a();
a.apply();

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin hood',
    health: 30
}

console.log(wizard.heal());

console.log(wizard.heal.call(archer, 15, 10));

console.log(wizard.heal.apply(archer, [15, 10]));

// bind return a new functions with certain context and parameters

const healArcher = wizard.heal.bind(archer, 15, 10);


console.log(healArcher.heal());

