
const materiales = [
    {material: "HULE SOBRE CONCRETO", mu_s: 1.0, mu_k: 0.8},
    {material: "ACERO SOBRE ACERO", mu_s: 0.74, mu_k: 0.57},
    {material: "ALUMINIO SOBRE ACERO", mu_s: 0.61, mu_k: 0.47},
    {material: "VIDRIO SOBRE VIDRIO", mu_s: 0.94, mu_k: 0.4},
    {material: "COBRE SOBRE ACERO", mu_s: 0.53, mu_k: 0.36},
    {material: "MADERA SOBRE MADERA", mu_s: 0.25, mu_k: 0.2},
    {material: "MADERA ENCERADA SOBRE NIEVE HUMEDA", mu_s: 0.14, mu_k: 0.1},
    {material: "METAL SOBRE METAL (LUBRICADO)", mu_s: 0.15, mu_k: 0.06},
    {material: "TEFLON SOBRE TEFLON)", mu_s: 0.04, mu_k: 0.04},
    {material: "HIELO SOBRE HIELO", mu_s: 0.1, mu_k: 0.03},
    {material: "ARTICULACION SINOVIAL EN HUMANOS", mu_s: 0.01, mu_k: 0.003}
    ];


function obtenerAnguloCritico(mu) {
    return Math.atan(mu) * (180/Math.PI);
}

function calcularEstatica(){
    const numeroMaterial = parseInt(document.getElementById("numeroMaterial").value);
    const angulo = parseFloat(document.getElementById("angulo").value);

    if((isNaN(numeroMaterial) || numeroMaterial < 1 || numeroMaterial > materiales.length)){
        document.getElementById("resultado").value = "Selecciona un numero valido entre 1 y 11";
        return;
    }
    if (isNaN(angulo)) {
        document.getElementById("resultado").value = "Introduce un angulo valido.";
        return;
    }

     const material = materiales[numeroMaterial - 1];
     const anguloCritico = obtenerAnguloCritico(material.mu_s);

     if (angulo < anguloCritico) {
        document.getElementById("resultado").value = `El angulo ${angulo} grados NO es critico para ${material.material} (mu_s = ${material.mu_s}). El objeto se quedara quieto.`;
    } else {
        document.getElementById("resultado").value = `El angulo ${angulo} grados ES critico para ${material.material} (mu_s = ${material.mu_s}). El objeto comenzara a moverse.`;
    }
}

function calcularDinamica(){
    const numeroMaterial = parseInt(document.getElementById("numeroMaterial2").value);
    const angulo = parseFloat(document.getElementById("angulo2").value);

    if (isNaN(numeroMaterial) || numeroMaterial < 1 || numeroMaterial > materiales.length) {
        document.getElementById("resultado").value = "Selecciona un numero valido entre 1 y 11";
        return;
    }

    if (isNaN(angulo)) {
        document.getElementById("resultado").value = "Introduce un angulo valido";
        return;
    }

    const material = materiales[numeroMaterial - 1];
    const anguloCritico = obtenerAnguloCritico(material.mu_k);

    if (angulo < anguloCritico) {
                document.getElementById("resultado").value = `El angulo ${angulo} grados NO es critico para ${material.material} (mu_k = ${material.mu_k}). El objeto se quedara quieto.`;
    } else {
                document.getElementById("resultado").value = `El angulo ${angulo} grados ES critico para ${material.material} (mu_k = ${material.mu_k}). El objeto comenzara a moverse.`;
    }
}