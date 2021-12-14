// Creacion de un objeto literal
const natalia = {
    // Atributos
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    // Metodos
    aprobarCurso( nuevoCursito ) {
        this.cursosAprobados.push( nuevoCursito );
    }
};

// Creacion de Objeto
function Student( name, age, cursosAprobados ) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
// Agregando metodos al objeto
Student.prototype.aprobarCurso = function ( nuevoCursito ) {
    this.cursosAprobados.push( nuevoCursito );
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Intruduccion a los videojuegos",
        "Curso de creacion de personajes"
    ]
);

// Prototipos con la sintaxis de Clases