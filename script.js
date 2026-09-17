// ==========================================
// BOUTONS AUDIO
// ==========================================

const audioButtons = document.querySelectorAll(
    ".audio-button, .word-audio-button"
);


let currentAudio = null;
let currentButton = null;


// ==========================================
// LECTURE D'UN AUDIO
// ==========================================

audioButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const audioFile = button.dataset.audio;


        // Si un autre audio joue déjà,
        // on l'arrête.

        if (currentAudio) {

            currentAudio.pause();

            currentAudio.currentTime = 0;

        }


        // On retire l'animation
        // de l'ancien bouton.

        if (currentButton) {

            currentButton.classList.remove("playing");

        }


        // Création du nouvel audio.

        const audio = new Audio(audioFile);


        currentAudio = audio;
        currentButton = button;


        // Animation du bouton.

        button.classList.add("playing");


        // Lecture.

        audio.play().catch((error) => {

            console.error(
                "Impossible de lire l'audio :",
                audioFile,
                error
            );

            button.classList.remove("playing");

        });


        // Quand l'audio est terminé.

        audio.addEventListener("ended", () => {

            button.classList.remove("playing");

            currentAudio = null;
            currentButton = null;

        });

    });

});


// ==========================================
// BOUTON RETOUR EN HAUT
// ==========================================

const backToTop = document.querySelector("#backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});