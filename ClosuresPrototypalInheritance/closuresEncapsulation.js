// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'bigBoom';
    };
    setInterval(passTime, 1000);
    return { 
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();

console.log(ohno.totalPeaceTime());

console.log(ohno.totalPeaceTime());