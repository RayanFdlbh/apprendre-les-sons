// =====================================================
// DONNÉES DES COURS
// =====================================================

const lessons = [

    {
        sound: "O",
        family: "O • AU • EAU",
        soundAudio: "o.mp3",
        image: "mot.png",
        wordHTML: "M<span>O</span>T",
        wordAudio: "mot.mp3"
    },

    {
        sound: "AU",
        family: "O • AU • EAU",
        soundAudio: "o.mp3",
        image: "auto.png",
        wordHTML: "<span>AU</span>TO",
        wordAudio: "auto.mp3"
    },

    {
        sound: "EAU",
        family: "O • AU • EAU",
        soundAudio: "o.mp3",
        image: "eau.png",
        wordHTML: "<span>EAU</span>",
        wordAudio: "mot-eau.mp3"
    },

    {
        sound: "OU",
        family: "OU",
        soundAudio: "ou.mp3",
        image: "loup.png",
        wordHTML: "L<span>OU</span>P",
        wordAudio: "loup.mp3"
    },

    {
        sound: "AN",
        family: "AN • EN",
        soundAudio: "an.mp3",
        image: "gant.png",
        wordHTML: "G<span>AN</span>T",
        wordAudio: "gant.mp3"
    },

    {
        sound: "EN",
        family: "AN • EN",
        soundAudio: "an.mp3",
        image: "dent.png",
        wordHTML: "D<span>EN</span>T",
        wordAudio: "dent.mp3"
    },

    {
        sound: "ON",
        family: "ON",
        soundAudio: "on.mp3",
        image: "pont.png",
        wordHTML: "P<span>ON</span>T",
        wordAudio: "pont.mp3"
    },

    {
        sound: "IN",
        family: "IN • AIN • EIN",
        soundAudio: "in.mp3",
        image: "lapin.png",
        wordHTML: "LAP<span>IN</span>",
        wordAudio: "lapin.mp3"
    },

    {
        sound: "AIN",
        family: "IN • AIN • EIN",
        soundAudio: "in.mp3",
        image: "main.png",
        wordHTML: "M<span>AIN</span>",
        wordAudio: "main.mp3"
    },

    {
        sound: "EIN",
        family: "IN • AIN • EIN",
        soundAudio: "in.mp3",
        image: "peint.png",
        wordHTML: "P<span>EIN</span>T",
        wordAudio: "peint.mp3"
    },

    {
        sound: "OI",
        family: "OI",
        soundAudio: "oi.mp3",
        image: "oie.png",
        wordHTML: "<span>OI</span>E",
        wordAudio: "oie.mp3"
    },

    {
        sound: "OIN",
        family: "OIN",
        soundAudio: "oin.mp3",
        image: "coin.png",
        wordHTML: "C<span>OIN</span>",
        wordAudio: "coin.mp3"
    },

    {
        sound: "UI",
        family: "UI",
        soundAudio: "ui.mp3",
        image: "nuit.png",
        wordHTML: "N<span>UI</span>T",
        wordAudio: "nuit.mp3"
    },

    {
        sound: "É",
        family: "É • ER • EZ",
        soundAudio: "e-ferme.mp3",
        image: "de.png",
        wordHTML: "D<span>É</span>",
        wordAudio: "de.mp3"
    },

    {
        sound: "ER",
        family: "É • ER • EZ",
        soundAudio: "e-ferme.mp3",
        image: "papier.png",
        wordHTML: "PAPI<span>ER</span>",
        wordAudio: "papier.mp3"
    },

    {
        sound: "EZ",
        family: "É • ER • EZ",
        soundAudio: "e-ferme.mp3",
        image: "nez.png",
        wordHTML: "N<span>EZ</span>",
        wordAudio: "nez.mp3"
    },

    {
        sound: "È",
        family: "È • Ê • AI • EI",
        soundAudio: "e-ouvert.mp3",
        image: "pere.png",
        wordHTML: "P<span>È</span>RE",
        wordAudio: "pere.mp3"
    },

    {
        sound: "Ê",
        family: "È • Ê • AI • EI",
        soundAudio: "e-ouvert.mp3",
        image: "tete.png",
        wordHTML: "T<span>Ê</span>TE",
        wordAudio: "tete.mp3"
    },

    {
        sound: "AI",
        family: "È • Ê • AI • EI",
        soundAudio: "e-ouvert.mp3",
        image: "lait.png",
        wordHTML: "L<span>AI</span>T",
        wordAudio: "lait.mp3"
    },

    {
        sound: "EI",
        family: "È • Ê • AI • EI",
        soundAudio: "e-ouvert.mp3",
        image: "neige.png",
        wordHTML: "N<span>EI</span>GE",
        wordAudio: "neige.mp3"
    },

    {
        sound: "EU",
        family: "EU",
        soundAudio: "eu.mp3",
        image: "feu.png",
        wordHTML: "F<span>EU</span>",
        wordAudio: "feu.mp3"
    },

    {
        sound: "ŒU",
        family: "ŒU",
        soundAudio: "oeu.mp3",
        image: "oeuf.png",
        wordHTML: "<span>ŒU</span>F",
        wordAudio: "oeuf.mp3"
    },

    {
        sound: "CH",
        family: "CH",
        soundAudio: "ch.mp3",
        image: "chat.png",
        wordHTML: "<span>CH</span>AT",
        wordAudio: "chat.mp3"
    },

    {
        sound: "GN",
        family: "GN",
        soundAudio: "gn.mp3",
        image: "agneau.png",
        wordHTML: "A<span>GN</span>EAU",
        wordAudio: "agneau.mp3"
    },

    {
        sound: "F",
        family: "F • PH",
        soundAudio: "f.mp3",
        image: "four.png",
        wordHTML: "<span>F</span>OUR",
        wordAudio: "four.mp3"
    },

    {
        sound: "PH",
        family: "F • PH",
        soundAudio: "f.mp3",
        image: "photo.png",
        wordHTML: "<span>PH</span>OTO",
        wordAudio: "photo.mp3"
    },

    {
        sound: "K",
        family: "K • C • QU",
        soundAudio: "k.mp3",
        image: "kiwi.png",
        wordHTML: "<span>K</span>IWI",
        wordAudio: "kiwi.mp3"
    },

    {
        sound: "C",
        family: "K • C • QU",
        soundAudio: "k.mp3",
        image: "colle.png",
        wordHTML: "<span>C</span>OLLE",
        wordAudio: "colle.mp3"
    },

    {
        sound: "QU",
        family: "K • C • QU",
        soundAudio: "k.mp3",
        image: "quatre.png",
        wordHTML: "<span>QU</span>ATRE",
        wordAudio: "quatre.mp3"
    },

    {
        sound: "S",
        family: "S • SS • C • Ç",
        soundAudio: "s.mp3",
        image: "sac.png",
        wordHTML: "<span>S</span>AC",
        wordAudio: "sac.mp3"
    },

    {
        sound: "SS",
        family: "S • SS • C • Ç",
        soundAudio: "s.mp3",
        image: "tasse.png",
        wordHTML: "TA<span>SS</span>E",
        wordAudio: "tasse.mp3"
    },

    {
        sound: "C",
        family: "S • SS • C • Ç",
        soundAudio: "s.mp3",
        image: "citron.png",
        wordHTML: "<span>C</span>ITRON",
        wordAudio: "citron.mp3"
    },

    {
        sound: "Ç",
        family: "S • SS • C • Ç",
        soundAudio: "s.mp3",
        image: "garcon.png",
        wordHTML: "GAR<span>Ç</span>ON",
        wordAudio: "garcon.mp3"
    },

    {
        sound: "Z",
        family: "Z • S",
        soundAudio: "z.mp3",
        image: "zoo.png",
        wordHTML: "<span>Z</span>OO",
        wordAudio: "zoo.mp3"
    },

    {
        sound: "S",
        family: "Z • S",
        soundAudio: "z.mp3",
        image: "rose.png",
        wordHTML: "RO<span>S</span>E",
        wordAudio: "rose.mp3"
    },

    {
        sound: "J",
        family: "J • G",
        soundAudio: "j.mp3",
        image: "jupe.png",
        wordHTML: "<span>J</span>UPE",
        wordAudio: "jupe.mp3"
    },

    {
        sound: "G",
        family: "J • G",
        soundAudio: "j.mp3",
        image: "gilet.png",
        wordHTML: "<span>G</span>ILET",
        wordAudio: "gilet.mp3"
    },

    {
        sound: "G",
        family: "G • GU",
        soundAudio: "g.mp3",
        image: "gare.png",
        wordHTML: "<span>G</span>ARE",
        wordAudio: "gare.mp3"
    },

    {
        sound: "GU",
        family: "G • GU",
        soundAudio: "g.mp3",
        image: "bague.png",
        wordHTML: "BA<span>GU</span>E",
        wordAudio: "bague.mp3"
    }

];


