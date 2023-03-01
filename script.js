const marqueeText = document.getElementById("homescreen-marquee-text");
const disableAnimationsButton = document.getElementById("disable-animations")


disableAnimationsButton.addEventListener("click", (event) => {
    let state = marqueeText.style.animationPlayState == 'paused' || '' ? 'running' : 'paused';
    marqueeText.style.animationPlayState = state;

    /* from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p */
    [event.target.innerText, event.target.dataset.toggleText] = [event.target.dataset.toggleText, event.target.innerText];
})

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

marqueeText.addEventListener("animationiteration", () => {
    const nextMessage = marqueeCycle.next().value;
    marqueeText.innerText = nextMessage;
});


