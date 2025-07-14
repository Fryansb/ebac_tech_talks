AOS.init();
const dataDoEvento = new Date("jul 24, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasemMs = 86400000;
    const horasemMs = 3600000;
    const minutosemMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasemMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diasemMs / horasemMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasemMs / minutosemMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosemMs / 1000);
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'evento expirado';
    }
}, 1000);

//# sourceMappingURL=ebac_tech_talks-main.f75de5e1.js.map
