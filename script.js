class TextMarquee {
    #marqueeIndex = 0;

    constructor(cycle, marqueeTextElement) {
        this.cycle = cycle;
        this.marquee = marqueeTextElement;
    }

    marqueeRender() {
        this.marquee.addEventListener("animationiteration", () => {
            this.marquee.innerText = this.cycle[this.#marqueeIndex];

            this.#marqueeIndex = ++this.#marqueeIndex % this.cycle.length;
        });
    }
}

const main = () => {
    const marqueeText = document.getElementById("homescreen-marquee-text");
    const disableAnimationsButton =
        document.getElementById("disable-animations");

    disableAnimationsButton.addEventListener("click", (event) => {
        let state =
            marqueeText.style.animationPlayState == "paused" || ""
                ? "running"
                : "paused";
        marqueeText.style.animationPlayState = state;

        /* from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p */
        [event.target.innerText, event.target.dataset.toggleText] = [
            event.target.dataset.toggleText,
            event.target.innerText,
        ];
    });

    // :3
    const marqueeCycle = [
        "Trans Rights!",
        "Black Lives Matter!",
        "LGBTQ+ Rights are Human Rights!",
        "You matter!!",
        "Slava Ukraini!!!",
        "It's okay to not be okay!",
    ];

    let mar = new TextMarquee(marqueeCycle, marqueeText);
    mar.marqueeRender();
};

main();
