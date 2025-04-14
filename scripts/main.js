import { series } from './data.js';

const tablaSeries = document.getElementById('series');
const promedioElemento = document.getElementById('average-seasons');

const cardDetalle = document.getElementById('series-detail-card');
const title = document.getElementById('series-title');
const description = document.getElementById('series-description');
const img = document.getElementById('series-img');
const link = document.getElementById('series-link');

mostrarTablaSeries(series);
mostrarPromedio(calcularPromedioTemporadas(series));

function mostrarTablaSeries(series) {
    series.forEach(function (serie) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${serie.idSerie}</strong></td>
            <td><a href="#" class="text-primary serie-name">${serie.titulo}</a></td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        const linkNombre = tr.querySelector(".serie-name");
        linkNombre.addEventListener("click", function (event) {
            event.preventDefault();
            mostrarDetalleSerie(serie);
        });
        tablaSeries.appendChild(tr);
    });
}

function mostrarDetalleSerie(serie) {
    title.textContent = serie.titulo;
    description.textContent = serie.descripcion;
    img.src = serie.imageUrl;
    img.alt = serie.titulo;
    link.href = serie.website;
    link.textContent = serie.website;
    cardDetalle.style.display = "block";
}

function calcularPromedioTemporadas(listaSeries) {
    let suma = 0;
    for (let serie of listaSeries) {
        suma += serie.temporadas;
    }
    return suma / listaSeries.length;
}

function mostrarPromedio(promedio) {
    promedioElemento.innerHTML = "Seasons average: " + Math.floor(promedio);
}