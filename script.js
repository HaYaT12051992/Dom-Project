/* البيانات الأساسية */
const letters = ["A", "B", "C", "D"];
const numbers = ["1", "2", "3", "4"];
const colors = [
  { name: "Red", hex: "#e74c3c" },
  { name: "Blue", hex: "#3498db" },
  { name: "Green", hex: "#27ae60" },
  { name: "Yellow", hex: "#f1c40f" },
];
const animals = [
  { name: "Cat", img: "animals/cat.png", audio: "animals/Cat.mp3" },
  { name: "Dog", img: "animals/dog.png", audio: "animals/Dog.mp3" },
  { name: "Lion", img: "animals/lion.png", audio: "animals/Lion.mp3" },
  {
    name: "Elephant",
    img: "animals/elephant.png",
    audio: "animals/Elephant.mp3",
  },
];
const fruits = [
  { name: "Apple", img: "fruits/apple.jpeg", audio: "fruits/Apple.mp3" },
  {
    name: "Banana",
    img: "fruits/banana.jpeg",
    audio: "fruits/Banana.mp3",
  },
  {
    name: "Orange",
    img: "fruits/orange.jpeg",
    audio: "fruits/Orange.mp3",
  },
  {
    name: "Grapes",
    img: "fruits/grapes.jpeg",
    audio: "fruits/Grapes.mp3",
  },
];
const shapes = [
  {
    name: "Circle",
    img: "shapes/cercle.png",
    audio: "shapes/Circle.mp3",
  },
  {
    name: "Square",
    img: "shapes/square.png",
    audio: "shapes/Square.mp3",
  },
  {
    name: "Triangle",
    img: "shapes/triangle.png",
    audio: "shapes/Triangle.mp3",
  },
  { name: "Star", img: "shapes/star.png", audio: "shapes/Star.mp3" },
];

/* ألوان عشوائية للأطفال */
function getRandomColor() {
  const colors = [
    "#ff6f61",
    "#ffd54f",
    "#4fc3f7",
    "#81c784",
    "#ba68c8",
    "#ff8a65",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const clickSound = document.getElementById("click-sound");

/* دالة إنشاء العناصر */
function addItem(
  containerId,
  textId,
  imgId,
  audioId,
  data,
  getContent,
  getImage,
  getAudio
) {
  const container = document.getElementById(containerId);
  const textBox = document.getElementById(textId);
  const imgBox = document.getElementById(imgId);
  const audioBox = document.getElementById(audioId);

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.style.backgroundColor = getRandomColor();
    div.textContent = getContent(item);

    div.addEventListener("click", () => {
      textBox.textContent = getContent(item);
      imgBox.src = getImage(item);
      audioBox.src = getAudio(item);
      audioBox.play();

      clickSound.currentTime = 0;
      clickSound.play();
    });

    container.appendChild(div);
  });
}

/* إضافة العناصر لكل قسم */
addItem(
  "letters",
  "letters-text",
  "letters-img",
  "letters-audio",
  letters,
  (l) => `${l}`,
  (l) => `letters/${l}.png`,
  (l) => `letters/${l}.mp3`
);

addItem(
  "numbers",
  "numbers-text",
  "numbers-img",
  "numbers-audio",
  numbers,
  (n) => ` ${n}`,
  (n) => `numbers/${n}.png`,
  (n) => `numbers/${n}.mp3`
);

addItem(
  "colors",
  "colors-text",
  "colors-img",
  "colors-audio",
  colors,
  (c) => ` ${c.name}`,
  (c) => `colors/${c.name.toLowerCase()}.jpg`,
  (c) => `colors/${c.name.toUpperCase()}.mp3`
);

addItem(
  "animals",
  "animals-text",
  "animals-img",
  "animals-audio",
  animals,
  (a) => a.name,
  (a) => a.img,
  (a) => a.audio
);

addItem(
  "fruits",
  "fruits-text",
  "fruits-img",
  "fruits-audio",
  fruits,
  (f) => f.name,
  (f) => f.img,
  (f) => f.audio
);

addItem(
  "shapes",
  "shapes-text",
  "shapes-img",
  "shapes-audio",
  shapes,
  (s) => s.name,
  (s) => s.img,
  (s) => s.audio
);

/* النجوم المتحركة */
const starSound = document.getElementById("star-sound");

function createStars(num = 50) {
  for (let i = 0; i < num; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 10 + 5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = getRandomColor();
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(star);
  }
}
createStars();

/* تشغيل صوت النجوم بشكل عشوائي */
function playStarSoundRandomly() {
  const delay = Math.random() * 5000 + 2000;
  setTimeout(() => {
    starSound.currentTime = 0;
    starSound.play();
    playStarSoundRandomly();
  }, delay);
}
playStarSoundRandomly();
