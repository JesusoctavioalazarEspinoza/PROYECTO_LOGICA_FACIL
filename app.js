// Objeto que contiene el contenido de las lecciones
const lessons = {
    variables: {
        title: 'Variables',
        description: 'Las variables son contenedores para almacenar datos. Se utilizan para guardar información que se puede manipular más adelante.',
        quizQuestion: '¿Cuál de las siguientes es una variable válida en JavaScript?\n\n1) 123var\n2) var123\n3) var#nombre'
    },
    condicionales: {
        title: 'Condicionales',
        description: 'Las condicionales permiten que el programa tome decisiones. Se utilizan para ejecutar diferentes bloques de código según una condición.',
        quizQuestion: '¿Cuál es el operador que se utiliza para verificar si dos valores son iguales en JavaScript?\n\n1) ==\n2) !=\n3) ==='
    },
    bucles: {
        title: 'Bucles',
        description: 'Los bucles permiten repetir una tarea varias veces. Los tipos más comunes son for y while.',
        quizQuestion: '¿Cuál es el tipo de bucle que se utiliza cuando se conoce el número de iteraciones?\n\n1) for\n2) while\n3) do-while'
    },
    listas: {
        title: 'listas',
        description: 'las litas son ..',
        quizQuestion: 'dddddd '
    }
};

// Función que se ejecuta cuando el usuario selecciona una lección
function startLesson(lessonKey) {
    const lesson = lessons[lessonKey];

    // Mostrar el contenido de la lección
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('lesson-description').innerText = lesson.description;
    document.getElementById('quiz-question').innerText = lesson.quizQuestion;
    document.getElementById('quiz-question').innerText = lesson.quizQuestion;

    // Mostrar el área de la lección y el quiz
    document.getElementById('lesson-content').style.display = 'block';
    document.getElementById('quiz').style.display = 'block';
}

// Función para verificar la respuesta del quiz (puedes ampliarla)
function checkAnswer() {
    alert('Esta es una función de ejemplo. Aquí podrías verificar la respuesta del usuario.');
}