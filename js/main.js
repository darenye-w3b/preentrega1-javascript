//  Viaje espacial entre un Astronauta y un Robot 

function realizarViaje(energiaAstronauta, energiaRobot) {
    let viaje = 0;
    
    const MIN_POWER = 10;
    const MAX_POWER = 40;
    
    while((energiaAstronauta > 0) && (energiaRobot > 0)){
    
        viaje+=1
       let eventoAstronauta = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
       let eventoRobot = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    
        console.log("------------Viaje Espacial " + viaje + "-----------------------");
        if(eventoAstronauta === eventoRobot) {
            console.log("Ambos enfrentan un evento sin cambios");
        } else if (eventoAstronauta > eventoRobot) {
            console.log("Astronauta supera un evento con una energía de " + eventoAstronauta);
            energiaRobot -= eventoAstronauta;
            if(energiaRobot < 0){
                energiaRobot = 0;
            }
            console.log("La energía del Robot baja a " + energiaRobot);
        } else {
            console.log("Robot supera un evento con una energía de " + eventoRobot);
            energiaAstronauta -= eventoRobot;
            if(energiaAstronauta < 0){
                energiaAstronauta = 0;
            }
            console.log("La energía del Astronauta baja a " + energiaAstronauta);
        }
const respuestaUsuario = prompt("Deseas continuar con el próximo Viaje Espacial? (Si/No)");
if (respuestaUsuario && respuestaUsuario.toLowerCase() !== "si") {
    break;
        }
} 
return {energiaAstronauta, energiaRobot}; 
}


function determinarGanador(energiaAstronauta, energiaRobot){
    if(energiaAstronauta > energiaRobot){
        return("El Astronauta tiene más energía al final del viaje espacial!");
    } else if(energiaAstronauta < energiaRobot){
        return("El Robot tiene más energía al final del viaje espacial!");
    } else{
        return("Es un empate! Ambos tienen la misma energía al final del viaje espacial!");
    }
}

const RESULTADO = realizarViaje(100, 100);
console.log("Resultado del Viaje Espacial");
console.log(determinarGanador(RESULTADO.energiaAstronauta, RESULTADO.energiaRobot));
