
async function fetchUserData(){
    try{
        const res = await fetch("https://randomuser.me/api/");
        const out = await res.json()
        const user = out.results[0]

        document.querySelector("img").src = user.picture.large;


        const info = document.getElementById("info")
        const icons = document.querySelectorAll("span")
        const title = document.getElementById("title")


        icons[0].addEventListener("mouseover",()=>{
            title.textContent =`${user.name.title} ${user.name.first} ${user.name.last}`;
            info.textContent = ` Username: ${user.login.username}`;

        });
        icons[1].addEventListener("mouseover",()=>{
            title.textContent= "This is my Email"
            info.textContent =`Email: ${user.email}`
        });
        icons[2].addEventListener("mouseover",()=>{
            title.textContent= "Here is my date of birth..."

            info.textContent =`DOB: ${new Date(user.dob.date).toLocaleDateString()}(Age:${user.dob.age})`

        });
        icons[3].addEventListener("mouseover", () => {
                        title.textContent= "This is my password..."

                        info.textContent = `Password: ${user.login.password}`;
                    });
                    icons[4].addEventListener("mouseover", () => {
                        title.textContent= "Here is my location..."

                        info.textContent = `Location: ${user.location.city}, ${user.location.country}`;
                    });
                    icons[5].addEventListener("mouseover", () => {
                        title.textContent= "you can contact me through this number..."

                        info.textContent = `Phone: ${user.phone}`;
                    });
    }
    catch{

    }

}
fetchUserData()


