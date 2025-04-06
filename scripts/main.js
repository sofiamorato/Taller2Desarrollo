import { series } from './data.js';
var tablaSeries = document.getElementById('series');
var promedioTemporadas = calcularPromedioTemporadas(series);
mostrarTablaSeries(series);
function mostrarTablaSeries(series) {
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n        <td><strong>".concat(serie.idSerie, "</strong></td>\n        <td><a href=\"").concat(serie.website, "\" target=\"_blank\">").concat(serie.titulo, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>\n        ");
        tablaSeries.appendChild(tr);
    });
    var lastRow = document.createElement("tr");
    lastRow.innerHTML = "<td colspan = \"2\" style = \"background-color: white !important;\"> Seasons average: ".concat(calcularPromedioTemporadas(series), "</td>");
    tablaSeries.appendChild(lastRow);
}
function calcularPromedioTemporadas(listaSeries) {
    var sumaTotalTemporadas = 0;
    var cantidadSeries = listaSeries.length;
    for (var i = 0; i < cantidadSeries; i++) {
        sumaTotalTemporadas += listaSeries[i].temporadas;
    }
    var promedio = sumaTotalTemporadas / cantidadSeries;
    return promedio;
}
