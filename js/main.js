const songs = [
  {
    image: "./img/blue.png",
    song: "./song/Song1.mp3"
  },
  {
    image: "./img/green.png",
    song: "./song/Song2.mp3"
  },
  {
    image: "./img/red.png",
    song: "./song/Song3.mp3"
  }
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const chooseBtn = document.getElementById("choose-btn");

// Only run on the song choice page
if (sliderImage && prevBtn && nextBtn && chooseBtn) {

  function updateImage() {
    sliderImage.src = songs[currentIndex].image;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    updateImage();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updateImage();
  });

  chooseBtn.addEventListener("click", () => {
    localStorage.setItem("selectedSong", songs[currentIndex].song);

    window.location.href = "./thedate.html";
  });
}

// PLAY SELECTED SONG

const audioPlayer = document.getElementById("selected-song");

if (audioPlayer) {
  const selectedSong = localStorage.getItem("selectedSong");

  if (selectedSong) {
    audioPlayer.src = selectedSong;

    audioPlayer.play().catch(error => {
      console.log("Autoplay was blocked:", error);
    });
  }
}


// Typewriter Effect
if (document.getElementById("title")) {
const dialogue = [
  {
    id: "title",
    text: "Doxie loves to play the violin..."
  },
  {
    id: "paragraph1",
    text: "She especially loves to play for her boyfriend Dobber!"
  },
  {
    id: "paragraph2",
    text: "Tomorrow, it's their one-year anniversary. So Doxie is preparing a special song for Dobber."
  },
  {
    id: "subtitle",
    text: "But Doxie has a huge problem..."
  },
  {
    id: "paragraph3",
    text: "She can't decide what song she wants to play for Dobber on her violin."
  },
  {
    id: "paragraph4",
    text: "\"There's just too many love songs!\" she says. \"Every love song reminds me of Dobber.\""
  },
  {
    id: "paragraph5",
    text: "Will you help Doxie pick a song to play?"}];


    const speed = 10; //change this to 80 wbefore submittting!
let itemIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (itemIndex >= dialogue.length) {
  document.getElementById("yes").classList.add("show");
  return;}

  const item = dialogue[itemIndex];
  const element = document.getElementById(item.id);

  if (charIndex < item.text.length) {
    element.textContent += item.text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    itemIndex++;
    charIndex = 0;
    setTimeout(typeWriter, 300);}}

  typeWriter();
  }
