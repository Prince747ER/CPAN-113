let ropePosition = 0; // Tracks rope movement
const maxPull = 5; // How far a team needs to win
const rope = document.getElementById("rope");
const result = document.getElementById("result");

document.addEventListener("keydown", (event) => {
    if (result.textContent !== "") return; // Stop if game is over

    if (event.key === "a") {
        ropePosition -= 2; // Increased strength for Team A
    } else if (event.key === "l") {
        ropePosition += 2; // Increased strength for Team B
    }

    // Move rope visually
    rope.style.transform = `translateX(${ropePosition * 20}px)`;

    // Check for a winner
    if (ropePosition <= -maxPull) {
        result.textContent = "🏆 Team A Wins!";
    } else if (ropePosition >= maxPull) {
        result.textContent = "🏆 Team B Wins!";
    }
});
