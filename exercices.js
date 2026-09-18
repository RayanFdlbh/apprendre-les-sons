// =====================================================
// EXERCICES — RECONNAISSANCE DES SONS
// =====================================================


// =====================================================
// LISTE DES GRAPHIES ET DE LEURS SONS
// =====================================================

const sounds = [

    { label: "O", audio: "o.mp3" },
    { label: "AU", audio: "o.mp3" },
    { label: "EAU", audio: "o.mp3" },

    { label: "OU", audio: "ou.mp3" },

    { label: "AN", audio: "an.mp3" },
    { label: "EN", audio: "an.mp3" },

    { label: "ON", audio: "on.mp3" },

    { label: "IN", audio: "in.mp3" },
    { label: "AIN", audio: "in.mp3" },
    { label: "EIN", audio: "in.mp3" },

    { label: "OI", audio: "oi.mp3" },
    { label: "OIN", audio: "oin.mp3" },
    { label: "UI", audio: "ui.mp3" },

    { label: "É", audio: "e-ferme.mp3" },
    { label: "ER", audio: "e-ferme.mp3" },
    { label: "EZ", audio: "e-ferme.mp3" },

    { label: "È", audio: "e-ouvert.mp3" },
    { label: "Ê", audio: "e-ouvert.mp3" },
    { label: "AI", audio: "e-ouvert.mp3" },
    { label: "EI", audio: "e-ouvert.mp3" },

    { label: "EU", audio: "eu.mp3" },
    { label: "ŒU", audio: "oeu.mp3" },

    { label: "CH", audio: "ch.mp3" },
    { label: "GN", audio: "gn.mp3" },

    { label: "F", audio: "f.mp3" },
    { label: "PH", audio: "f.mp3" },

    { label: "K", audio: "k.mp3" },
    { label: "C", audio: "k.mp3" },
    { label: "QU", audio: "k.mp3" },

    { label: "S", audio: "s.mp3" },
    { label: "SS", audio: "s.mp3" },
    { label: "Ç", audio: "s.mp3" },

    { label: "Z", audio: "z.mp3" },

    { label: "J", audio: "j.mp3" },
    { label: "G", audio: "j.mp3" },

    { label: "GU", audio: "g.mp3" }

];


// =====================================================
// CONFIGURATION
// =====================================================

const TOTAL_QUESTIONS = 10;


// =====================================================
// ÉLÉMENTS HTML
// =====================================================

const questionNumber =
    document.querySelector("#questionNumber");

const scoreElement =
    document.querySelector("#score");

const progressBar =
    document.querySelector("#progressBar");

const targetSound =
    document.querySelector("#targetSound");

const answersContainer =
    document.querySelector("#answersContainer");

const confirmButton =
    document.querySelector("#confirmButton");

const feedback =
    document.querySelector("#feedback");

const quizScreen =
    document.querySelector("#quizScreen");

const resultScreen =
    document.querySelector("#resultScreen");

const finalScore =
    document.querySelector("#finalScore");

const restartButton =
    document.querySelector("#restartButton");


// =====================================================
// ÉTAT
// =====================================================

let currentQuestion = 0;

let correctAnswers = 0;

let mistakes = 0;

let currentSound = null;

let currentChoices = [];

let selectedChoice = null;

let selectedButton = null;

let questionLocked = false;

let currentAudio = null;

let previousSoundLabel = null;

let currentQuestionHadMistake = false;


// =====================================================
// MÉLANGER
// =====================================================

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[randomIndex]
        ] = [
            copy[randomIndex],
            copy[i]
        ];

    }

    return copy;

}


// =====================================================
// CHOISIR UNE QUESTION
// =====================================================

function getRandomSound() {

    const availableSounds =
        sounds.filter(
            sound =>
                sound.label !== previousSoundLabel
        );


    const randomIndex =
        Math.floor(
            Math.random() *
            availableSounds.length
        );


    const selectedSound =
        availableSounds[randomIndex];


    previousSoundLabel =
        selectedSound.label;


    return selectedSound;

}


// =====================================================
// CHOISIR LES 2 MAUVAIS SONS
// =====================================================

function getWrongChoices(correctSound) {

    const possibleWrongAnswers =
        shuffle(
            sounds.filter(
                sound =>
                    sound.label !== correctSound.label &&
                    sound.audio !== correctSound.audio
            )
        );


    const selected = [];

    const usedAudios =
        new Set();


    for (const sound of possibleWrongAnswers) {

        if (!usedAudios.has(sound.audio)) {

            selected.push(sound);

            usedAudios.add(sound.audio);

        }


        if (selected.length === 2) {
            break;
        }

    }


    return selected;

}


