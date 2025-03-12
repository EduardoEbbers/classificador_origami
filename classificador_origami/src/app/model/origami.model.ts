export class Origami {
    constructor(
        public id?: number,
        public nome?: string,
        public pagina?: number,
        public livro?: string,
        public ano?: string,
        public autor?: string,
        public concluido?: boolean,
        public tipo?: string,
        public dificuldade?: string,
        public tamanhoFolhaInicial?: string,
        public tamanhoFolhaFinal?: string,
        public tempo?: string,
        public comentario?: string
    ) { }
}