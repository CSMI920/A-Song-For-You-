const songs = [
  {
    image: "./img/song1.png",
    song: "./song/georgemicheal.mp3"
  },
  {
    image: "./img/song2.png",
    song: "./song/usher.mp3"
  },
  {
    image: "./img/song3.png",
    song: "./song/edsherean.mp3"
  },
  {
    image: "./img/song4.png",
    song: "./song/tayswift.mp3"
  }
];
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const chooseBtn = document.getElementById("choose-btn");

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

gsap.set(".violin-img", {
  x: 480,
  y: 90,
  scaleX: 1
});

gsap.timeline({ repeat: -1 })
  // Slide right
  .to(".violin-img", {
    x: 700,
    duration: 2,
    ease: "sine.inOut"
  })

  // Flip to face left
  .to(".violin-img", {
    scaleX: -1,
    duration: 0.2,
    ease: "power2.inOut"
  })

  // Slide left
  .to(".violin-img", {
    x: 480,
    duration: 2,
    ease: "sine.inOut"
  })

  // Flip to face right
  .to(".violin-img", {
    scaleX: 1,
    duration: 0.2,
    ease: "power2.inOut"
  });


  
  // VIOLIN IMAGE CROSSFADE
const images = gsap.utils.toArray(".violin-img");

gsap.set(images, { opacity: 0 });
gsap.set(images[0], { opacity: 1 });

const imageTimeline = gsap.timeline({
  repeat: -1
});

images.forEach((img, index) => {
  const next = images[(index + 1) % images.length];

  imageTimeline.to({}, { duration: 3 });

  imageTimeline.to(img, {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut"
  });

  imageTimeline.to(next, {
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut"
  }, "<");
});