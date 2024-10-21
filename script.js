
let button = document.querySelector(".button")
console.log(button);
button.addEventListener("click", () => {
    let getContent = document.querySelector(".inputTask").value
    if (getContent !== "") {
        document.querySelector(".inputTask").value=""
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


        p.addEventListener("click", () => {
            if(p.getAttribute("style")==="text-decoration: line-through;"){
            p.style = "text-decoration:none;"
            }else{p.style = "text-decoration:line-through;"}
           console.log(p.getAttribute("style"))
        })
    }
})


