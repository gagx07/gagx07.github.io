var r = document.querySelector(':root');

document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');


    button1.addEventListener('click', () => {
        r.style.setProperty('--inv', 'none');
        document.getElementById("title").innerHTML = "python is better than java";
        document.getElementById("mainText").innerHTML = "Python is just objectively better than java, even if java is easier to make a build with you can still do that with python but your code will be like 100 lines shorter and will be done hours earlier and half the time in java your errors arnt even errors they're just woops looks like theres no ; sucks for you like omg who cares why doesn't the IDE automaticly add one like if it just highlighted it after wards than the coder will see it and could delete it if it isnt ment to be there or could like change it in settings or something its just so pointless. Then java coders go like \"oH BUt JaVa cAN Do guI's beTter\" and like sure but also i'd rather just learn the tkinter library than a whole new language and honestly what are you going to do with java like most software is made in C or somthing and websites are javascript so why bother with java atleast python is a good entry to coding at can be used in alot of situations java is overly spesific. infact there main has to be a static class becuase its so over object orintated that just creating a main needs safegaurds.";
        document.getElementById("link1").innerHTML = "";
        document.getElementById("link2").innerHTML = "";
        document.getElementById("link3").innerHTML = "";
    });
    button2.addEventListener('click', () => {
        r.style.setProperty('--inv', 'none');
        document.getElementById("title").innerHTML = "about author";
        document.getElementById("mainText").innerHTML = "this post was brought to you by someone how loves python and has a ungodly hate for java :3";
        document.getElementById("link1").innerHTML = "";
        document.getElementById("link2").innerHTML = "";
        document.getElementById("link3").innerHTML = "";
    });
    button3.addEventListener('click', () => {
        r.style.setProperty('--inv', 'circle');
        document.getElementById("title").innerHTML = "fun little links";
        document.getElementById("mainText").innerHTML = "stuff relevant to the project";
        document.getElementById("link1").innerHTML = "the google doc for my project";
        document.getElementById("link2").innerHTML = "one of the inspiration site";
        document.getElementById("link3").innerHTML = "the other inspiration site";
    });
})