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
class Student2 {
    constructor( {
        name, 
        age, 
        cursosAprobados = []
    } ) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso( nuevoCursito ) {
        this.cursosAprobados.push( nuevoCursito );
    }
}

const miguelito = new Student2( {
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Curso Análisis de negocios para Ciencia de datos",
        "Curso de principios de visualización de datos"
    ]
} );

/**
 * ENCAPSULAMIENTO EN JAVASCRIPT
 *  1. Getters y setters
 *  2. Namespaces
 *  3. Object.defineProperties
 *  4. Módulos de ES6
 */

// 1. Getters y Setters
class CourseGS {
    #name;
    constructor( {
        name,
        classes = []
    } ) {
        // Colocamos el asterisco para deplarar que la variable es privada, ES2020
        this.#name = name;
        this.classes = classes
    }
    get name(  ){
        return this.#name;
    }
    set name( nuevoNombrecito ) {
        if( nuevoNombrecito != this._name ) {
            console.error( "Web... no" );
        } else {
            this.#name = nuevoNombrecito;
        }
    }
}
const cursoPrograBasica = new CourseGS( {
    name: "Curso básico de programación",
} );