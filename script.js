document.addEventListener("DOMContentLoaded", function() {
    let text = "Bună, iubire!";
    let i = 0;
    let speed = 150;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("introText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    setTimeout(typeWriter, 500);
});

document.getElementById('btnDa').addEventListener('click', function() {
    let gif = document.getElementById('gifTomJerry');
    gif.style.display = 'block';
});

document.getElementById('btnNu').addEventListener('click', function() {
    let btnDa = document.getElementById('btnDa');
    let currentSize = parseFloat(window.getComputedStyle(btnDa).fontSize);

    // Limităm creșterea pe telefoane mici
    if (window.innerWidth < 768) {
        btnDa.style.fontSize = Math.min(currentSize + 3, 40) + 'px';
    } else {
        btnDa.style.fontSize = (currentSize + 5) + 'px';
    }
});
