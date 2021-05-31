 const urlGrupos = 'https://api.football-data.org/v2/competitions/2018/standings'


 fetch(urlGrupos, {
     method: 'GET',
     headers:{
        "X-Auth-Token": "4e11d1dfed8845f79d5c260aff10e68a"
     }
 })
 .then(respuesta => respuesta.json())
 .then(resultado => {
    const grupos = resultado.standings
    console.log(grupos)
    grupoA(grupos)
    grupoB(grupos)
    grupoC(grupos)
    grupoD(grupos)
    grupoE(grupos)
    grupoF(grupos)
 })
 
 
 function grupoA(grupos){
     let tbodyGrupoA = document.getElementById('grupoA');

     let agrupaciones = grupos[0].table

     for(i = 0; i < agrupaciones.length; i++){

        let tr2 = document.createElement('tr');

        let idEquipo = agrupaciones[i].team.id;
        console.log(idEquipo)
        let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
        console.log(escudoEquipo)
        
        let equipos = agrupaciones[i].team.name;
        let partidosJugados = agrupaciones[i].playedGames;
        let victorias = agrupaciones[i].won;
        let empates = agrupaciones[i].draw;
        let derrotas = agrupaciones[i].lost;
        let golesFavor = agrupaciones[i].goalsFor;
        let golesContra = agrupaciones[i].goalsAgainst;
        let diferenciaGoles = agrupaciones[i].goalDifference;
        let puntos = agrupaciones[i].points;


        let equiposGrupo = document.createElement('td')
        equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

        let jugadosGrupo = document.createElement('td')
        jugadosGrupo.innerHTML = partidosJugados;

        let victoriasGrupo = document.createElement('td');
        victoriasGrupo.innerHTML = victorias;

        let empatesGrupo = document.createElement('td');
        empatesGrupo.innerHTML = empates;

        let derrotasGrupo = document.createElement('td');
        derrotasGrupo.innerHTML = derrotas;

        let golesFavorGrupo = document.createElement('td');
        golesFavorGrupo.innerHTML = golesFavor;
        golesFavorGrupo.classList.add('golesFavor')

        let golesContraGrupo = document.createElement('td');
        golesContraGrupo.innerHTML = golesContra;
        golesContraGrupo.classList.add('golesContra')

        let diferenciaGolesGrupo = document.createElement('td');
        diferenciaGolesGrupo.innerHTML = diferenciaGoles;
        diferenciaGolesGrupo.classList.add('diferenciaGoles')

        let puntosGrupo = document.createElement('td');
        puntosGrupo.innerHTML = puntos;
        puntosGrupo.classList.add('puntos')


        tr2.append(equiposGrupo);
        tr2.append(jugadosGrupo);
        tr2.append(victoriasGrupo);
        tr2.append(empatesGrupo);
        tr2.append(derrotasGrupo);
        tr2.append(golesFavorGrupo);
        tr2.append(golesContraGrupo);
        tr2.append(diferenciaGolesGrupo);
        tr2.append(puntosGrupo);
        

        tbodyGrupoA.append(tr2)
     }

     console.log(agrupaciones)
     

 }

 function grupoB(grupos){
    let tbodyGrupoA = document.getElementById('grupoB');

    let agrupaciones = grupos[1].table

    for(i = 0; i < agrupaciones.length; i++){

       let tr2 = document.createElement('tr');

       let idEquipo = agrupaciones[i].team.id;
       console.log(idEquipo)
       let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
       console.log(escudoEquipo)
       
       let equipos = agrupaciones[i].team.name;
       let partidosJugados = agrupaciones[i].playedGames;
       let victorias = agrupaciones[i].won;
       let empates = agrupaciones[i].draw;
       let derrotas = agrupaciones[i].lost;
       let golesFavor = agrupaciones[i].goalsFor;
       let golesContra = agrupaciones[i].goalsAgainst;
       let diferenciaGoles = agrupaciones[i].goalDifference;
       let puntos = agrupaciones[i].points;


       let equiposGrupo = document.createElement('td')
       equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

       let jugadosGrupo = document.createElement('td')
       jugadosGrupo.innerHTML = partidosJugados;

       let victoriasGrupo = document.createElement('td');
       victoriasGrupo.innerHTML = victorias;

       let empatesGrupo = document.createElement('td');
       empatesGrupo.innerHTML = empates;

       let derrotasGrupo = document.createElement('td');
       derrotasGrupo.innerHTML = derrotas;

       let golesFavorGrupo = document.createElement('td');
       golesFavorGrupo.innerHTML = golesFavor;
       golesFavorGrupo.classList.add('golesFavor')

       let golesContraGrupo = document.createElement('td');
       golesContraGrupo.innerHTML = golesContra;
       golesContraGrupo.classList.add('golesContra')


       let diferenciaGolesGrupo = document.createElement('td');
       diferenciaGolesGrupo.innerHTML = diferenciaGoles;
       diferenciaGolesGrupo.classList.add('diferenciaGoles')


       let puntosGrupo = document.createElement('td');
       puntosGrupo.innerHTML = puntos;
       puntosGrupo.classList.add('puntos')



       tr2.append(equiposGrupo);
       tr2.append(jugadosGrupo);
       tr2.append(victoriasGrupo);
       tr2.append(empatesGrupo);
       tr2.append(derrotasGrupo);
       tr2.append(golesFavorGrupo);
       tr2.append(golesContraGrupo);
       tr2.append(diferenciaGolesGrupo);
       tr2.append(puntosGrupo);
       

       tbodyGrupoA.append(tr2)
    }

    console.log(agrupaciones)
    

}
function grupoC(grupos){
    let tbodyGrupoA = document.getElementById('grupoC');

    let agrupaciones = grupos[2].table

    for(i = 0; i < agrupaciones.length; i++){

       let tr2 = document.createElement('tr');

       let idEquipo = agrupaciones[i].team.id;
       console.log(idEquipo)
       let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
       console.log(escudoEquipo)
       
       let equipos = agrupaciones[i].team.name;
       let partidosJugados = agrupaciones[i].playedGames;
       let victorias = agrupaciones[i].won;
       let empates = agrupaciones[i].draw;
       let derrotas = agrupaciones[i].lost;
       let golesFavor = agrupaciones[i].goalsFor;
       let golesContra = agrupaciones[i].goalsAgainst;
       let diferenciaGoles = agrupaciones[i].goalDifference;
       let puntos = agrupaciones[i].points;


       let equiposGrupo = document.createElement('td')
       equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

       let jugadosGrupo = document.createElement('td')
       jugadosGrupo.innerHTML = partidosJugados;

       let victoriasGrupo = document.createElement('td');
       victoriasGrupo.innerHTML = victorias;

       let empatesGrupo = document.createElement('td');
       empatesGrupo.innerHTML = empates;

       let derrotasGrupo = document.createElement('td');
       derrotasGrupo.innerHTML = derrotas;

       let golesFavorGrupo = document.createElement('td');
       golesFavorGrupo.innerHTML = golesFavor;
       golesFavorGrupo.classList.add('golesFavor')

       let golesContraGrupo = document.createElement('td');
       golesContraGrupo.innerHTML = golesContra;
       golesContraGrupo.classList.add('golesContra')


       let diferenciaGolesGrupo = document.createElement('td');
       diferenciaGolesGrupo.innerHTML = diferenciaGoles;
       diferenciaGolesGrupo.classList.add('diferenciaGoles')


       let puntosGrupo = document.createElement('td');
       puntosGrupo.innerHTML = puntos;
       puntosGrupo.classList.add('puntos')



       tr2.append(equiposGrupo);
       tr2.append(jugadosGrupo);
       tr2.append(victoriasGrupo);
       tr2.append(empatesGrupo);
       tr2.append(derrotasGrupo);
       tr2.append(golesFavorGrupo);
       tr2.append(golesContraGrupo);
       tr2.append(diferenciaGolesGrupo);
       tr2.append(puntosGrupo);
       

       tbodyGrupoA.append(tr2)
    }

    console.log(agrupaciones)
    

}
function grupoD(grupos){
    let tbodyGrupoA = document.getElementById('grupoD');

    let agrupaciones = grupos[4].table

    for(i = 0; i < agrupaciones.length; i++){

       let tr2 = document.createElement('tr');

       let idEquipo = agrupaciones[i].team.id;
       console.log(idEquipo)
       let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
       console.log(escudoEquipo)
       
       let equipos = agrupaciones[i].team.name;
       let partidosJugados = agrupaciones[i].playedGames;
       let victorias = agrupaciones[i].won;
       let empates = agrupaciones[i].draw;
       let derrotas = agrupaciones[i].lost;
       let golesFavor = agrupaciones[i].goalsFor;
       let golesContra = agrupaciones[i].goalsAgainst;
       let diferenciaGoles = agrupaciones[i].goalDifference;
       let puntos = agrupaciones[i].points;


       let equiposGrupo = document.createElement('td')
       equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

       let jugadosGrupo = document.createElement('td')
       jugadosGrupo.innerHTML = partidosJugados;

       let victoriasGrupo = document.createElement('td');
       victoriasGrupo.innerHTML = victorias;

       let empatesGrupo = document.createElement('td');
       empatesGrupo.innerHTML = empates;

       let derrotasGrupo = document.createElement('td');
       derrotasGrupo.innerHTML = derrotas;

       let golesFavorGrupo = document.createElement('td');
       golesFavorGrupo.innerHTML = golesFavor;
       golesFavorGrupo.classList.add('golesFavor')

       let golesContraGrupo = document.createElement('td');
       golesContraGrupo.innerHTML = golesContra;
       golesContraGrupo.classList.add('golesContra')


       let diferenciaGolesGrupo = document.createElement('td');
       diferenciaGolesGrupo.innerHTML = diferenciaGoles;
       diferenciaGolesGrupo.classList.add('diferenciaGoles')


       let puntosGrupo = document.createElement('td');
       puntosGrupo.innerHTML = puntos;
       puntosGrupo.classList.add('puntos')



       tr2.append(equiposGrupo);
       tr2.append(jugadosGrupo);
       tr2.append(victoriasGrupo);
       tr2.append(empatesGrupo);
       tr2.append(derrotasGrupo);
       tr2.append(golesFavorGrupo);
       tr2.append(golesContraGrupo);
       tr2.append(diferenciaGolesGrupo);
       tr2.append(puntosGrupo);
       

       tbodyGrupoA.append(tr2)
    }

    console.log(agrupaciones)
    

}
function grupoE(grupos){
    let tbodyGrupoA = document.getElementById('grupoE');

    let agrupaciones = grupos[3].table

    for(i = 0; i < agrupaciones.length; i++){

       let tr2 = document.createElement('tr');

       let idEquipo = agrupaciones[i].team.id;
       console.log(idEquipo)
       let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
       console.log(escudoEquipo)
       
       let equipos = agrupaciones[i].team.name;
       let partidosJugados = agrupaciones[i].playedGames;
       let victorias = agrupaciones[i].won;
       let empates = agrupaciones[i].draw;
       let derrotas = agrupaciones[i].lost;
       let golesFavor = agrupaciones[i].goalsFor;
       let golesContra = agrupaciones[i].goalsAgainst;
       let diferenciaGoles = agrupaciones[i].goalDifference;
       let puntos = agrupaciones[i].points;


       let equiposGrupo = document.createElement('td')
       equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

       let jugadosGrupo = document.createElement('td')
       jugadosGrupo.innerHTML = partidosJugados;

       let victoriasGrupo = document.createElement('td');
       victoriasGrupo.innerHTML = victorias;

       let empatesGrupo = document.createElement('td');
       empatesGrupo.innerHTML = empates;

       let derrotasGrupo = document.createElement('td');
       derrotasGrupo.innerHTML = derrotas;

       let golesFavorGrupo = document.createElement('td');
       golesFavorGrupo.innerHTML = golesFavor;
       golesFavorGrupo.classList.add('golesFavor')

       let golesContraGrupo = document.createElement('td');
       golesContraGrupo.innerHTML = golesContra;
       golesContraGrupo.classList.add('golesContra')


       let diferenciaGolesGrupo = document.createElement('td');
       diferenciaGolesGrupo.innerHTML = diferenciaGoles;
       diferenciaGolesGrupo.classList.add('diferenciaGoles')


       let puntosGrupo = document.createElement('td');
       puntosGrupo.innerHTML = puntos;
       puntosGrupo.classList.add('puntos')



       tr2.append(equiposGrupo);
       tr2.append(jugadosGrupo);
       tr2.append(victoriasGrupo);
       tr2.append(empatesGrupo);
       tr2.append(derrotasGrupo);
       tr2.append(golesFavorGrupo);
       tr2.append(golesContraGrupo);
       tr2.append(diferenciaGolesGrupo);
       tr2.append(puntosGrupo);
       

       tbodyGrupoA.append(tr2)
    }

    console.log(agrupaciones)
    

}
function grupoF(grupos){
    let tbodyGrupoA = document.getElementById('grupoF');

    let agrupaciones = grupos[5].table

    for(i = 0; i < agrupaciones.length; i++){

       let tr2 = document.createElement('tr');

       let idEquipo = agrupaciones[i].team.id;
       console.log(idEquipo)
       let escudoEquipo = "https://crests.football-data.org/" + idEquipo + ".svg";
       console.log(escudoEquipo)
       
       let equipos = agrupaciones[i].team.name;
       let partidosJugados = agrupaciones[i].playedGames;
       let victorias = agrupaciones[i].won;
       let empates = agrupaciones[i].draw;
       let derrotas = agrupaciones[i].lost;
       let golesFavor = agrupaciones[i].goalsFor;
       let golesContra = agrupaciones[i].goalsAgainst;
       let diferenciaGoles = agrupaciones[i].goalDifference;
       let puntos = agrupaciones[i].points;


       let equiposGrupo = document.createElement('td')
       equiposGrupo.innerHTML = `<img src= "${escudoEquipo}" alt= "escudo" width= "30px"> ${equipos}`;

       let jugadosGrupo = document.createElement('td')
       jugadosGrupo.innerHTML = partidosJugados;

       let victoriasGrupo = document.createElement('td');
       victoriasGrupo.innerHTML = victorias;

       let empatesGrupo = document.createElement('td');
       empatesGrupo.innerHTML = empates;

       let derrotasGrupo = document.createElement('td');
       derrotasGrupo.innerHTML = derrotas;

       let golesFavorGrupo = document.createElement('td');
       golesFavorGrupo.innerHTML = golesFavor;
       golesFavorGrupo.classList.add('golesFavor')

       let golesContraGrupo = document.createElement('td');
       golesContraGrupo.innerHTML = golesContra;
       golesContraGrupo.classList.add('golesContra')


       let diferenciaGolesGrupo = document.createElement('td');
       diferenciaGolesGrupo.innerHTML = diferenciaGoles;
       diferenciaGolesGrupo.classList.add('diferenciaGoles')


       let puntosGrupo = document.createElement('td');
       puntosGrupo.innerHTML = puntos;
       puntosGrupo.classList.add('puntos')



       tr2.append(equiposGrupo);
       tr2.append(jugadosGrupo);
       tr2.append(victoriasGrupo);
       tr2.append(empatesGrupo);
       tr2.append(derrotasGrupo);
       tr2.append(golesFavorGrupo);
       tr2.append(golesContraGrupo);
       tr2.append(diferenciaGolesGrupo);
       tr2.append(puntosGrupo);
       

       tbodyGrupoA.append(tr2)
    }

    console.log(agrupaciones)
    

}