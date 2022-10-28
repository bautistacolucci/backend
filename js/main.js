class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName = () => `Nombre completo: ${this.nombre} ${this.apellido}`;
  addMascota = (mascota) => this.mascotas.push(mascota);
  countMascotas = () => this.mascotas.length;
  addBook = (book, author) => this.libros.push({ nombre: book, autor: author });
  getBookNames = () => this.libros.map((el) => el.nombre);
}

let primerUsuario = new Usuario("german", "garmendia");
console.log(primerUsuario.getFullName());
primerUsuario.addMascota("masche");
primerUsuario.addMascota("sarah");
console.log(primerUsuario.countMascotas());
primerUsuario.addBook("padre rico padre pobre", "robert kiyosaki");
primerUsuario.addBook("romance dawn", "eiichiro oda");
console.log(primerUsuario.getBookNames());
