const myArray = ["Did we go to school together? I could swear we had chemistry.",
"What's your favorite drink? I'm asking so I know what to buy you on our first date.", 
"If you were a song, you'd be the best single on the album.",
"Did it hurt? When you fell from heaven?",
"Are you a parking ticket? Cause you've got fine written all over you.",
"Are you sure you’re not tired? You’ve been running through my mind all day.",
"I’m not a photographer, but I can picture me and you together.",
"It’s a good thing I have my library card, because I am totally checking you out.",
"If I could rearrange the alphabet, I’d put “U” and “I” together.",
"Are you a camera? Because every time I look at you, I smile.",
"Your lips look lonely. Would they like to meet mine?",
"I'd take you to the movies, but they don't let you bring in your own snacks.",
"If you were words on a page you'd be the fine print.",
"Your hand looks heavy. Can I hold it for you?",
"I bet you dinner that you won’t give me your number.",
"I thought this was a dating app, but it must be a museum because you are a work of art.",
"I think I saw you on Spotify, you were listed as the hottest single.",
"We’re not socks but I think we’d make a great pair.",
"Now that I’ve seen you, life without you is like a broken pencil…pointless.",
"Did you do something to my eyes? Because I can’t keep them off you.",
"I'm pretty good at algebra...I can replace your X and you wouldn't need to figure out Y.",
"Ngommala Twist uh (i put this on purpose)",
"I hope you know CPR, because you just took my breath away!",
"So, aside from taking my breath away, what do you do for a living?",
"I ought to complain to Spotify for you not being named this week’s hottest single.",
"Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.",
"Your eyes are like the ocean; I could swim in them all day.",
"When I look in your eyes, I see a very kind soul.",
"If you were a vegetable, you’d be a ‘cute-cumber.’",
"Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
"I never believed in love at first sight, but that was before I saw you.",
"I didn’t know what I wanted in a woman until I saw you.",
"I was wondering if you could tell me: If you’re here, who’s running Heaven?",
"No wonder the sky is gray (or dark, if at night)—all the color is in your eyes.",
"You’ve got everything I’ve been searching for, and believe me—I’ve been looking a long time.",
"You’re like a fine wine. The more of you I drink in, the better I feel.",
"You’ve got a lot of beautiful curves, but your smile is absolutely my favorite.",
"Are you as beautiful on the inside as you are on the outside?",
"If being sexy was a crime, you’d be guilty as charged.",
"I was wondering if you’re an artist because you were so good at drawing me in.",
"It says in the Bible to only think about what’s pure and lovely… So I’ve been thinking about you all day long.",
"Do you have a map? I just got lost in your eyes.",
"I’d like to take you to the movies, but they don’t let you bring in your own snacks.",
"You know what you would look really beautiful in? My arms.",
"I would never play hide and seek with you because someone like you is impossible to find.",
"Are you a magician? It’s the strangest thing, but every time I look at you, everyone else disappears.",
"I think there’s something wrong with my phone. Could you try calling it to see if it works?",
"Hi, I just wanted to thank you for the gift. (pause) I’ve been wearing this smile ever since you gave it to me.",
"Are you an electrician? Because you’re definitely lighting up my day/night!",
"I’ve heard it said that kissing is the ‘language of love.’ Would you care to have a conversation with me about it sometime?",
"I always thought happiness started with an ‘h,’ but it turns out mine starts with ‘u.’",
"I believe in following my dreams. Can I have your Instagram?",
"Do you know what the Little Mermaid and I have in common? We both want to be part of your world.",
"If you were a song, you’d be the best track on the album.",
"On a scale of 1 to America, how free are you tonight?",
"You know, I always thought that Disneyland was the ‘happiest place on Earth,’ but that was before I got a chance to stand here next to you.",
"Want to go outside and get some fresh air with me? You just took my breath away.",
"If you were a taser, you’d be set to ‘stun.’",
"If you were a Transformer, you’d be ‘Optimus Fine.’",
"Is your name Google? Because you have everything I’m searching for.",
"Do you ever get tired from running through my thoughts all night?",
"You know, they say that love is when you don’t want to sleep because reality is better than your dreams. And after seeing you, I don’t think I ever want to sleep again.",
"I don’t know your name, but I’m sure it’s as beautiful as you are. I’m (your name).",
"You are astoundingly gorgeous, but I can tell that’s the least interesting thing about you. I’d love to know more.",
"The sparkle in your eyes is so bright, the sun must be jealous.",
"One night I looked up at the stars and thought, ‘Wow, how beautiful.’ But now that I’m looking at you, nothing else can compare.",
"If I had a nickel for every time I saw someone as beautiful as you, I’d still only have five cents.",
"If beauty were time, you’d be eternity.",
"I think the only way you could possibly be more beautiful is if I got to know you.",
"I don’t know which is prettier today—the weather, or your eyes.",
"I swear someone stole the stars from the sky and put them in your eyes.",
"In my opinion, there are three kinds of beautiful: Cute, pretty, and sexy. Somehow, you manage to be all three.",
"I’m not usually religious, but when I saw you, I knew you were the answer to my prayers.",
"(Hold out your hand) Hey, I’m going for a walk. Would you mind holding this for me?",
"Do you believe in love at first sight, or should I try walking by again?",
"I’m really glad I just bought life insurance, because when I saw you, my heart stopped.",
"I’m not a photographer, but I can definitely picture us together.",
"Would you mind giving me a pinch? You’re so cute, I must be dreaming.",
"Wow, when God made you, he was seriously showing off.",
"Excuse me, do you have the time? I just want to remember the exact minute I got a crush on you.",
"Kiss me if I’m wrong but, dinosaurs still exist, right?70. If I were a cat, I’d spend all nine of my lives with you."];

const btn = document.getElementById("btn");
const pick = document.querySelector(".pick");
btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    pick.textContent = myArray[randomNumber]
});
function getRandomNumber() {
    return Math.floor(Math.random() * myArray.length);
}

    




