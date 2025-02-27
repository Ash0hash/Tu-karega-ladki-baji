document.addEventListener("DOMContentLoaded", function () {
    let btnYes = document.getElementById('btn-yes');
    let btnNo = document.getElementById('btn-no');
    let gifContainer = document.getElementById('gif-container');

    if (btnYes) {
        btnYes.addEventListener('click', function () {
            window.location.href = 'index_3.html';
        });
    }

    if (btnNo) {
        btnNo.addEventListener('click', function () {
            let messages = [
                "🤔 soch lo 🤔",
                "😢 chalo na sath mey khaenge.. 😢",
                "😩 mere liye nhi chalogi! 😩",
                "😭 Pookie please 😭"
            ];

            let randomMessage = messages[Math.floor(Math.random() * messages.length)];
            btnNo.innerHTML = randomMessage;

            let gifArray = [
                'https://media.tenor.com/UdThavVus9oAAAAi/peach-and.gif',
                'https://media.tenor.com/kZ0XPsvtqw8AAAAj/cat-farsi-sad.gif',
                'https://media.tenor.com/lI1b3RZqGe8AAAAi/crying.gif',
                'https://media.tenor.com/_28-tA-sTvwAAAAi/chibi-cat-mochi-cat.gif'
            ];

            // ✅ Ensure `gifContainer` exists before modifying it
            if (!gifContainer) {
                gifContainer = document.createElement('div');
                gifContainer.id = 'gif-container';
                document.body.appendChild(gifContainer);
            }

            gifContainer.innerHTML = ""; // Clear previous GIF

            let gifImage = document.createElement('img');
            gifImage.src = gifArray[Math.floor(Math.random() * gifArray.length)];
            gifImage.alt = 'Random Crying Cat GIF';
            gifImage.style.maxWidth = "100%"; // Ensure it fits within the container
            gifImage.style.height = "auto";

            gifImage.onerror = function () {
                gifContainer.innerHTML = "⚠️ GIF failed to load. Please try again.";
            };

            gifContainer.appendChild(gifImage);
        });
    }
});
