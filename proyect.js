/**
 * PROYECTO DEL CURSO
 * Creación del backend de una plataforma de de educación en linea basado en POO en JavaScript
 */
// Creación de nuestras clase
class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
    }) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
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
}
// Instancias Courses
const cursoPrograBasica = new Course( { 
    id: 'programacion-basica', 
    name: 'Curso de Programación Básica', 
    teacher: 'Freddy Vega',
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
    teacher: 'Orlando Naipes'
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
const juan = new Students( {
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths : [
        javaScriptLearningPath
    ]
} );
const cecilia = new Students( {
    name: "Cecilia GG",
    username: "cecigg",
    email: "ceci@ceci.com",
    twitter: "cecigg",
    learningPaths : [
        reactNativeLearningPath
    ]
} );