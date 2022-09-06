let btn = document.querySelector(".button");
let adviceNumber = document.querySelector("#advice-number");
let adviceText = document.querySelector(".advice-text");

const adviceGenerate = () =>{
    let url = "https://api.adviceslip.com/advice";
    const data = fetch(url, { method: "get" });
    let advice = data.then((ele) => ele.clone().json());

    advice.then((res) => {

        for (let key in res.slip) {
            if (key == "id") {
                adviceNumber.innerText = `${res.slip.id}`;
            }
            if (key == "advice") {
                adviceText.innerText = `${res.slip.advice}`;
            }
        }

    })
}
adviceGenerate();
btn.addEventListener("click", () => {

    btn.classList.add("click");

   adviceGenerate();

})

btn.addEventListener("mouseout", ()=>{
    btn.classList.remove("click");
})