// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const footballTeams = [
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

footballTeams.forEach(thisTeam => {
    // let {nome, puntiFatti, falliSubiti} = thisTeam;
    thisTeam.puntiFatti = getRndInteger(1, 100);
    thisTeam.falliSubiti = getRndInteger(1, 100);
});
console.log(footballTeams);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}