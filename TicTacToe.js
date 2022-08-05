const estado = ["b", "b", "b", "b", "b", "b", "b", "b", "b"];
let jugadorActual = "c";
let seEstaJugando = false;

function Resaltar(idImagen){
    document.getElementById(idImagen).classList.remove("sinResaltado");
    document.getElementById(idImagen).classList.add("resaltado");
}

function VerSiGanador(valor) {
    if (estado[0] == valor && estado[1] == valor && estado[2] == valor) {
        Resaltar(0);
        Resaltar(1);
        Resaltar(2);
        return true;
    }
    if (estado[3] == valor && estado[4] == valor && estado[5] == valor) {
        Resaltar(3);
        Resaltar(4);
        Resaltar(5);
        return true;
    }
    if (estado[6] == valor && estado[7] == valor && estado[8] == valor) {
        Resaltar(6);
        Resaltar(7);
        Resaltar(8);
        return true;
    }
    if (estado[0] == valor && estado[3] == valor && estado[6] == valor) {
        Resaltar(0);
        Resaltar(3);
        Resaltar(6);
        return true;
    }
    if (estado[1] == valor && estado[4] == valor && estado[7] == valor) {
        Resaltar(1);
        Resaltar(4);
        Resaltar(7);
        return true;
    }
    if (estado[2] == valor && estado[5] == valor && estado[8] == valor) {
        Resaltar(2);
        Resaltar(5);
        Resaltar(8);
        return true;
    }
    if (estado[0] == valor && estado[4] == valor && estado[8] == valor) {
        Resaltar(0);
        Resaltar(4);
        Resaltar(8);
        return true;
    }
    if (estado[2] == valor && estado[4] == valor && estado[6] == valor) {
        Resaltar(2);
        Resaltar(4);
        Resaltar(6);
        return true;
    }
    return false;
}

function VerSiTodasOcupadas() {
    let count = 0;
    for (let i = 0; i < 9; i++) {
        if (estado[i] != "b") {
            count++;
        }
    }
    if (count == 9) {
        return true;
    }
    return false;
}

function ClickEnImagen(idImagen) {
    if (seEstaJugando) {
        if (estado[idImagen] == "b" && jugadorActual == "c") {
            estado[idImagen] = "c";
            document.getElementById(idImagen).src = "imagenCero.jpg";
        }
        if (estado[idImagen] == "b" && jugadorActual == "x") {
            estado[idImagen] = "x";
            document.getElementById(idImagen).src = "imagenX.jpg";
        }
        const esGanadorCero = VerSiGanador("c");
        if (esGanadorCero) {
            seEstaJugando = false;
            setTimeout(()=>alert("Es ganador Cero"));
        }
        const esGanadorX = VerSiGanador("x");
        if (esGanadorX) {
            seEstaJugando = false;
            setTimeout(()=>alert("Es ganador X"));
        }
        const todasOcupdas = VerSiTodasOcupadas();
        if (!esGanadorCero && !esGanadorX && todasOcupdas) {
            seEstaJugando = false;
            setTimeout(()=>alert("No hay ganador"));
        }

        if (jugadorActual == "c") {
            jugadorActual = "x";
        }
        else {
            jugadorActual = "c";
        }
    }
}

function InicializarEstados() {
    for (let i = 0; i < 9; i++) {
        estado[i] = "b";
        document.getElementById(i).src = "imagenBlanco.jpg";
        document.getElementById(i).classList.remove("sinResaltado");
        document.getElementById(i).classList.add("sinResaltado");
    }
    jugadorActual = "c";
    seEstaJugando = true;
}

document.getElementById("boton").addEventListener("click", InicializarEstados);

for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener("click", () => {
        ClickEnImagen(i);
    });
}
