// const urlGrupos = 'http://api.football-data.org/v2/competitions/2018/standings'
// const urlPartidos = 'http://api.football-data.org/v2/competitions/2018/matches'

// fetch(urlPartidos, {
//     method: 'GET',
//     headers:{
//         "X-Auth-Token": "4e11d1dfed8845f79d5c260aff10e68a"
//     }
// })
// .then(respuesta => respuesta.json())
// .then(resultado => console.log(resultado))

const partidos = urlPartidos.matches;

console.log(partidos)

function obtenerPartidos() {


    let tbody = document.getElementById('tabla')

    for (let i = 0; i < 36; i++) {

        let idEquipoLocal = partidos[i].homeTeam.id;
        let idEquipoVisitante = partidos[i].awayTeam.id;

        let urlEquipoLocal = "https://crests.football-data.org/" + idEquipoLocal + ".svg";
        let urlEquipoVisitante = "https://crests.football-data.org/" + idEquipoVisitante + ".svg";

        let fecha = new Date(partidos[i].utcDate)
        let hora = fecha.toLocaleString().slice((0, 10));
        let dia = fecha.toLocaleString().substring(0, 10)
        fecha = dia;
        let fechas = fecha.toString()

        let jornada1 = '11/6/2021';
        let jornada2 = '12/6/2021';
        console.log(fechas)


        let tr = document.createElement('tr');


        let tdGrupo = document.createElement('td');
        tdGrupo.innerHTML = partidos[i].group;

        let tdLocal = document.createElement('td');

        tdLocal.innerHTML = `<img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> ${partidos[i].homeTeam.name}`;


        let tdResultado = document.createElement('td')
        if (partidos[i].score.fullTime.homeTeam === null) {
            // tdResultado.innerHTML = fecha.toLocaleString()
            tdResultado.innerHTML = hora;
        } else {
            tdResultado.innerHTML = `${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        tr.append(tdGrupo);
        tr.append(tdLocal);
        tr.append(tdResultado);
        tr.append(tdVisitante);

        tbody.append(tr)


    }

}
obtenerPartidos()

function jornada1() {
    let jornadas = document.getElementById('jornada1')
    for (let i = 0; i < 36; i++) {
        let idEquipoLocal = partidos[i].homeTeam.id;
        let idEquipoVisitante = partidos[i].awayTeam.id;

        let urlEquipoLocal = "https://crests.football-data.org/" + idEquipoLocal + ".svg";
        let urlEquipoVisitante = "https://crests.football-data.org/" + idEquipoVisitante + ".svg";

        let fecha = new Date(partidos[i].utcDate)
        let hora = fecha.toLocaleString().slice((0, 10));
        let dia = fecha.toLocaleString().substring(0, 10)
        fecha = dia;
        let fechas = fecha.toString()

        let jornada = partidos[i].matchday;
        console.log(jornada)

        let tr = document.createElement('tr');

        let tdCalendario = document.createElement('td');
        if (jornada === 1) {
            tdCalendario.innerHTML = fechas;

        }


        let tdLocal = document.createElement('td');
        if (jornada === 1) {
            tdLocal.innerHTML = `<img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> ${partidos[i].homeTeam.name}`;
        }
        let tdResultado = document.createElement('td')
        if (jornada === 1 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = hora;

        } if (jornada === 2 || jornada === 3) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 1 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        if (jornada === 1) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }


        tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}

jornada1()

function jornada2() {

    let jornadas = document.getElementById('jornada2')
    for (let i = 0; i < 36; i++) {
        let idEquipoLocal = partidos[i].homeTeam.id;
        let idEquipoVisitante = partidos[i].awayTeam.id;

        let urlEquipoLocal = "https://crests.football-data.org/" + idEquipoLocal + ".svg";
        let urlEquipoVisitante = "https://crests.football-data.org/" + idEquipoVisitante + ".svg";

        let fecha = new Date(partidos[i].utcDate)
        let hora = fecha.toLocaleString().slice((0, 10));
        let dia = fecha.toLocaleString().substring(0, 10)
        fecha = dia;
        let fechas = fecha.toString()

        let jornada = partidos[i].matchday;

        let tr = document.createElement('tr');

        let tdCalendario = document.createElement('td');
        if (jornada === 2) {
            tdCalendario.innerHTML = fechas;

        }

        let tdLocal = document.createElement('td');
        if (jornada === 2) {
            tdLocal.innerHTML = `<img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> ${partidos[i].homeTeam.name}`;
        }
        let tdResultado = document.createElement('td')
        if (jornada === 2 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = hora;
        }
        if (jornada === 1 || jornada === 3) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 2 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        if (jornada === 2) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }


        tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}

jornada2()

function jornada3() {

    let jornadas = document.getElementById('jornada3')
    for (let i = 0; i < 36; i++) {
        let idEquipoLocal = partidos[i].homeTeam.id;
        let idEquipoVisitante = partidos[i].awayTeam.id;

        let urlEquipoLocal = "https://crests.football-data.org/" + idEquipoLocal + ".svg";
        let urlEquipoVisitante = "https://crests.football-data.org/" + idEquipoVisitante + ".svg";

        let fecha = new Date(partidos[i].utcDate)
        let hora = fecha.toLocaleString().slice((0, 10));
        let dia = fecha.toLocaleString().substring(0, 10)
        fecha = dia;
        let fechas = fecha.toString()

        let jornada = partidos[i].matchday;

        let tr = document.createElement('tr');

        let tdCalendario = document.createElement('td');
        if (jornada === 3) {
            tdCalendario.innerHTML = fechas;

        }

        let tdLocal = document.createElement('td');
        if (jornada === 3) {
            tdLocal.innerHTML = `<img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> ${partidos[i].homeTeam.name}`;
        }
        let tdResultado = document.createElement('td')
        if (jornada === 3 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = hora;
        }
        if (jornada === 1 || jornada === 2) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 3 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        if (jornada === 3) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }


        tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}

jornada3()

