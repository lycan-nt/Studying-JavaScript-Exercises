const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 7.9
    }, {
        nome: 'Ana',
        nota: 8.1
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Rebeca',
        nota: 10.0
    }, {
        nome: 'Felipe',
        nota: 10.0
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)