// =====================================================
// GÉNÉRER UNE QUESTION
// =====================================================

function generateQuestion() {

    questionLocked = false;

    currentQuestionHadMistake = false;

    selectedChoice = null;

    selectedButton = null;

    confirmButton.disabled = true;

    stopCurrentAudio();


    // On efface complètement le feedback précédent

    feedback.textContent = "";

    feedback.classList.remove(
        "correct",
        "wrong",
        "show"
    );


    currentSound =
        getRandomSound();


    const wrongChoices =
        getWrongChoices(
            currentSound
        );


    currentChoices =
        shuffle([
            currentSound,
            ...wrongChoices
        ]);


    targetSound.textContent =
        currentSound.label;


    renderChoices();

    updateInterface();

}


// =====================================================
// AFFICHER LES 3 BOUTONS AUDIO
// =====================================================

function renderChoices() {

    answersContainer.innerHTML = "";


    currentChoices.forEach(choice => {

        const button =
            document.createElement("button");


        button.className =
            "answer-card";


        button.type =
            "button";


        button.innerHTML = `

            <span
                class="answer-audio"
                aria-hidden="true"
            >
                🔊
            </span>

        `;


        const audioIcon =
            button.querySelector(
                ".answer-audio"
            );


        // =============================================
        // CLIC SUR LA CARTE
        // =============================================

        button.addEventListener(
            "click",
            () => {

                if (questionLocked) {
                    return;
                }


                // =====================================
                // RECLIC SUR LA MÊME CARTE
                // → DÉSÉLECTION
                // =====================================

                if (selectedButton === button) {

                    button.classList.remove(
                        "selected"
                    );


                    selectedChoice = null;

                    selectedButton = null;


                    confirmButton.disabled = true;


                    stopCurrentAudio();


                    return;
                }


                // =====================================
                // RETIRER L'ANCIENNE SÉLECTION
                // =====================================

                document
                    .querySelectorAll(
                        ".answer-card.selected"
                    )
                    .forEach(card => {

                        card.classList.remove(
                            "selected"
                        );

                    });


                // =====================================
                // SÉLECTIONNER LA NOUVELLE CARTE
                // =====================================

                selectedChoice = choice;

                selectedButton = button;


                button.classList.add(
                    "selected"
                );


                // =====================================
                // ACTIVER LE BOUTON ✓
                // =====================================

                confirmButton.disabled = false;


                // =====================================
                // JOUER AUTOMATIQUEMENT LE SON
                // =====================================

                playSound(
                    choice.audio,
                    audioIcon
                );

            }
        );


        answersContainer.appendChild(
            button
        );

    });

}


// =====================================================
// BOUTON ✓
// =====================================================

confirmButton.addEventListener(
    "click",
    () => {

        if (
            !selectedChoice ||
            !selectedButton ||
            questionLocked
        ) {
            return;
        }


        checkAnswer(
            selectedChoice,
            selectedButton
        );

    }
);


// =====================================================
// AUDIO
// =====================================================

function stopCurrentAudio() {

    if (currentAudio) {

        currentAudio.pause();

        currentAudio.currentTime = 0;

        currentAudio = null;

    }


    document
        .querySelectorAll(
            ".answer-audio.playing"
        )
        .forEach(element => {

            element.classList.remove(
                "playing"
            );

        });

}


function playSound(
    audioFile,
    button
) {

    stopCurrentAudio();


    currentAudio =
        new Audio(
            `assets/audio/${audioFile}`
        );


    button.classList.add(
        "playing"
    );


    currentAudio
        .play()
        .catch(error => {

            console.error(
                "Impossible de lire l'audio :",
                audioFile,
                error
            );


            button.classList.remove(
                "playing"
            );


            currentAudio = null;

        });


    currentAudio.addEventListener(
        "ended",
        () => {

            button.classList.remove(
                "playing"
            );


            currentAudio = null;

        }
    );

}


// =====================================================
// VÉRIFIER LA RÉPONSE
// =====================================================

