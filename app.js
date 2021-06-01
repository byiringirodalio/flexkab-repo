const data = [
  {
    img:
      "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
  },
  {
    img:
      "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg",
  },
  {
    img:
      "https://format-com-cld-res.cloudinary.com/image/private/s--giSHfbSV--/c_limit,g_center,h_65535,w_550/fl_keep_iptc.progressive,q_95/v1/5731bdb645bac6a81896feb9013d4388/_MG_9783.jpg?550",
  },
];
const prevBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");
const image = document.getElementById("person-image");
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = data[currentItem];
  image.src = item.img;
});

function showPicture(picture) {
  const item = data[picture];
  image.src = item.img;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPicture(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPicture(currentItem);
});
