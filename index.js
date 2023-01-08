const img = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg"
];

const queryImg = document.querySelector("#dethi");

const rd = Math.floor(Math.random() * img.length);

queryImg.src = img[rd];
