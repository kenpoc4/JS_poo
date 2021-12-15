/**
 * PROYECTO DEL CURSO
 * Creación del backend de una plataforma de de educación en linea basado en POO en JavaScript
 */
class Comment {
    constructor( {
        content,
        studentName,
        studentRole = "estudiante"
    } ) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(  ) {
        console.log( this.studentName = " (" + this.studentRole + ")" );
        console.log( this.likes + " likes" );
        console.log( this.content );
    }
}

// Creación de nuestras clase
class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
        isFree = false,
        lang = "spanish"
    }) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.isFree = isFree;
        this.lang = lang;
    }
}
class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    replaceCourse(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        if (oldCourseIndex !== -1) {
        this.courses[oldCourseIndex] = newCourse;
        }
        return this.courses;
    }
    deleteCourse(oldCourse) {
        const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        this.courses.splice(courseIndex, 1);
        return this.courses;
    }
}
class Students{
    constructor( {
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    } ) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario( commentContent ) {
        const comment = new Comment( {
            content: commentContent,
            studentName: this.name
        } );

        comment.publicar(  );
    }
}
// Herencia de la clase Student
class FreeStudent extends Student {
    constructor( props ) {
        super( props );
    }
    approvedCourses( newCourse ) {
        if( newCourse.isFree ) {
            this.approvedCourses.push( newCourse );
        } else {
            console.warn("No es un curso gratis");
        }
    }
}
class BasicStudent extends Student {
    constructor( props ) {
        super( props );
    }
    approvedCourses( newCourse ) {
        if( newCourse.lang !== "english" ) {
            this.approvedCourses.push( newCourse );
        } else {
            console.warn("No puedes tomar cursos en inglés");
        }
    }
}
class ExpertStudent extends Student {
    constructor( props ) {
        super( props );
    }
    approvedCourses( newCourse ) {
        this.approvedCourses.push( newCourse );
    }
}
class TeacherStudent extends Student {
    constructor( props ) {
        super( props );
    }
    approvedCourses( newCourse ) {
        this.approvedCourses.push( newCourse );
    }
    publicarComentario( commentContent ) {
        const comment = new Comment( {
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        } );

        comment.publicar(  );
    }
}

// Instancias Courses
const cursoPrograBasica = new Course( { 
    id: 'programacion-basica', 
    name: 'Curso de Programación Básica', 
    teacher: 'Freddy Vega',
    isFree: true
} );
const cursoBasicoJs = new Course( { 
    id: 'basico-javascript', 
    name: 'Curso Básico de JavaScript', 
    teacher: 'Diego De Granda',
} );
const cursoEcmascript6 = new Course( {
id: 'ecmascript-6',
name: 'Curso de ECMAScript 6+',
teacher: 'Orlando Naipes'
} );
const cursoReactNativeBasico = new Course( {
    id: 'react-native-basico',
    name: 'Curso de React Native Básico',
    teacher: 'Orlando Naipes',
    lang: "english"
} );
// Instancias LearningPath
const javaScriptLearningPath = new LearningPath( {
    id: 'javascript',
    name: 'Desarrollo con JavaScript',
    courses: [
        cursoPrograBasica,
        cursoEcmascript6,
        cursoBasicoJs
    ]
} );
const reactNativeLearningPath = new LearningPath( {
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    courses: [
        cursoPrograBasica,
        cursoReactNativeBasico
    ]
} );
// Instancias Students
const juan = new FreeStudent( {
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths : [
        javaScriptLearningPath
    ]
} );
const cecilia = new BasicStudent( {
    name: "Cecilia GG",
    username: "cecigg",
    email: "ceci@ceci.com",
    twitter: "cecigg",
    learningPaths : [
        reactNativeLearningPath
    ]
} );
const freddy = new TeacherStudent( {
    name: "Freddy Vega",
    username: "freddier",
    email: "f@vega.com",
    twitter: "freddier"
} );