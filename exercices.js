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
// EXEMPLES IMAGE + MOT + AUDIO
// APRÈS UNE BONNE RÉPONSE
// =====================================================

const examples = {

    "O": {
        wordHTML: "M<span>O</span>T",
        image: "mot.png",
        audio: "mot.mp3"
    },

    "AU": {
        wordHTML: "<span>AU</span>TO",
        image: "auto.png",
        audio: "auto.mp3"
    },

    "EAU": {
        wordHTML: "<span>EAU</span>",
        image: "eau.png",
        audio: "mot-eau.mp3"
    },

    "OU": {
        wordHTML: "L<span>OU</span>P",
        image: "loup.png",
        audio: "loup.mp3"
    },

    "AN": {
        wordHTML: "G<span>AN</span>T",
        image: "gant.png",
        audio: "gant.mp3"
    },

    "EN": {
        wordHTML: "D<span>EN</span>T",
        image: "dent.png",
        audio: "dent.mp3"
    },

    "ON": {
        wordHTML: "P<span>ON</span>T",
        image: "pont.png",
        audio: "pont.mp3"
    },

    "IN": {
        wordHTML: "LAP<span>IN</span>",
        image: "lapin.png",
        audio: "lapin.mp3"
    },

    "AIN": {
        wordHTML: "M<span>AIN</span>",
        image: "main.png",
        audio: "main.mp3"
    },

    "EIN": {
        wordHTML: "P<span>EIN</span>T",
        image: "peint.png",
        audio: "peint.mp3"
    },

    "OI": {
        wordHTML: "<span>OI</span>E",
        image: "oie.png",
        audio: "oie.mp3"
    },

    "OIN": {
        wordHTML: "C<span>OIN</span>",
        image: "coin.png",
        audio: "coin.mp3"
    },

    "UI": {
        wordHTML: "N<span>UI</span>T",
        image: "nuit.png",
        audio: "nuit.mp3"
    },

    "É": {
        wordHTML: "D<span>É</span>",
        image: "de.png",
        audio: "de.mp3"
    },

    "ER": {
        wordHTML: "PAPI<span>ER</span>",
        image: "papier.png",
        audio: "papier.mp3"
    },

    "EZ": {
        wordHTML: "N<span>EZ</span>",
        image: "nez.png",
        audio: "nez.mp3"
    },

    "È": {
        wordHTML: "P<span>È</span>RE",
        image: "pere.png",
        audio: "pere.mp3"
    },

    "Ê": {
        wordHTML: "T<span>Ê</span>TE",
        image: "tete.png",
        audio: "tete.mp3"
    },

    "AI": {
        wordHTML: "L<span>AI</span>T",
        image: "lait.png",
        audio: "lait.mp3"
    },

    "EI": {
        wordHTML: "N<span>EI</span>GE",
        image: "neige.png",
        audio: "neige.mp3"
    },

    "EU": {
        wordHTML: "F<span>EU</span>",
        image: "feu.png",
        audio: "feu.mp3"
    },

    "ŒU": {
        wordHTML: "<span>ŒU</span>F",
        image: "oeuf.png",
        audio: "oeuf.mp3"
    },

    "CH": {
        wordHTML: "<span>CH</span>AT",
        image: "chat.png",
        audio: "chat.mp3"
    },

    "GN": {
        wordHTML: "A<span>GN</span>EAU",
        image: "agneau.png",
        audio: "agneau.mp3"
    },

    "F": {
        wordHTML: "<span>F</span>OUR",
        image: "four.png",
        audio: "four.mp3"
    },

    "PH": {
        wordHTML: "<span>PH</span>OTO",
        image: "photo.png",
        audio: "photo.mp3"
    },

    "K": {
        wordHTML: "<span>K</span>IWI",
        image: "kiwi.png",
        audio: "kiwi.mp3"
    },

    "C": {
        wordHTML: "<span>C</span>OLLE",
        image: "colle.png",
        audio: "colle.mp3"
    },

    "QU": {
        wordHTML: "<span>QU</span>ATRE",
        image: "quatre.png",
        audio: "quatre.mp3"
    },

    "S": {
        wordHTML: "<span>S</span>AC",
        image: "sac.png",
        audio: "sac.mp3"
    },

    "SS": {
        wordHTML: "TA<span>SS</span>E",
        image: "tasse.png",
        audio: "tasse.mp3"
    },

    "Ç": {
        wordHTML: "GAR<span>Ç</span>ON",
        image: "garcon.png",
        audio: "garcon.mp3"
    },

    "Z": {
        wordHTML: "<span>Z</span>OO",
        image: "zoo.png",
        audio: "zoo.mp3"
    },

    "J": {
        wordHTML: "<span>J</span>UPE",
        image: "jupe.png",
        audio: "jupe.mp3"
    },

    "G": {
        wordHTML: "<span>G</span>ILET",
        image: "gilet.png",
        audio: "gilet.mp3"
    },

    "GU": {
        wordHTML: "BA<span>GU</span>E",
        image: "bague.png",
        audio: "bague.mp3"
    }

};