function checkAnswer(
    choice,
    button
) {

    if (questionLocked) {
        return;
    }


    const isCorrect =
        choice.label ===
        currentSound.label;


    // =================================================
    // BONNE RÉPONSE
    // =================================================

    if (isCorrect) {

        questionLocked = true;

        confirmButton.disabled = true;


        button.classList.remove(
            "selected"
        );


        button.classList.add(
            "correct"
        );


        if (!currentQuestionHadMistake) {

            correctAnswers++;

        }


        // =============================================
        // PETIT ✓ SUR LA CARTE
        // =============================================

        const status =
            document.createElement(
                "span"
            );


        status.className =
            "answer-status";


        status.textContent =
            "✓";


        button.appendChild(
            status
        );


        // =============================================
        // FEEDBACK VISUEL ✓
        // =============================================

        feedback.textContent = "✓";


        feedback.classList.remove(
            "wrong"
        );


        feedback.classList.add(
            "correct",
            "show"
        );


        // Bloquer les cartes

        const allButtons =
            answersContainer.querySelectorAll(
                ".answer-card"
            );


        allButtons.forEach(card => {

            card.classList.add(
                "disabled"
            );

        });


        if (navigator.vibrate) {

            navigator.vibrate(40);

        }


        updateInterface();


        // =============================================
        // QUESTION SUIVANTE
        // =============================================

        setTimeout(() => {

            currentQuestion++;


            if (
                currentQuestion >=
                TOTAL_QUESTIONS
            ) {

                showResults();

            } else {

                generateQuestion();

            }

        }, 1000);

    }


    // =================================================
    // MAUVAISE RÉPONSE
    // =================================================

    else {

        mistakes++;

        currentQuestionHadMistake =
            true;


        // =============================================
        // RETIRER LA SÉLECTION VERTE
        // =============================================

        button.classList.remove(
            "selected"
        );


        // =============================================
        // CARTE ROUGE
        // =============================================

        button.classList.add(
            "wrong"
        );


        // =============================================
        // UNIQUEMENT UNE CROIX ROUGE
        // AUCUN TEXTE
        // =============================================

        feedback.textContent = "✕";


        feedback.classList.remove(
            "correct"
        );


        feedback.classList.add(
            "wrong",
            "show"
        );


        // =============================================
        // RÉINITIALISER LA SÉLECTION
        // =============================================

        selectedChoice = null;

        selectedButton = null;

        confirmButton.disabled = true;


        if (navigator.vibrate) {

            navigator.vibrate([
                60,
                40,
                60
            ]);

        }


        // =============================================
        // APRÈS 700 MS :
        // - retirer le rouge de la carte
        // - retirer la croix
        // - permettre un nouvel essai
        // =============================================

        setTimeout(() => {

            button.classList.remove(
                "wrong"
            );


            feedback.textContent = "";


            feedback.classList.remove(
                "wrong",
                "show"
            );

        }, 700);

    }

}


// =====================================================
// INTERFACE
// =====================================================

function updateInterface() {

    const displayedQuestion =
        Math.min(
            currentQuestion + 1,
            TOTAL_QUESTIONS
        );


    questionNumber.textContent =
        `${displayedQuestion} / ${TOTAL_QUESTIONS}`;


    scoreElement.textContent =
        `${correctAnswers} ✓`;


    const progress =
        (
            currentQuestion /
            TOTAL_QUESTIONS
        ) * 100;


    progressBar.style.width =
        `${progress}%`;

}


// =====================================================
// RÉSULTATS
// =====================================================

function showResults() {

    stopCurrentAudio();


    progressBar.style.width =
        "100%";


    quizScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.add(
        "visible"
    );


    finalScore.textContent =
        `${correctAnswers} / ${TOTAL_QUESTIONS}`;

}


// =====================================================
// RECOMMENCER
// =====================================================

function restartQuiz() {

    currentQuestion = 0;

    correctAnswers = 0;

    mistakes = 0;

    currentSound = null;

    currentChoices = [];

    selectedChoice = null;

    selectedButton = null;

    questionLocked = false;

    currentAudio = null;

    previousSoundLabel = null;

    currentQuestionHadMistake = false;


    resultScreen.classList.remove(
        "visible"
    );


    quizScreen.classList.remove(
        "hidden"
    );


    generateQuestion();

}


// =====================================================
// BOUTON RECOMMENCER
// =====================================================

restartButton.addEventListener(
    "click",
    restartQuiz
);


// =====================================================
// DÉMARRAGE
// =====================================================

generateQuestion();