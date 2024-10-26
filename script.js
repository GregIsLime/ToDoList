
let button = document.querySelector(".button")
console.log(button);
button.addEventListener("click", () => {
    let getContent = document.querySelector(".inputTask").value
    if (getContent !== "") {
        document.querySelector(".inputTask").value=""
        let tr = document.querySelector("tr")
        let td = document.createElement("td")
        let p = document.createElement("p")
        p.innerText =getContent

        let p2 = document.createElement("p")
        p2.className = "dataNow"
        let dataNow= new Date
        p2.innerText =dataNow.toDateString()+"\n"+dataNow.toLocaleTimeString()

        let p3 = document.createElement("p")
        p3.className = "rank"
        p3.innerText = "A"

        let div = document.createElement("div")
        div.className = "close-task"
        div.innerText = "X"
        div.addEventListener("click", () => {
            div.parentElement.remove()
        })
        td.append(p,p2,p3,div)
        tr.append(td)


        p.addEventListener("click", () => {
            if(p.getAttribute("style")==="text-decoration: line-through;"){
            p.style = "text-decoration:none;"
            }else{p.style = "text-decoration:line-through;"}
           console.log(p.getAttribute("style"))
        })
    }
})


