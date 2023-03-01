function* cycle(array) {
    // Duplicate Array
    let saved = array.slice(0);

    while (saved) {
        for (let index = 0; index < saved.length; index++) {
            const element = saved[index];
            yield element;
        }
    }
}

// :3
const marqueeCycle = cycle([
    "Trans Rights!",
    "Black Lives Matter!",
    "LGBTQ+ Rights are Human Rights!",
    "You matter!!",
    "Slava Ukraini!!!"
]);

const marqueeText = document.getElementById("homescreen-marquee-text");

marqueeText.addEventListener("animationiteration", () => {
    const nextMessage = marqueeCycle.next().value;
    marqueeText.innerText = nextMessage;
});
