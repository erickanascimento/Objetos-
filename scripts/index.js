class Pessoa {
    constructor (nome, sobrenome, idade, cor, cabelo, olhos, estadocivil)
     {
        this.nome = "Ericka",
        this.sobrenome = "Nascimento",
        this.idade = 37
        this.cor = "Preta",
        this.cabelo = "Black Power",
        this.olhos = "Castanho escuro",
        this.estadocivil = "Casada"
     }  

    
    apresentar = () => {
        console.log('Olá, meu nome é ${this.nome} ${this.sobrenome}. Eu tenho ${this.idade} anos. Minha cor é ${this.cor}')
        console.log('Meu cabelo é ${this.cabelo}. A cor dos meus olhos são ${this.olhos}. Meu estado civil é ${this.estadocivil.')
       
    }

    }

    const pessoa1 = new Pessoa("Ericka", "Nascimento", 37, "Preta", "Black Power", "Castanho escuro", "Casada",)
    

    pessoa1.apresentar()


