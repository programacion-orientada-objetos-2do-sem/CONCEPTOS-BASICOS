import auto from "./auto.js"

let auto1 = new auto ("Ford", 2000, "rojo", 100);
let auto2 = new auto ("Nissan", 2010, "azul" );
let auto3 =new auto ("Toyota", 2009);

auto1.encender();
auto1.avanzar (50,1.5);
auto1.apagar();
auto1.avanzar (50,1.5);
console.log (`Kilometraje ${auto1.kilometraje}`);
auto1.kilometraje = 5;
console.log (`Kilometraje ${auto1.kilometraje}`);


auto2.encender();
auto2.apagar();

auto3.encender();
auto3.apagar();

