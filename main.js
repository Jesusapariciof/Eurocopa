// const urlGrupos = 'http://api.football-data.org/v2/competitions/2018/standings'
 const urlPartidos = 'https://api.football-data.org/v2/competitions/2018/matches'

fetch(urlPartidos, {
    method: 'GET',
    headers:{
        "X-Auth-Token": "4e11d1dfed8845f79d5c260aff10e68a"
    }
})
.then(respuesta => respuesta.json())
.then(resultado => {

    const partidos = resultado.matches;
    console.log(partidos)
    obtenerPartidos(partidos)
    jornada1(partidos)
    jornada2(partidos)
    jornada3(partidos)
    octavos(partidos)
})




function obtenerPartidos(partidos) {


    let tbody = document.getElementById('tabla')

    for (let i = 0; i < 44; i++) {

        let idEquipoLocal = partidos[i].homeTeam.id;
        let idEquipoVisitante = partidos[i].awayTeam.id;

        let urlEquipoLocal = "https://crests.football-data.org/" + idEquipoLocal + ".svg";
        let urlEquipoVisitante = "https://crests.football-data.org/" + idEquipoVisitante + ".svg";
        let status = partidos[i].status
        let fecha = new Date(partidos[i].utcDate)
        let hora = fecha.toLocaleString().slice((0, 10));
        let dia = fecha.toLocaleString().substring(0, 10)
        fecha = dia;
        let fechas = fecha.toString()

        console.log(fechas)


        let tr = document.createElement('tr');

        // let tdCalendario = document.createElement('td');
        // tdCalendario.innerHTML = fechas;
        // tdCalendario.classList.add('calendario')


        let tdGrupo = document.createElement('td');
        tdGrupo.innerHTML = partidos[i].group;
        tdGrupo.classList.add('grupo')

        let tdLocal = document.createElement('td');
        

        tdLocal.innerHTML = `${partidos[i].homeTeam.name} <img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> `;
        tdLocal.classList.add('local')


        let tdResultado = document.createElement('td')
        tdResultado.classList.add('resultado')
        if (partidos[i].score.fullTime.homeTeam === null) {
            // tdResultado.innerHTML = fecha.toLocaleString()
            tdResultado.innerHTML = fechas + hora;
        } else {
            
            tdResultado.innerHTML = `${status}: ${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;
        tdVisitante.classList.add('visitante')

        if(partidos[i].homeTeam.name === 'Spain' || partidos[i].awayTeam.name === 'Spain'){
            // tdCalendario.classList.add('spain')
            tdGrupo.classList.add('spain')
            tdLocal.classList.add('spain')
            tdResultado.classList.add('spain')
            tdVisitante.classList.add('spain')
        }

        // tr.append(tdCalendario)
        tr.append(tdGrupo);
        tr.append(tdLocal);
        tr.append(tdResultado);
        tr.append(tdVisitante);
        
        tbody.append(tr)

    }

}

function jornada1(partidos) {
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

        // let tdCalendario = document.createElement('td');
        // tdCalendario.classList.add('calendario')
        // if (jornada === 1) {
        //     tdCalendario.innerHTML = fechas;

        // }
        let tdLocal = document.createElement('td');
        tdLocal.classList.add('local-jornadas')
        if (jornada === 1) {
            tdLocal.innerHTML = `${partidos[i].homeTeam.name} <img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> `;
        }
        let tdResultado = document.createElement('td')
        tdResultado.classList.add('resultado')
        if (jornada === 1 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = fechas + hora;

        } if (jornada === 2 || jornada === 3) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 1 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].status}: ${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.classList.add('visitante')
        if (jornada === 1) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }
        if(partidos[i].homeTeam.name === 'Spain' || partidos[i].awayTeam.name === 'Spain'){
            // tdCalendario.classList.add('spain')
            tdLocal.classList.add('spain')
            tdResultado.classList.add('spain')
            tdVisitante.classList.add('spain')
        }


        // tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}



function jornada2(partidos) {

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

        // let tdCalendario = document.createElement('td');
        // tdCalendario.classList.add('calendario')
        // if (jornada === 2) {
        //     tdCalendario.innerHTML = fechas;

        // }

        let tdLocal = document.createElement('td');
        tdLocal.classList.add('local-jornadas')
        if (jornada === 2) {
            tdLocal.innerHTML = `${partidos[i].homeTeam.name} <img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> `;
        }
        let tdResultado = document.createElement('td');
        tdResultado.classList.add('resultado')
        if (jornada === 2 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = fechas + hora;
        }
        if (jornada === 1 || jornada === 3) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 2 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].status}: ${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.classList.add('visitante')
        if (jornada === 2) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }
        if(partidos[i].homeTeam.name === 'Spain' || partidos[i].awayTeam.name === 'Spain'){
            // tdCalendario.classList.add('spain')
            tdLocal.classList.add('spain')
            tdResultado.classList.add('spain')
            tdVisitante.classList.add('spain')
        }


        // tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}



function jornada3(partidos) {

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
        

        // let tdCalendario = document.createElement('td');
        // tdCalendario.classList.add('calendario')
        // if (jornada === 3) {
        //     tdCalendario.innerHTML = fechas;

        // }

        let tdLocal = document.createElement('td');
        tdLocal.classList.add('local-jornadas3')
        if (jornada === 3) {
            tdLocal.innerHTML = `${partidos[i].homeTeam.name} <img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> `;
        }
        
        let tdResultado = document.createElement('td');
        tdResultado.classList.add('resultado')
        if (jornada === 3 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = fechas + hora;
        }
        if (jornada === 1 || jornada === 2) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 3 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].status}: ${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.classList.add('visitante')
        if (jornada === 3) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }
        if(partidos[i].homeTeam.name === 'Spain' || partidos[i].awayTeam.name === 'Spain'){
            // tdCalendario.classList.add('spain')
            tdLocal.classList.add('spain')
            tdResultado.classList.add('spain')
            tdVisitante.classList.add('spain')
        }


        // tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}

function octavos(partidos) {

    let jornadas = document.querySelector('.octavos')
    for (let i = 0; i < 44; i++) {
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
        
        let tdLocal = document.createElement('td');
        tdLocal.classList.add('local-jornadas')
        if (jornada === 4) {
            tdLocal.innerHTML = `${partidos[i].homeTeam.name} <img src= "${urlEquipoLocal}" alt= "escudo" width= "30px"> `;
        }
        
        let tdResultado = document.createElement('td');
        tdResultado.classList.add('resultado')
        if (jornada === 4 && partidos[i].score.fullTime.homeTeam === null) {
            tdResultado.innerHTML = fechas + hora;
        }
        if (jornada === 1 || jornada === 2 || jornada === 3) {
            tr.classList.add('ocultar')
        }

        else if (jornada === 4 && partidos[i].score.fullTime.homeTeam !== null) {
            tdResultado.innerHTML = `${partidos[i].status}: ${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`
        }

        let tdVisitante = document.createElement('td');
        tdVisitante.classList.add('visitante')
        if (jornada === 4) {
            tdVisitante.innerHTML = `<img src= "${urlEquipoVisitante}" alt= "escudo" width= "30px"> ${partidos[i].awayTeam.name}`;

        }
        if(partidos[i].homeTeam.name === 'Spain' || partidos[i].awayTeam.name === 'Spain'){
            // tdCalendario.classList.add('spain')
            tdLocal.classList.add('spain')
            tdResultado.classList.add('spain')
            tdVisitante.classList.add('spain')
        }


        // tr.append(tdCalendario)
        tr.append(tdLocal)
        tr.append(tdResultado)
        tr.append(tdVisitante)
        jornadas.append(tr)
    }

}



