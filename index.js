document.getElementById("downOne").addEventListener("click", function (e){
    let down = window.innerHeight;
    window.scroll({
        top: down,
        left: 0,
        behavior: 'smooth'
    });
})

document.getElementById("footer-mail").addEventListener("click", ()=>window.location.href = "mailto:love.dzh.r@gmail.com");
document.getElementById("footer-linkedin").addEventListener("click", ()=>window.open("https://www.linkedin.com/in/liubov-dzhochka/", '_blank').focus());
document.getElementById("footer-github").addEventListener("click", ()=>window.open("https://github.com/DaringuL", '_blank').focus());

document.getElementById("optic-icon").addEventListener("click", ()=>window.open("https://plus-minus.if.ua/", '_blank').focus());
document.getElementById("optic-site").addEventListener("click", ()=>window.open("https://plus-minus.if.ua/", '_blank').focus());
document.getElementById("optic-github").addEventListener("click", ()=>window.open("https://github.com/DaringuL/optic-site", '_blank').focus());

document.getElementById("rating-page-icon").addEventListener("click", ()=>window.open("https://daringul.github.io/rating-page/", '_blank').focus());
document.getElementById("rating-page-site").addEventListener("click", ()=>window.open("https://daringul.github.io/rating-page/", '_blank').focus());
document.getElementById("rating-page-github").addEventListener("click", ()=>window.open("https://github.com/DaringuL/rating-page", '_blank').focus());

document.getElementById("advice-generator-icon").addEventListener("click", ()=>window.open("https://daringul.github.io/advice-generator/", '_blank').focus());
document.getElementById("advice-generator-site").addEventListener("click", ()=>window.open("https://daringul.github.io/advice-generator/", '_blank').focus());
document.getElementById("advice-generator-github").addEventListener("click", ()=>window.open("https://github.com/DaringuL/advice-generator", '_blank').focus());


document.getElementById("splitter-icon").addEventListener("click", ()=>window.open("https://splitter.herokuapp.com/", '_blank').focus());
document.getElementById("splitter-site").addEventListener("click", ()=>window.open("https://splitter.herokuapp.com/", '_blank').focus());
document.getElementById("splitter-github").addEventListener("click", ()=>window.open("https://github.com/DaringuL/splitter", '_blank').focus());