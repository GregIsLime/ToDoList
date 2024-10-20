
// add the task
let button = document.querySelector(".button")
console.log(button);
button.addEventListener("click", () => {
    let getContent = document.querySelector(".inputTask").value
    if (getContent !== "") {
        let tr = document.querySelector("tr")
        let td = document.createElement("td")
        let p = document.createElement("p")
        p.innerText = getContent
        let div = document.createElement("div")
        div.className = "close-task"
        div.innerText = "Close"
        div.addEventListener("click", () => {
            div.parentElement.remove()
        })
        td.append(p, div)
        tr.append(td)
    }
})

// add the task END
