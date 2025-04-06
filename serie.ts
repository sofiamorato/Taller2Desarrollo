export class Serie {
    idSerie: number;
    titulo: string;
    canal: string;
    temporadas: number;
    website: string;
    descripcion: string;
    imageUrl: string;

    constructor(idSerie: number, titulo: string, canal: string, temporadas: number, website: string, descripcion: string, imageUrl: string) {
        this.idSerie = idSerie;
        this.titulo = titulo;
        this.canal = canal;
        this.temporadas = temporadas;
        this.website = website;
        this.descripcion = descripcion;
        this.imageUrl = imageUrl;
    }
}
