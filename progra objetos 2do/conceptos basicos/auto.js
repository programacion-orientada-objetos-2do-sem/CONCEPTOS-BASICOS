export default class auto {
    constructor(marca,modelo,color,kilometraje)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color; 
        this.kilometraje = kilometraje; 
        this.estado = "Apagado";
    }
    mostrarEstado(){
        console.log(`El auto ${this.marca} ${this.color} del año ${this.modelo}
        tiene un kilometraje de ${this.kilometraje} kms y esta ${this.estado}`);
    }
    encender(){

    }
}
