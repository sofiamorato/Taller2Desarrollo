import { Serie } from './serie.js';
import { series } from './data.js';

const tablaSeries: HTMLElement = document.getElementById('series')!;
const promedioElemento: HTMLElement = document.getElementById('average-seasons')!;

const cardDetalle = document.getElementById("series-detail-card")!;
const title = document.getElementById("series-title")!;
const description = document.getElementById("series-description")!;
const img = document.getElementById("series-img") as HTMLImageElement;
const link = document.getElementById("series-link") as HTMLAnchorElement;

mostrarTablaSeries(series);
mostrarPromedio(calcularPromedioTemporadas(series));

function mostrarTablaSeries(series: Serie[]): void {
    series.forEach((serie) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><strong>${serie.idSerie}</strong></td>
            <td><a href="#" class="text-primary serie-name">${serie.titulo}</a></td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;

        const linkNombre = tr.querySelector(".serie-name")!;
        linkNombre.addEventListener("click", (event) => {
            event.preventDefault();
            mostrarDetalleSerie(serie);
        });

        tablaSeries.appendChild(tr);
    });
}

function mostrarDetalleSerie(serie: Serie): void {
    title.textContent = serie.titulo;
    description.textContent = serie.descripcion;
    img.src = serie.imageUrl;
    img.alt = serie.titulo;
    link.href = serie.website;
    link.textContent = "Ver más";

    cardDetalle.style.display = "block";
}

function calcularPromedioTemporadas(listaSeries: Serie[]): number {
    let suma = 0;
    for (let serie of listaSeries) {
        suma += serie.temporadas;
    }
    return suma / listaSeries.length;
}

function mostrarPromedio(promedio: number): void {
    promedioElemento.innerHTML = `Seasons average: ${Math.floor(promedio)}`;
}
