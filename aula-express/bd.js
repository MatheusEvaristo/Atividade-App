class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
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
