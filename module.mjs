/**
 * ENCAPSULAMIENTO EN JAVASCRIPT
 *  1. Getters y setters
 *  2. Namespaces
 *  3. Object.defineProperties
 *  4. Módulos de ES6
 */
function videoPlay( id ) {
    const urlSecreta = "https://platziltrasecreto.com/" + id;
    console.log( "Reproducimos el video" + urlSecreta);
}
function videoStop( id ) {
    const urlSecreta = "https://platziltrasecreto.com/" + id;
    console.log( "Reproducimos el video" + urlSecreta );
}
export class PlatziClass {
    constructor( {
        name,
        videoID
    } ) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(  ) {
        videoPlay( this.videoID );
    }
    pausar(  ) {
        videoStop( this.videoID );
    }
}

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