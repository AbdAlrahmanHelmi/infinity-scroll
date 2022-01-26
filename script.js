const imageContainer = document.getElementById(`image-container`);
const loader = document.getElementById(`loader`);

let photoArray = [];
function creatNewPhoto() {
  let randomNumber = Math.floor(Math.random() * 1000);

  let unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
  photoArray.push(unsplashURL);

  randomNumber += randomNumber;
  unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;

  photoArray.push(unsplashURL);
  randomNumber += randomNumber;
  unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
  photoArray.push(unsplashURL);
  randomNumber += randomNumber;
  unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
  photoArray.push(unsplashURL);
  randomNumber += randomNumber;
  unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
  photoArray.push(unsplashURL);
  randomNumber += randomNumber;
  unsplashURL = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
  photoArray.push(unsplashURL);
}
creatNewPhoto();
const displayPhoto = function () {
  photoArray.forEach((photo) => {
    const item = document.createElement(`a`);
    item.setAttribute(`href`, photo);
    item.setAttribute(`target`, `_blank`);
    const img = document.createElement(`img`);
    img.setAttribute(`src`, photo);
    img.setAttribute(`alt`, `random photo`);
    img.setAttribute(`title`, `random photo`);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};
creatNewPhoto();
window.addEventListener(`scroll`, () => {
  creatNewPhoto();
  displayPhoto();
});
creatNewPhoto();
