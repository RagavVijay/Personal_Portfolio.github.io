// var typed = new Typed(".typing",{
//     strings:[" ","Web Designer","Web Developer"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })

var tablinks = document.getElementsByClassName("about-row-links");
var tabcontents = document.getElementsByClassName("about-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}