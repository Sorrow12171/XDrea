// Datos de ejemplo para la aplicación
const mangaData = [
    {
        id: 1,
        title: "One Piece",
        cover: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        decks: [
            { id: 1, title: "Vocabulario Básico", cardCount: 20 },
            { id: 2, title: "Frases Comunes", cardCount: 15 },
            { id: 3, title: "Personajes", cardCount: 10 },
            { id: 4, title: "Expresiones Útiles", cardCount: 12 }
        ]
    },
    {
        id: 2,
        title: "Naruto",
        cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        decks: [
            { id: 1, title: "Vocabulario Básico", cardCount: 18 },
            { id: 2, title: "Técnicas Ninja", cardCount: 12 },
            { id: 3, title: "Diálogos", cardCount: 16 }
        ]
    },
    {
        id: 3,
        title: "Attack on Titan",
        cover: "https://images.unsplash.com/photo-1632266484289-68e6c9e30c16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        decks: [
            { id: 1, title: "Vocabulario Militar", cardCount: 15 },
            { id: 2, title: "Titanes", cardCount: 10 },
            { id: 3, title: "Frases Épicas", cardCount: 12 }
        ]
    },
    {
        id: 4,
        title: "My Hero Academia",
        cover: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        decks: [
            { id: 1, title: "Vocabulario de Héroes", cardCount: 15 },
            { id: 2, title: "Quirks", cardCount: 10 },
            { id: 3, title: "Frases Motivacionales", cardCount: 12 }
        ]
    }
];

// Datos de flashcards para cada mazo
const flashcardData = {
    "1-1": [ // One Piece - Vocabulario Básico
        { question: "Pirata", correctAnswer: "Pirate", wrongAnswers: ["Ninja", "Samurai", "Hero"] },
        { question: "Tesoro", correctAnswer: "Treasure", wrongAnswers: ["Weapon", "Food", "Map"] },
        { question: "Barco", correctAnswer: "Ship", wrongAnswers: ["Car", "Plane", "Train"] },
        { question: "Isla", correctAnswer: "Island", wrongAnswers: ["Mountain", "City", "Forest"] },
        { question: "Capitán", correctAnswer: "Captain", wrongAnswers: ["Soldier", "Doctor", "Cook"] },
        { question: "Aventura", correctAnswer: "Adventure", wrongAnswers: ["Mission", "Journey", "Quest"] },
        { question: "Amigo", correctAnswer: "Friend", wrongAnswers: ["Enemy", "Stranger", "Ally"] },
        { question: "Lucha", correctAnswer: "Fight", wrongAnswers: ["Game", "Battle", "War"] },
        { question: "Mar", correctAnswer: "Sea", wrongAnswers: ["Ocean", "Lake", "River"] },
        { question: "Sueño", correctAnswer: "Dream", wrongAnswers: ["Goal", "Wish", "Hope"] }
    ],
    "1-2": [ // One Piece - Frases Comunes
        { question: "¡Seré el Rey de los Piratas!", correctAnswer: "I will be the Pirate King!", wrongAnswers: ["I want to be a hero", "I will find the treasure", "I am the strongest"] },
        { question: "¿Dónde está el One Piece?", correctAnswer: "Where is the One Piece?", wrongAnswers: ["What is the treasure?", "Who is the king?", "When will we arrive?"] },
        { question: "Necesito un barco más fuerte", correctAnswer: "I need a stronger ship", wrongAnswers: ["I want a bigger boat", "I need more crew", "I want better weapons"] },
        { question: "Mi tripulación es mi familia", correctAnswer: "My crew is my family", wrongAnswers: ["My friends are important", "I trust my team", "We are together"] }
    ],
    "2-1": [ // Naruto - Vocabulario Básico
        { question: "Ninja", correctAnswer: "Ninja", wrongAnswers: ["Pirate", "Samurai", "Hero"] },
        { question: "Aldea", correctAnswer: "Village", wrongAnswers: ["City", "Island", "Country"] },
        { question: "Misión", correctAnswer: "Mission", wrongAnswers: ["Journey", "Battle", "Training"] },
        { question: "Chakra", correctAnswer: "Chakra", wrongAnswers: ["Energy", "Power", "Spirit"] },
        { question: "Jutsu", correctAnswer: "Jutsu", wrongAnswers: ["Technique", "Skill", "Ability"] },
        { question: "Hokage", correctAnswer: "Hokage", wrongAnswers: ["Leader", "Master", "Chief"] },
        { question: "Kunai", correctAnswer: "Kunai", wrongAnswers: ["Knife", "Sword", "Dagger"] },
        { question: "Shinobi", correctAnswer: "Shinobi", wrongAnswers: ["Warrior", "Fighter", "Soldier"] }
    ],
    "2-2": [ // Naruto - Técnicas Ninja
        { question: "Rasengan", correctAnswer: "Rasengan", wrongAnswers: ["Kamehameha", "Hadouken", "Spiral Ball"] },
        { question: "Chidori", correctAnswer: "Chidori", wrongAnswers: ["Lightning Blade", "Thunder Jutsu", "Electric Strike"] },
        { question: "Kage Bunshin", correctAnswer: "Shadow Clone", wrongAnswers: ["Double Image", "Mirror Clone", "Copy Technique"] }
    ],
    "3-1": [ // Attack on Titan - Vocabulario Militar
        { question: "Titán", correctAnswer: "Titan", wrongAnswers: ["Giant", "Monster", "Demon"] },
        { question: "Muro", correctAnswer: "Wall", wrongAnswers: ["Barrier", "Fence", "Border"] },
        { question: "Equipo de Maniobras", correctAnswer: "Omni-Directional Mobility Gear", wrongAnswers: ["Flying Gear", "Battle Equipment", "Movement Device"] },
        { question: "Legión de Reconocimiento", correctAnswer: "Scout Regiment", wrongAnswers: ["Exploration Team", "Recon Squad", "Survey Corps"] }
    ],
    "4-1": [ // My Hero Academia - Vocabulario de Héroes
        { question: "Héroe", correctAnswer: "Hero", wrongAnswers: ["Savior", "Champion", "Protector"] },
        { question: "Villano", correctAnswer: "Villain", wrongAnswers: ["Enemy", "Criminal", "Opponent"] },
        { question: "Quirk", correctAnswer: "Quirk", wrongAnswers: ["Power", "Ability", "Talent"] },
        { question: "UA High School", correctAnswer: "UA High School", wrongAnswers: ["Hero Academy", "Super School", "Power Institute"] }
    ]
};