// =====================================================
// ÉLÉMENTS HTML
// =====================================================

const cardContainer = document.querySelector("#cardContainer");
const counter = document.querySelector("#counter");
const percentage = document.querySelector("#percentage");
const progressBar = document.querySelector("#progressBar");

const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

const validateButton = document.querySelector("#validateButton");
const validateText = document.querySelector("#validateText");

const successScreen = document.querySelector("#successScreen");
const restartButton = document.querySelector("#restartButton");


// =====================================================
// ÉTAT
// =====================================================

let currentIndex = 0;
let currentAudio = null;
let transitionRunning = false;


// =====================================================
// PROGRESSION SAUVEGARDÉE
// =====================================================

let masteredLessons = [];

try {

    const savedProgress =
        JSON.parse(
            localStorage.getItem("masteredSounds")
        );

    if (Array.isArray(savedProgress)) {

        masteredLessons =
            savedProgress.filter(
                index =>
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < lessons.length
            );

    }

} catch (error) {

    console.error(
        "Impossible de récupérer la progression.",
        error
    );

}

masteredLessons = [...new Set(masteredLessons)];


// =====================================================
// SAUVEGARDER LA PROGRESSION
// =====================================================

function saveProgress() {

    localStorage.setItem(
        "masteredSounds",
        JSON.stringify(masteredLessons)
    );

}


