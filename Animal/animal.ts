export default class Animal {
  tipo: string;
  nome: string;
  idade: number;
  
  constructor(t: string, n: string, i: number){
    this.tipo = t;
    this.nome = n;
    this.idade = i;
  }
}

class Cachorro extends Animal {
  raça: string;

  constructor(t: string, n: string, i: number, r: string){
    super(t, n, i)
    this.raça = r;
  }
}