// Variables de estado
let currentManga = null;
let currentDeck = null;
let currentCardIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let currentDeckData = [];

// Elementos del DOM
const mangaSelectionSection = document.getElementById('manga-selection');
const deckSelectionSection = document.getElementById('deck-selection');
const flashcardStudySection = document.getElementById('flashcard-study');
const mangaGrid = document.getElementById('manga-grid');
const deckGrid = document.getElementById('deck-grid');
const mangaTitleElement = document.getElementById('manga-title');
const deckTitleElement = document.getElementById('deck-title');
const flashcardElement = document.getElementById('flashcard');
const optionsGrid = document.getElementById('options-grid');
const resultMessage = document.getElementById('result-message');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');

// Botones de navegación
document.getElementById('back-to-manga').addEventListener('click', showMangaSelection);
document.getElementById('back-to-decks').addEventListener('click', showDeckSelection);

// Inicializar la aplicación
function init() {
    renderMangaGrid();
    showMangaSelection();
}

// Renderizar la cuadrícula de mangas
function renderMangaGrid() {
    mangaGrid.innerHTML = '';
    mangaData.forEach(manga => {
        const mangaCard = document.createElement('div');
        mangaCard.className = 'manga-card';
        mangaCard.innerHTML = `
            <img src="${manga.cover}" alt="${manga.title}" class="manga-cover">
            <div class="manga-title">${manga.title}</div>
        `;
        mangaCard.addEventListener('click', () => showDeckSelectionForManga(manga));
        mangaGrid.appendChild(mangaCard);
    });
}

// Mostrar la selección de mangas
function showMangaSelection() {
    mangaSelectionSection.style.display = 'block';
    deckSelectionSection.style.display = 'none';
    flashcardStudySection.style.display = 'none';
}

