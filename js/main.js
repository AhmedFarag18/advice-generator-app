const btnIcon = document.querySelector(".btn_icon");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




btnIcon.addEventListener("click",
    async function getData() {
        // get a random number between 1 to 200
        const randomId = randomNum(1, 200);

        const response = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
        // trasnform data to json
        const data = await response.json();
        console.log(randomId);
        console.log(data);

        // change the Advice text and Id
        document.querySelector(`#random`).innerHTML = `Advice#${data.slip.id}`;
        document.querySelector(`#advice`).innerHTML = `${data.slip.advice}`;
    }
);