function evaluar() {
    let correctas = {
        q1: "20",
        q2: "Erno Rubik",
        q3: "3.47 segundos",
        q4: "Método de Fridrich",
        q5: "43 trillones"
    };

    let respuestas = document.forms["diagnostico"];
    let puntos = 0;

    for (let pregunta in correctas) {
        let seleccion = respuestas[pregunta]?.value;
        if (seleccion === correctas[pregunta]) puntos++;
    }

    document.getElementById("resultado").innerHTML = `<h2>Calificación: ${puntos}/5</h2>`;
    dibujarGrafico(puntos);
}

function dibujarGrafico(puntos) {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
            ['Pregunta', 'Puntos'],
            ['Correctas', puntos],
            ['Incorrectas', 5 - puntos]
        ]);

        var options = { title: 'Resultados del Diagnóstico', pieHole: 0.4 };
        var chart = new google.visualization.PieChart(document.getElementById('grafico'));
        chart.draw(data, options);
    });
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.text(20, 20, "Diagnóstico Cubo Rubik");
    doc.text(20, 30, document.getElementById("resultado").innerText);

    doc.save("diagnostico_rubik.pdf");
}