// Mostrar la selección de mazos para un manga específico
function showDeckSelectionForManga(manga) {
    currentManga = manga;
    mangaTitleElement.textContent = `Mazos de ${manga.title}`;
    
    // Renderizar los mazos
    deckGrid.innerHTML = '';
    manga.decks.forEach(deck => {
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.innerHTML = `
            <div class="deck-title">${deck.title}</div>
            <div class="deck-info">${deck.cardCount} tarjetas</div>
        `;
        deckCard.addEventListener('click', () => startDeckStudy(deck));
        deckGrid.appendChild(deckCard);
    });
    
    mangaSelectionSection.style.display = 'none';
    deckSelectionSection.style.display = 'block';
    flashcardStudySection.style.display = 'none';
}

// Mostrar la selección de mazos (desde el botón de volver)
function showDeckSelection() {
    if (currentManga) {
        showDeckSelectionForManga(currentManga);
    }
}

// Comenzar a estudiar un mazo específico
function startDeckStudy(deck) {
    currentDeck = deck;
    deckTitleElement.textContent = `Estudiando: ${deck.title}`;
    
    // Obtener las flashcards para este mazo
    const deckKey = `${currentManga.id}-${deck.id}`;
    currentDeckData = flashcardData[deckKey] || [];
    
    // Reiniciar estadísticas
    currentCardIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    updateStats();
    
    // Mostrar la primera tarjeta
    showCurrentCard();
    
    deckSelectionSection.style.display = 'none';
    flashcardStudySection.style.display = 'block';
}

// Mostrar la tarjeta actual
function showCurrentCard() {
    if (currentCardIndex >= currentDeckData.length) {
        // Todas las tarjetas completadas
        showCompletionMessage();
        return;
    }
    
    const card = currentDeckData[currentCardIndex];
    flashcardElement.textContent = card.question;
    resultMessage.textContent = '';
    
    // Crear opciones (mezcladas)
    const allAnswers = [card.correctAnswer, ...card.wrongAnswers];
    shuffleArray(allAnswers);
    
    optionsGrid.innerHTML = '';
    allAnswers.forEach(answer => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option';
        optionButton.textContent = answer;
        optionButton.addEventListener('click', () => checkAnswer(answer, card.correctAnswer));
        optionsGrid.appendChild(optionButton);
    });
    
    // Actualizar barra de progreso
    const progress = ((currentCardIndex) / currentDeckData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentCardIndex}/${currentDeckData.length}`;
}

// Verificar la respuesta seleccionada
function checkAnswer(selectedAnswer, correctAnswer) {
    const optionButtons = document.querySelectorAll('.option');
    
    // Deshabilitar todos los botones
    optionButtons.forEach(button => {
        button.disabled = true;
        
        // Resaltar la respuesta correcta e incorrecta
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    
    // Mostrar mensaje de resultado
    if (selectedAnswer === correctAnswer) {
        resultMessage.textContent = '¡Correcto!';
        resultMessage.style.color = '#4CAF50';
        correctAnswers++;
    } else {
        resultMessage.textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
        resultMessage.style.color = '#f44336';
        incorrectAnswers++;
    }
    
    updateStats();
    
    // Avanzar a la siguiente tarjeta después de un breve retraso
    setTimeout(() => {
        currentCardIndex++;
        showCurrentCard();
    }, 2000);
}

// Mostrar mensaje de finalización
function showCompletionMessage() {
    flashcardElement.innerHTML = `
        <div style="text-align: center;">
            <h3>¡Mazo Completado!</h3>
            <p>Respuestas correctas: ${correctAnswers}</p>
            <p>Respuestas incorrectas: ${incorrectAnswers}</p>
            <button class="option" style="margin-top: 20px;" onclick="showDeckSelection()">Volver a Mazos</button>
        </div>
    `;
    optionsGrid.innerHTML = '';
    resultMessage.textContent = '';
    
    // Completar la barra de progreso
    progressBar.style.width = '100%';
    progressText.textContent = `${currentDeckData.length}/${currentDeckData.length}`;
}

// Actualizar estadísticas
function updateStats() {
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;
}

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar la aplicación cuando se carga la página
window.addEventListener('DOMContentLoaded', init);
