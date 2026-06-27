let current = 1;

function login(){

    let user =
    document.getElementById("username").value;

    let pass =
    document.getElementById("password").value;

    if(
        user.toLowerCase() === "nisa" &&
        pass === "2806"
    ){

        const music =
        document.getElementById("bgMusic");

        music.play();

        document
        .getElementById("login")
        .classList.remove("active");

        document
        .getElementById("welcome")
        .classList.add("active");

        setTimeout(function(){

            document
            .getElementById("welcome")
            .classList.remove("active");

            document
            .getElementById("slide1")
            .classList.add("active");

        },3000);

    }else{

        document
        .getElementById("error")
        .innerHTML =
        "💔 Username atau Password Salah";

    }
}

function nextSlide(){

    document
    .getElementById("slide"+current)
    .classList.remove("active");

    current++;

    let next =
    document.getElementById("slide"+current);

    if(next){
        next.classList.add("active");
    }
}