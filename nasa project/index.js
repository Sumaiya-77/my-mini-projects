// const url ="https://gorest.co.in/public/v2/users"

// const fetching =async()=>{
//     try{
//         const res = await fetch(url)
//         const out = await res.json()
//         console.log(out)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// fetching()



const head = document.getElementById("head")
const para = document.getElementById("para")
const img =document.getElementById("img")


async function fetching(){
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    const out = await res.json()
    head.innerHTML =out.title
    para.innerHTML =out.explanation
    img.src =out.url
}
fetching()