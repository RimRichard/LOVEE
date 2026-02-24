const messages = [
    "Khó thặc á chớ",
    "Ơ kìa",
    "Ủa thiệt hả? 😳",
    "Nghĩ lại chút đi mò 🥺",
    "Bùn thiệt luôn đó 😞",
    "Nàooo, Phạttt nè 💔",
    "Anh đùa mò, chớ ai mà nỡ",
    "iii mò Nơ Nơ cô nương",
    "Ô lô ấn đến đây ròi sao, anh đành dừng hoi 💔",
    "Nah đùa á, say yesssss iii"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}