// =====================================================
// CONFIGURATION
// =====================================================

const TOTAL_QUESTIONS = 10;

// Temps d'affichage du mot après une bonne réponse
const EXAMPLE_DISPLAY_TIME = 3000;


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


    // Supprimer une éventuelle ancienne carte exemple

    removeExampleCard();


    // Effacer le feedback précédent

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
// AUDIO DES CHOIX
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


// =====================================================
// JOUER LE SON D'UNE RÉPONSE
// =====================================================

function playSound(
    audioFile,
    button
) {

    stopCurrentAudio();


    currentAudio =
        new Audio(
            `assets/audio/${audioFile}`
        );


    if (button) {

        button.classList.add(
            "playing"
        );

    }


    currentAudio
        .play()
        .catch(error => {

            console.error(
                "Impossible de lire l'audio :",
                audioFile,
                error
            );


            if (button) {

                button.classList.remove(
                    "playing"
                );

            }


            currentAudio = null;

        });


    currentAudio.addEventListener(
        "ended",
        () => {

            if (button) {

                button.classList.remove(
                    "playing"
                );

            }


            currentAudio = null;

        }
    );

}


// =====================================================
// JOUER AUTOMATIQUEMENT LE MOT
// =====================================================

function playExampleWord(audioFile) {

    stopCurrentAudio();


    currentAudio =
        new Audio(
            `assets/audio/${audioFile}`
        );


    currentAudio
        .play()
        .catch(error => {

            console.error(
                "Impossible de lire le mot :",
                audioFile,
                error
            );

            currentAudio = null;

        });


    currentAudio.addEventListener(
        "ended",
        () => {

            currentAudio = null;

        }
    );

}


// =====================================================
// SUPPRIMER LA CARTE EXEMPLE
// =====================================================

function removeExampleCard() {

    const oldCard =
        document.querySelector(
            ".exercise-example-overlay"
        );


    if (oldCard) {

        oldCard.remove();

    }

}


// =====================================================
// AFFICHER IMAGE + MOT PENDANT 3 SECONDES
// =====================================================

