export interface IComp{
    nome: string;
    autor: string;
}

export class Musica implements IComp{
    public nome: string;
    public autor: string;
    public letra: string;
    constructor(nome: string, letra: string, autor: string){
        this.nome = nome;
        this.autor = autor;
        this.letra = letra

    }
}


export class Playlist {
    private list: Musica[] = [];

    constructor(){}

    public adicionar(musica: Musica): void{
        this.list.push(musica)
    }

    public listar(): void{
        console.log(`-- PlayList --`)

        for(const index of this.list){
            console.log(` -- Titulo ${index.nome} -- Autor ${index.autor}. `)
        }
    }

}

const listaDeMusicas = new Playlist();
const som1 = new Musica('Fade To Black', 'kaugiaduGFVISDUAVBUOIFASVSF', 'Metallica');
const som2 = new Musica('afterlife', 'jsahdcguissdkFVNDJBVIWVBIUSFVBH', 'a7X');

listaDeMusicas.adicionar(som1);
listaDeMusicas.adicionar(som2);

listaDeMusicas.listar();
