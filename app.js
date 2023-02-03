const myArray = ["Did we go to school together? I could swear we had chemistry.", "What's your favorite drink? I'm asking so I know what to buy you on our first date.", "If you were a song, you'd be the best single on the album.","Did it hurt? When you fell from heaven?","Are you a parking ticket? Cause you've got fine written all over you.","Are you sure you’re not tired? You’ve been running through my mind all day.","I’m not a photographer, but I can picture me and you together.","It’s a good thing I have my library card, because I am totally checking you out.","If I could rearrange the alphabet, I’d put “U” and “I” together.","Are you a camera? Because every time I look at you, I smile.","Your lips look lonely. Would they like to meet mine?","I'd take you to the movies, but they don't let you bring in your own snacks.","If you were words on a page you'd be the fine print.","Your hand looks heavy. Can I hold it for you?","I bet you dinner that you won’t give me your number.","I thought this was a dating app, but it must be a museum because you are a work of art.","I think I saw you on Spotify, you were listed as the hottest single.","We’re not socks but I think we’d make a great pair.","Now that I’ve seen you, life without you is like a broken pencil…pointless.","Did you do something to my eyes? Because I can’t keep them off you.","I'm pretty good at algebra...I can replace your X and you wouldn't need to figure out Y.","Ngommala Twist uh (i put this on purpose)"];
const btn = document.getElementById("btn");
const pick = document.querySelector(".pick");
btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    pick.textContent = myArray[randomNumber]
});
function getRandomNumber() {
    return Math.floor(Math.random() * myArray.length);
}

    