function showExampleCard(soundLabel) {

    const example =
        examples[soundLabel];


    if (!example) {

        console.warn(
            "Aucun exemple trouvé pour :",
            soundLabel
        );

        return;
    }


    removeExampleCard();


    // =================================================
    // CRÉATION DE L'OVERLAY
    // =================================================

    const overlay =
        document.createElement("div");


    overlay.className =
        "exercise-example-overlay";


    // =================================================
    // STYLE DE L'OVERLAY
    // Directement ici pour ne pas modifier le CSS
    // =================================================

    Object.assign(
        overlay.style,
        {
            position: "fixed",
            inset: "0",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(245, 247, 251, 0.94)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            opacity: "0",
            transition: "opacity 0.25s ease"
        }
    );


    // =================================================
    // CARTE BLANCHE
    // =================================================

    const card =
        document.createElement("div");


    card.className =
        "exercise-example-card";


    Object.assign(
        card.style,
        {
            width: "min(360px, 90vw)",
            minHeight: "390px",
            background: "#ffffff",
            borderRadius: "32px",
            padding: "28px 24px",
            boxShadow:
                "0 20px 60px rgba(20, 30, 70, 0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            transform: "scale(0.82) translateY(20px)",
            opacity: "0",
            transition:
                "transform 0.35s cubic-bezier(.2,.8,.2,1), opacity 0.35s ease"
        }
    );


    // =================================================
    // ✓
    // =================================================

    const check =
        document.createElement("div");


    check.textContent = "✓";


    Object.assign(
        check.style,
        {
            width: "62px",
            height: "62px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#e9f8f0",
            color: "#22a866",
            fontSize: "36px",
            fontWeight: "900"
        }
    );


    // =================================================
    // IMAGE
    // =================================================

    const image =
        document.createElement("img");


    image.src =
        `assets/images/${example.image}`;


    image.alt =
        example.wordHTML.replace(
            /<[^>]*>/g,
            ""
        );


    Object.assign(
        image.style,
        {
            width: "180px",
            height: "180px",
            objectFit: "contain",
            display: "block"
        }
    );


    // =================================================
    // MOT
    // =================================================

    const word =
        document.createElement("div");


    word.innerHTML =
        example.wordHTML;


    Object.assign(
        word.style,
        {
            fontSize: "42px",
            lineHeight: "1",
            fontWeight: "900",
            letterSpacing: "2px",
            color: "#22283d",
            textAlign: "center"
        }
    );


    // Mettre la graphie étudiée en vert

    word
        .querySelectorAll("span")
        .forEach(span => {

            span.style.color =
                "#22a866";

        });


    // =================================================
    // PETIT BOUTON AUDIO
    // =================================================

    const audioButton =
        document.createElement("button");


    audioButton.type =
        "button";


    audioButton.textContent =
        "🔊";


    audioButton.setAttribute(
        "aria-label",
        "Réécouter le mot"
    );


    Object.assign(
        audioButton.style,
        {
            width: "64px",
            height: "64px",
            border: "none",
            borderRadius: "20px",
            background: "#eef0ff",
            fontSize: "28px",
            cursor: "pointer"
        }
    );


    audioButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            playExampleWord(
                example.audio
            );

        }
    );


    // =================================================
    // ASSEMBLAGE
    // =================================================

    card.appendChild(check);

    card.appendChild(image);

    card.appendChild(word);

    card.appendChild(audioButton);


    overlay.appendChild(card);


    document.body.appendChild(
        overlay
    );


    // =================================================
    // ANIMATION D'ENTRÉE
    // =================================================

    requestAnimationFrame(() => {

        overlay.style.opacity =
            "1";


        card.style.opacity =
            "1";


        card.style.transform =
            "scale(1) translateY(0)";

    });


    // =================================================
    // PRONONCER AUTOMATIQUEMENT LE MOT
    // =================================================

    setTimeout(() => {

        playExampleWord(
            example.audio
        );

    }, 250);

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


        stopCurrentAudio();


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

        feedback.textContent =
            "✓";


        feedback.classList.remove(
            "wrong"
        );


        feedback.classList.add(
            "correct",
            "show"
        );


        // =============================================
        // BLOQUER LES CARTES
        // =============================================

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
        // PETITE PAUSE POUR VOIR LA BONNE RÉPONSE
        // =============================================

        setTimeout(() => {

            // =========================================
            // IMAGE + MOT + AUDIO
            // =========================================

            showExampleCard(
                currentSound.label
            );


            // =========================================
            // LE MOT RESTE EXACTEMENT 3 SECONDES
            // =========================================

            setTimeout(() => {

                removeExampleCard();

                stopCurrentAudio();


                currentQuestion++;


                if (
                    currentQuestion >=
                    TOTAL_QUESTIONS
                ) {

                    showResults();

                } else {

                    generateQuestion();

                }

            }, EXAMPLE_DISPLAY_TIME);

        }, 500);

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
        // =============================================

        feedback.textContent =
            "✕";


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
        // RETIRER LE ROUGE ET LA CROIX
        // =============================================

        setTimeout(() => {

            button.classList.remove(
                "wrong"
            );


            feedback.textContent =
                "";


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

    removeExampleCard();


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

    stopCurrentAudio();

    removeExampleCard();


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