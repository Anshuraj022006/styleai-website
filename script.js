const outfits = [

    {
        title: "Effortless Smart Casual",
        score: 94,
        message: "Clean, minimal and perfect for a relaxed day."
    },

    {
        title: "Modern Street Style",
        score: 91,
        message: "A confident combination with a cool contemporary feel."
    },

    {
        title: "Classic Minimal",
        score: 96,
        message: "Simple colors and timeless pieces create a polished look."
    },

    {
        title: "Weekend Essential",
        score: 89,
        message: "Comfortable, versatile and perfect for everyday plans."
    }

];


function generateOutfit() {

    const result = outfits[
        Math.floor(Math.random() * outfits.length)
    ];

    const title = document.getElementById("outfitTitle");
    const score = document.getElementById("score");
    const message = document.getElementById("aiMessage");
    const progress = document.getElementById("progressBar");

    // AI-like loading effect

    title.innerText = "Styling your outfit...";

    score.innerText = "--%";

    message.innerText =
        "AI is analyzing your wardrobe...";

    progress.style.width = "20%";


    setTimeout(() => {

        title.innerText = result.title;

        score.innerText = result.score + "%";

        message.innerText = result.message;

        progress.style.width = result.score + "%";

    }, 1000);

}


// ===============================
// OCCASION SELECTION
// ===============================

function selectOccasion(button) {

    const buttons =
        document.querySelectorAll(".occasion-buttons button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

}


// ===============================
// ADD CLOTHING
// ===============================

function addClothing() {

    alert(
        "📸 Upload your clothing item here.\n\n" +
        "This is a frontend demo, so actual image uploading " +
        "is not connected."
    );

}


// ===============================
// PROFILE BUTTON
// ===============================

document
    .querySelector(".profile-btn")
    .addEventListener("click", function () {

        alert(
            "👤 Style Profile\n\n" +
            "Your profile contains your preferred colors, " +
            "body features, fashion preferences and sizes."
        );

    });


// ===============================
// EXPLORE STYLE BUTTONS
// ===============================

const exploreButtons =
    document.querySelectorAll(".style-info button");

exploreButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert(
            "✨ StyleAI is preparing more looks " +
            "based on this style."
        );

    });

});
