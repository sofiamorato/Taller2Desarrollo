import { Serie } from './serie.js';
import { series } from './data.js';

const tablaSeries: HTMLElement = document.getElementById('series')!;
const promedioTemporadas: number = calcularPromedioTemporadas(series);

mostrarTablaSeries(series);


function mostrarTablaSeries(series: Serie[]): void {
    series.forEach((serie) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><strong>${serie.idSerie}</strong></td>
        <td><a href="${serie.website}" target="_blank">${serie.titulo}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
        `;
        tablaSeries.appendChild(tr);
    });
    let lastRow = document.createElement("tr");
    lastRow.innerHTML = `<td colspan = "2" style = "background-color: white !important;"> Seasons average: ${calcularPromedioTemporadas(series)}</td>`;
    tablaSeries.appendChild(lastRow)

}

function calcularPromedioTemporadas(listaSeries: Serie[]): number {
    let sumaTotalTemporadas: number = 0;
    const cantidadSeries: number = listaSeries.length;

    for (let i = 0; i < cantidadSeries; i++) {
        sumaTotalTemporadas += listaSeries[i].temporadas;
    }

    const promedio: number = sumaTotalTemporadas / cantidadSeries;
    return promedio;
}