// =====================================================
// AFFICHER UNE LEÇON
// =====================================================

function renderLesson(direction = "right") {

    const lesson = lessons[currentIndex];

    const isMastered =
        masteredLessons.includes(currentIndex);


    cardContainer.innerHTML = `

        <article
            class="
                sound-card
                ${isMastered ? "mastered" : ""}
                ${direction === "right"
                    ? "slide-in-right"
                    : "slide-in-left"}
            "
        >

            <div class="success-check">
                ✓
            </div>

            <div class="sound-family">
                ${lesson.family}
            </div>

            <div class="sound">
                ${lesson.sound}
            </div>

            <button
                class="sound-audio"
                data-audio="assets/audio/${lesson.soundAudio}"
                aria-label="Écouter le son ${lesson.sound}"
            >
                🔊
            </button>

            <div class="image-container">

                <img
                    src="assets/images/${lesson.image}"
                    alt="${lesson.wordHTML.replace(/<[^>]*>/g, "")}"
                    class="word-image"
                >

            </div>

            <div class="word">
                ${lesson.wordHTML}
            </div>

            <button
                class="word-audio"
                data-audio="assets/audio/${lesson.wordAudio}"
                aria-label="Écouter le mot"
            >
                🔊
            </button>

        </article>

    `;


    updateInterface();

    setupAudioButtons();

}


// =====================================================
// INTERFACE
// =====================================================

function updateInterface() {

    const completed =
        masteredLessons.length;

    const progress =
        Math.round(
            (completed / lessons.length) * 100
        );


    counter.textContent =
        `${currentIndex + 1} / ${lessons.length}`;


    percentage.textContent =
        `${progress}%`;


    progressBar.style.width =
        `${progress}%`;


    previousButton.disabled =
        currentIndex === 0;


    nextButton.disabled =
        currentIndex === lessons.length - 1;


    const isMastered =
        masteredLessons.includes(currentIndex);


    if (isMastered) {

        validateButton.classList.add("validated");

        validateText.textContent =
            "Maîtrisé ✓";

    } else {

        validateButton.classList.remove("validated");

        validateText.textContent =
            "J'ai compris";

    }

}


// =====================================================
// AUDIO
// =====================================================

function setupAudioButtons() {

    const buttons =
        cardContainer.querySelectorAll(
            "[data-audio]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => playAudio(button)
        );

    });

}


function stopCurrentAudio() {

    if (!currentAudio) {
        return;
    }


    currentAudio.pause();

    currentAudio.currentTime = 0;

    currentAudio = null;


    document
        .querySelectorAll(".playing")
        .forEach(element => {

            element.classList.remove("playing");

        });

}


function playAudio(button) {

    const file =
        button.dataset.audio;


    stopCurrentAudio();


    currentAudio =
        new Audio(file);


    button.classList.add("playing");


    currentAudio
        .play()
        .catch(error => {

            console.error(
                "Impossible de lire l'audio :",
                file,
                error
            );

            button.classList.remove("playing");

            currentAudio = null;

        });


    currentAudio.addEventListener(
        "ended",
        () => {

            button.classList.remove("playing");

            currentAudio = null;

        }
    );

}


