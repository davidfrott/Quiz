let currentQuestion = 0;
let score = 0;
let time = 15;
let timer;

function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function showScreen(screenId) {
    playSound('click-sound');
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
    if (screenId === 'ranking-screen') updateRanking();
}

function startQuiz() {
    playSound('transition-sound');
    currentQuestion = 0;
    score = 0;
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        finishQuiz();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    q.answers.forEach((a, i) => {
        const btn = document.createElement('button');
        btn.innerText = a;
        btn.onclick = () => checkAnswer(i, btn);
        answersDiv.appendChild(btn);
    });

    document.getElementById('current-score').innerText = score;
    time = 15;
    document.getElementById('time').innerText = time;
    updateProgressBar();
    clearInterval(timer);
    timer = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    document.getElementById('time').innerText = time;
    updateProgressBar();
    if (time <= 0) {
        clearInterval(timer);
        currentQuestion++;
        loadQuestion();
    }
}

function updateProgressBar() {
    const bar = document.getElementById('progress-bar');
    bar.style.width = (time / 15 * 100) + '%';
}

function checkAnswer(selected, selectedBtn) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestion].correct;
    const answersDiv = document.getElementById('answers');

    Array.from(answersDiv.children).forEach((btn, i) => {
        btn.disabled = true;
        if (i === correctIndex) {
            btn.classList.add('correct');
        }
        if (i === selected && i !== correctIndex) {
            btn.classList.add('incorrect');
        }
    });

    if (selected === correctIndex) {
        playSound('correct-sound');
        score += 10;
    } else {
        playSound('wrong-sound');
    }

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

function finishQuiz() {
    playSound('finish-sound');
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    const name = prompt('Digite seu nome:') || 'Anônimo';
    ranking.push({ name, score });
    ranking.sort((a, b) => b.score - a.score);
    localStorage.setItem('ranking', JSON.stringify(ranking.slice(0, 10)));
    showScreen('ranking-screen');
    updateRanking();
}

function updateRanking() {
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    const list = document.getElementById('ranking-list');
    list.innerHTML = '';
    ranking.forEach(player => {
        const li = document.createElement('li');
        li.innerText = `${player.name} - ${player.score} pontos`;
        list.appendChild(li);
    });
}

showScreen('start-screen');
