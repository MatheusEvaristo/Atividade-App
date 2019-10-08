class BancoDeDados {
    constructor() {
        this.alunos = ["Evaristo","Anderson"];
        this.professores = ["Jesiel","Heleonardo"];
    }

    get() {
        return this.alunos;
    }

    add(aluno) {
        this.alunos.push(aluno);
    }

    get() {
        return this.professores;
    }

    add(professor) {
        this.professores.push(professor);
    }
}

module.exports = new BancoDeDados();