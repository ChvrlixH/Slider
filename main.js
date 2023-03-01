let pic = document.querySelector(".pic");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

const info = [
  {
    id: 1,
    img: "38589.jpg",
    title: "mountain",
    desc: "Witcher 3 Wild Hunt",
  },

  {
    id: 2,
    img: "45447.jpg",
    title: "galaxy",
    desc: "Star Wars",
  },
  {
    id: 3,
    img: "51799.jpg",
    title: "andromeda",
    desc: "Avatar",
  },
  {
    id: 4,
    img: "664621.jpg",
    title: "bergen",
    desc: "Rainy",
  },
];

next.addEventListener("click", () => {
  if (index == info.length - 1) {
    index = 0;
  } else {
    index++;
  }
  let infoImg = info[index].img;
  let infoTitle = info[index].title;
  let infoDesc = info[index].desc;

  pic.innerHTML = ` <div class="image"><img src="/${infoImg}" /></div> <br/>
                    <div class="title"><h2>${infoTitle}</h2></div> <br/>
                    <div class="desc"><h4>${infoDesc}</h4></div>`;
});

prev.addEventListener("click", () => {
  if (index == 0) {
    index = info.length - 1;
  } else {
    index--;
  }
  let infoImg = info[index].img;
  let infoTitle = info[index].title;
  let infoDesc = info[index].desc;

  pic.innerHTML = ` <div class="image"><img src="/${infoImg}" /></div> <br/>
                    <div class="title"><h2>${infoTitle}</h2></div> <br/>
                    <div class="desc"><h4>${infoDesc}</h4></div>`;
});
