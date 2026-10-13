function moltiplicazioneEgizia(a, b) {
    let sinistra = a;
    let destra = b;
    let somma = 0;

    console.log(`Calcolo: ${a} x ${b}`);
    console.log("sinistra\tdestra");

    while (destra > 0) {
        const isDispari = destra % 2 !== 0;

        if (isDispari) {
            somma += sinistra;
        }

        console.log(`${sinistra}\t\t${destra}${isDispari ? '  dispari -> conta' : ''}`);

        sinistra = sinistra + sinistra;
        destra = Math.floor(destra / 2)
    }

    console.log(`Risultato: ${somma}\n`);
    return somma
};

console.log('TEST 1:');
moltiplicazioneEgizia(13, 21);

console.log('TEST 2:');
moltiplicazioneEgizia(7, 1);

console.log('TEST 3:');
moltiplicazioneEgizia(5, 0);

console.log('TEST 4:');
moltiplicazioneEgizia(0, 9);