// =====================================================
// MAÎTRISÉ / NON MAÎTRISÉ
// =====================================================

validateButton.addEventListener(
    "click",
    validateCurrentLesson
);


function validateCurrentLesson() {

    if (transitionRunning) {
        return;
    }


    const card =
        document.querySelector(".sound-card");


    const isAlreadyMastered =
        masteredLessons.includes(currentIndex);


    // =================================================
    // DÉJÀ MAÎTRISÉ
    // → LE SECOND CLIC ANNULE
    // =================================================

    if (isAlreadyMastered) {

        masteredLessons =
            masteredLessons.filter(
                index => index !== currentIndex
            );


        saveProgress();


        card.classList.remove("mastered");


        updateInterface();


        return;
    }


    // =================================================
    // PAS ENCORE MAÎTRISÉ
    // =================================================

    masteredLessons.push(currentIndex);

    masteredLessons =
        [...new Set(masteredLessons)];


    saveProgress();


    card.classList.add("mastered");


    updateInterface();


    if (navigator.vibrate) {

        navigator.vibrate(40);

    }


    transitionRunning = true;


    // On laisse apparaître l'animation verte
    // avant de passer automatiquement au suivant.

    setTimeout(() => {

        if (
            currentIndex <
            lessons.length - 1
        ) {

            goToLesson(
                currentIndex + 1,
                "right"
            );

        } else {

            showSuccess();

            transitionRunning = false;

        }

    }, 850);

}


// =====================================================
// CHANGER DE LEÇON
// =====================================================

function goToLesson(newIndex, direction) {

    if (
        transitionRunning ||
        newIndex < 0 ||
        newIndex >= lessons.length
    ) {
        return;
    }


    const card =
        document.querySelector(".sound-card");


    if (!card) {
        return;
    }


    stopCurrentAudio();


    transitionRunning = true;


    card.classList.remove(
        "slide-in-right",
        "slide-in-left"
    );


    if (direction === "right") {

        card.classList.add(
            "slide-out-left"
        );

    } else {

        card.classList.add(
            "slide-out-right"
        );

    }


    setTimeout(() => {

        currentIndex = newIndex;


        renderLesson(direction);


        transitionRunning = false;

    }, 330);

}


// =====================================================
// PRÉCÉDENT
// =====================================================

previousButton.addEventListener(
    "click",
    () => {

        goToLesson(
            currentIndex - 1,
            "left"
        );

    }
);


// =====================================================
// SUIVANT
// =====================================================

nextButton.addEventListener(
    "click",
    () => {

        goToLesson(
            currentIndex + 1,
            "right"
        );

    }
);


// =====================================================
// SWIPE
// =====================================================

let touchStartX = 0;
let touchStartY = 0;

let touchEndX = 0;
let touchEndY = 0;


cardContainer.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

        touchStartY =
            event.changedTouches[0].screenY;

    },
    {
        passive: true
    }
);


cardContainer.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;

        touchEndY =
            event.changedTouches[0].screenY;


        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const horizontalDistance =
        touchStartX - touchEndX;

    const verticalDistance =
        touchStartY - touchEndY;


    // On ignore les petits mouvements
    // et les mouvements surtout verticaux.

    if (
        Math.abs(horizontalDistance) < 70 ||
        Math.abs(verticalDistance) >
            Math.abs(horizontalDistance)
    ) {
        return;
    }


    // Gauche → suivant

    if (
        horizontalDistance > 0 &&
        currentIndex < lessons.length - 1
    ) {

        goToLesson(
            currentIndex + 1,
            "right"
        );

    }


    // Droite → précédent

    if (
        horizontalDistance < 0 &&
        currentIndex > 0
    ) {

        goToLesson(
            currentIndex - 1,
            "left"
        );

    }

}


// =====================================================
// ÉCRAN FINAL
// =====================================================

function showSuccess() {

    successScreen.classList.add("visible");

}


// =====================================================
// RECOMMENCER
// =====================================================

restartButton.addEventListener(
    "click",
    () => {

        masteredLessons = [];

        currentIndex = 0;

        transitionRunning = false;


        localStorage.removeItem(
            "masteredSounds"
        );


        successScreen.classList.remove(
            "visible"
        );


        renderLesson("right");

    }
);


// =====================================================
// DÉMARRAGE
// =====================================================

renderLesson();