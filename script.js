const welcomeScreen =
    document.getElementById("welcomeScreen");

const nameScreen =
    document.getElementById("nameScreen");

const loadingScreen =
    document.getElementById("loadingScreen");

const messageScreen =
    document.getElementById("messageScreen");


const beginButton =
    document.getElementById("beginButton");

const continueButton =
    document.getElementById("continueButton");

const restartButton =
    document.getElementById("restartButton");


const teacherNameInput =
    document.getElementById("teacherName");

const errorMessage =
    document.getElementById("errorMessage");


const messageEyebrow =
    document.getElementById("messageEyebrow");

const messageBadge =
    document.getElementById("messageBadge");

const messageKicker =
    document.getElementById("messageKicker");

const messageTitle =
    document.getElementById("messageTitle");

const messageText =
    document.getElementById("messageText");

const messageSignature =
    document.getElementById("messageSignature");

const visualSymbol =
    document.getElementById("visualSymbol");

const loadingText =
    document.getElementById("loadingText");


const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const musicIcon =
    document.getElementById("musicIcon");

const particlesContainer =
    document.getElementById("particles");


/* =====================================================
   PARTICLES
===================================================== */

function createParticles() {

    const particleCount =
        window.innerWidth < 760
            ? 22
            : 38;

    particlesContainer.innerHTML =
        "";

    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${55 + Math.random() * 45}%`;

        particle.style.animationDuration =
            `${5 + Math.random() * 8}s`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particlesContainer.appendChild(
            particle
        );
    }
}


createParticles();


/* =====================================================
   SCREEN CONTROL
===================================================== */

function showScreen(screen) {

    const screens = [
        welcomeScreen,
        nameScreen,
        loadingScreen,
        messageScreen
    ];

    screens.forEach(
        (currentScreen) => {

            currentScreen.classList.add(
                "hidden"
            );

        }
    );

    screen.classList.remove(
        "hidden"
    );
}


/* =====================================================
   NAME NORMALIZATION
===================================================== */

function normalizeName(name) {

    return name
        .toLowerCase()
        .trim()
        .replace(/[’'`]/g, "")
        .replace(/\s+/g, " ");
}


/* =====================================================
   TEACHER DETECTION
===================================================== */

function detectTeacher(name) {

    const normalized =
        normalizeName(name);


    /* Beena Ma'am */

    if (
        normalized === "beena" ||
        normalized === "beena mam" ||
        normalized === "beena maam" ||
        normalized.includes("beena")
    ) {

        return "beena";
    }


    /* Shahzad Sir */

    if (
        normalized === "shahzad" ||
        normalized === "shahzad sir" ||
        normalized.includes("shahzad")
    ) {

        return "shahzad";
    }


    /* Farija Ma'am */

    if (
        normalized === "farija" ||
        normalized === "farija mam" ||
        normalized === "farija maam" ||
        normalized.includes("farija")
    ) {

        return "farija";
    }


    /* Shahabas Sir */

    if (
        normalized === "ss" ||
        normalized === "shahabas" ||
        normalized === "shahabas sir" ||
        normalized.includes("shahabas")
    ) {

        return "shahabas";
    }


    return "general";
}


/* =====================================================
   TEACHER DATA
===================================================== */

function getTeacherData(
    teacherType,
    name
) {

    switch (teacherType) {


        /* Beena */

        case "beena":

            return {

                theme:
                    "beena",

                eyebrow:
                    "WITH GRATITUDE",

                badge:
                    "MATHEMATICS • CLASS TEACHER",

                kicker:
                    "A MESSAGE FOR BEENA MA’AM",

                title:
                    "Beena Ma’am",

                text:
                    "Thank you for teaching us with patience, " +
                    "guiding our class, and being there for us " +
                    "throughout the year. You haven't just been " +
                    "our Mathematics teacher — you've also been " +
                    "someone who has helped our class move forward " +
                    "together.",

                signature:
                    "Thank you for being our guide.",

                symbol:
                    "∑"
            };


        /* Shahzad */

        case "shahzad":

            return {

                theme:
                    "shahzad",

                eyebrow:
                    "WITH GRATITUDE",

                badge:
                    "ROBOTICS",

                kicker:
                    "A MESSAGE FOR SHAHZAD SIR",

                title:
                    "Shahzad Sir",

                text:
                    "Thank you for encouraging us to build, " +
                    "experiment, make mistakes, and try again. " +
                    "You made robotics something we could actually " +
                    "explore and create with our own hands.",

                signature:
                    "Thank you for encouraging us to create.",

                symbol:
                    "⚙"
            };


        /* Farija */

        case "farija":

            return {

                theme:
                    "farija",

                eyebrow:
                    "WITH RESPECT",

                badge:
                    "SCHOOL LEADERSHIP",

                kicker:
                    "A MESSAGE FOR FARIJA MA’AM",

                title:
                    "Farija Ma’am",

                text:
                    "Thank you for everything you do for our school " +
                    "and for the students who are part of it. " +
                    "Your leadership helps create the environment " +
                    "in which we learn, grow, and make memories.",

                signature:
                    "With respect and gratitude.",

                symbol:
                    "✦"
            };


        /* Shahabas */

        case "shahabas":

            return {

                theme:
                    "shahabas",

                eyebrow:
                    "WITH GRATITUDE",

                badge:
                    "A MESSAGE OF THANKS",

                kicker:
                    "A MESSAGE FOR SHAHABAS SIR",

                title:
                    "Shahabas Sir",

                text:
                    "Thank you for your guidance, your patience, " +
                    "and the time you give to your students. " +
                    "Teachers don't always realize how much their " +
                    "everyday words and actions stay with us, " +
                    "but we remember them.",

                signature:
                    "Thank you for everything you do.",

                symbol:
                    "♡"
            };


        /* Everyone else */

        default:

            return {

                theme:
                    "general",

                eyebrow:
                    "WITH GRATITUDE",

                badge:
                    "TEACHERS’ DAY",

                kicker:
                    "A MESSAGE FOR YOU",

                title:
                    `Happy Teachers’ Day, ${name}`,

                text:
                    "Thank you for the time, effort, patience, " +
                    "and care you put into teaching us every day. " +
                    "We may not say it often, but we truly " +
                    "appreciate what you do for us.",

                signature:
                    "With gratitude.",

                symbol:
                    "✦"
            };
    }
}


