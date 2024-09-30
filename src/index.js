import './styles.css';

const quizData = [
    {
        question: "Що таке const у JavaScript?",
        options: ["Змінна", "Константа", "Функція", "Масив"],
        correct: "Константа"
    },
    {
        question: "Яка структура даних є ітерованою?",
        options: ["Object", "Set", "Function", "Null"],
        correct: "Set"
    },
    {
        question: "Що означає оператор '===' у JavaScript?",
        options: ["Присвоєння", "Не дорівнює", "Тотожність", "Менше"],
        correct: "Тотожність"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        questionBlock.innerHTML = `
            <h3>${item.question}</h3>
            ${item.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionBlock);
    });
}

document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.correct) {
            score++;
        }
    });
    document.getElementById('result').textContent = `Ваш результат: ${score} з ${quizData.length}`;
});

loadQuiz();
