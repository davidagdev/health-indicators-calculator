window.onload = function() {
    const sistolicaInput = document.getElementById('Sistolica');
    const diastolicaInput = document.getElementById('Diastolica');
    const botonCalculaTA = document.getElementById('CalculaTA');
    const resultadoTAS = document.getElementById('resultadoTAS');
    const resultadoTAD = document.getElementById('resultadoTAD');
    const tabla_sis = [
        {limite: 90, valoracion: 'baja'},
        {limite: 120, valoracion: 'normal'},
        {limite: 130, valoracion: 'prehipertensión'},
        {limite: 140, valoracion: 'hipertensión grado 1'},
        {limite: 180, valoracion: 'hipertensión grado 2'},
        {limite: Infinity, valoracion: 'crisis hipertensiva'}
    ];
    const tabla_dias = [
        {limite: 60, valoracion: 'baja'},
        {limite: 80, valoracion: 'normal'},
        {limite: 90, valoracion: 'prehipertensión'},
        {limite: 100, valoracion: 'hipertensión grado 1'},
        {limite: 120, valoracion: 'hipertensión grado 2'},
        {limite: Infinity, valoracion: 'crisis hipertensiva'}
    ];

    

    botonCalculaTA.addEventListener('click', function(event){
        event.preventDefault();
        let sistolica = parseInt(sistolicaInput.value);
        let diastolica = parseInt(diastolicaInput.value);

        if (isNaN(sistolica) || isNaN (diastolica) || sistolica <= 0 || diastolica <= 0) {
            resultadoTAS.textContent = "Error: Valores inválidos.";
            resultadoTAD.textContent = "";
            return;
        }

        let valoracionS = tabla_sis.find(rango => sistolica < rango.limite);
        let valoracionD = tabla_dias.find(rango => diastolica < rango.limite);

        resultadoTAS.textContent = `Resulatdo: ${valoracionS ? valoracionS.valoracion : 'crisis hipertensiva'}`;
        resultadoTAD.textContent = `Resultado: ${valoracionD ? valoracionD.valoracion : 'crisis hipertensiva'}`;
    })


    const pesoInput = document.getElementById('Peso');
    const alturaInput = document.getElementById('Altura');
    const botonCalcularIMC = document.getElementById('CalculaIMC');
    const resultadoIMC = document.getElementById('resultadoIMC');

    botonCalcularIMC.addEventListener('click', function(event) {
        event.preventDefault();
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || altura <= 0) {
            resultadoIMC.textContent = "Por favor, introduce valores válidos.";
            return;
        }

        let imc = peso / (altura * altura);
        let clasificacionimc = "";

        if (imc < 18.5) clasificacionimc = "Bajo peso";
        else if (imc < 25) clasificacionimc = "Peso normal";
        else if (imc < 30) clasificacionimc = "Sobrepeso";
        else clasificacionimc = "Obesidad";

        resultadoIMC.textContent = `Resultado: ${imc.toFixed(2)} - ${clasificacionimc}`;
    });

    const cinturaInput = document.getElementById('Cintura');
    const caderaInput = document.getElementById('Cadera');
    const generoInput = document.getElementById('Genero');
    const botonCalcularICC = document.getElementById('CalculaICC');
    const resultadoICC = document.getElementById('resultadoICC');

    botonCalcularICC.addEventListener('click', function(event) {
        event.preventDefault();

        let cintura = parseFloat(cinturaInput.value);
        let cadera = parseFloat(caderaInput.value);
        let genero = generoInput.value; // "Hombre" o "Mujer"

        if (isNaN(cadera) || isNaN(cintura) || cadera <= 0) {
            resultadoICC.textContent = "Por favor, introduce valores válidos.";
            return;
        }

        let icc = cintura / cadera;
        let clasificacionicc = "";

        if (genero === "Mujer") {
            if (icc <= 0.80) clasificacionicc = "Riesgo Bajo (Ginoide)";
            else if (icc <= 0.85) clasificacionicc = "Riesgo Moderado";
            else clasificacionicc = "Riesgo Alto (Androide)";
        } else {
            // Lógica para Hombre
            if (icc <= 0.94) clasificacionicc = "Riesgo Bajo (Ginoide)";
            else if (icc <= 1.00) clasificacionicc = "Riesgo Moderado";
            else clasificacionicc = "Riesgo Alto (Androide)";
        }

        resultadoICC.textContent = `Resultado: ${icc.toFixed(2)} - ${clasificacionicc}`;
    });

    const reset = document.getElementById('reset');
    reset.addEventListener('click', function(event){
        document.getElementById('FCb').value = '';
        document.getElementById('Sistolica').value = '';
        document.getElementById('resultadoTAS').value = '';
        document.getElementById('Diastolica').value = '';
        document.getElementById('resultadoTAD').value = '';
        document.getElementById('Peso').value = '';
        document.getElementById('Altura').value = '';
        document.getElementById('resultadoIMC').value = '';
        document.getElementById('Cintura').value = '';
        document.getElementById('Cadera').value = '';
        document.getElementById('resultadoICC').value = '';
    })
};