/* =====================================================
   APPLY THEME
===================================================== */

function applyTheme(theme) {

    document.body.classList.remove(
        "theme-beena",
        "theme-shahzad",
        "theme-farija",
        "theme-shahabas",
        "theme-general"
    );

    document.body.classList.add(
        `theme-${theme}`
    );
}


/* =====================================================
   SHOW MESSAGE
===================================================== */

function showTeacherMessage(name) {

    const teacherType =
        detectTeacher(name);

    const data =
        getTeacherData(
            teacherType,
            name
        );


    applyTheme(
        data.theme
    );


    messageEyebrow.textContent =
        data.eyebrow;

    messageBadge.textContent =
        data.badge;

    messageKicker.textContent =
        data.kicker;

    messageTitle.textContent =
        data.title;

    messageText.textContent =
        data.text;

    messageSignature.textContent =
        data.signature;

    visualSymbol.textContent =
        data.symbol;


    showScreen(
        messageScreen
    );
}


/* =====================================================
   BEGIN
===================================================== */

beginButton.addEventListener(
    "click",
    () => {

        showScreen(
            nameScreen
        );

        setTimeout(
            () => {

                teacherNameInput.focus();

            },
            350
        );

        startMusic();
    }
);


/* =====================================================
   CONTINUE
===================================================== */

continueButton.addEventListener(
    "click",
    () => {

        const name =
            teacherNameInput.value.trim();


        if (!name) {

            errorMessage.classList.remove(
                "hidden"
            );

            teacherNameInput.focus();

            return;
        }


        errorMessage.classList.add(
            "hidden"
        );


        showScreen(
            loadingScreen
        );


        loadingText.textContent =
            "Preparing your message...";


        setTimeout(
            () => {

                loadingText.textContent =
                    "A little message, just for you...";

            },
            850
        );


        setTimeout(
            () => {

                loadingText.textContent =
                    "Almost there...";

            },
            1250
        );


        setTimeout(
            () => {

                showTeacherMessage(
                    name
                );

            },
            1650
        );
    }
);


/* =====================================================
   ENTER KEY
===================================================== */

teacherNameInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            continueButton.click();
        }
    }
);


/* =====================================================
   INPUT
===================================================== */

teacherNameInput.addEventListener(
    "input",
    () => {

        if (
            teacherNameInput.value.trim()
        ) {

            errorMessage.classList.add(
                "hidden"
            );
        }

    }
);


/* =====================================================
   RESTART
===================================================== */

restartButton.addEventListener(
    "click",
    () => {

        teacherNameInput.value =
            "";

        errorMessage.classList.add(
            "hidden"
        );

        applyTheme(
            "general"
        );

        showScreen(
            welcomeScreen
        );
    }
);


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying =
    false;


async function startMusic() {

    if (musicPlaying) {
        return;
    }


    try {

        await backgroundMusic.play();

        musicPlaying =
            true;

        musicButton.classList.add(
            "playing"
        );

        musicIcon.textContent =
            "Ⅱ";

    } catch (error) {

        musicPlaying =
            false;
    }
}


function toggleMusic() {

    if (
        backgroundMusic.paused
    ) {

        backgroundMusic
            .play()
            .then(
                () => {

                    musicPlaying =
                        true;

                    musicButton.classList.add(
                        "playing"
                    );

                    musicIcon.textContent =
                        "Ⅱ";
                }
            )
            .catch(
                () => {

                    musicPlaying =
                        false;
                }
            );

        return;
    }


    backgroundMusic.pause();

    musicPlaying =
        false;

    musicButton.classList.remove(
        "playing"
    );

    musicIcon.textContent =
        "♪";
}


musicButton.addEventListener(
    "click",
    toggleMusic
);


/* =====================================================
   RESIZE
===================================================== */

window.addEventListener(
    "resize",
    createParticles
);