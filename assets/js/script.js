function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

let songs = [
    {
        id: 1,
        name: "COLPA TUA",
        authors: ["Mace", "Guè", "Venerus"],
        album: "OBE",
        path: "https://lilpessy.github.io/player/assets/songs/colpa-tua.mp3",
        cover: "https://lilpessy.github.io/player/assets/cover/obe.jpg"
    },
    {
        id: 2,
        name: "S!R!",
        authors: ["ThaSup", "Lazza", "Sfera Ebbasta"],
        album: "s!r!",
        path: "https://lilpessy.github.io/player/assets/songs/s!r!.mp3",
        cover: "https://lilpessy.github.io/player/assets/cover/s!r!.jpg"
    },
];

let prev = document.querySelector(".prev")
let play = document.querySelector(".play")
let succ = document.querySelector(".succ")
let firstPlay = true

let currentSong = null;
let pause = false;

/*play.addEventListener("click", (e)=>{
    e.preventDefault();
    if(firstPlay){
        let i = getRndInteger(0, songs.length);
        currentSong = new Audio(songs[i].path);
        currentSong.play();
        firstPlay = false;
    } else{
        if(!pause){
            currentSong.pause();
            pause = true
        }else{
            currentSong.play();
            pause = false
        }
    }    
    
});*/

