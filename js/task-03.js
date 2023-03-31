const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// -------------------Варіант олдскул---------------------------

// const arrayImagesEl = images.map(({ url, alt }) => {
//   const itemEl = document.createElement('li')
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 400;
//   itemEl.append(imageEl)

//   return itemEl;
// }); 

// document.querySelector('.gallery').append(...arrayImagesEl);

// -------------------END варіант олдскул---------------------------

const arrayImagesEl = images.map(({ url, alt }) => {
  const itemEl = document.createElement('li');
  itemEl.insertAdjacentHTML("beforeend", `<img src="${url}" alt="${alt}">`);

  return itemEl;
});

document.querySelector('.gallery').append(...arrayImagesEl);

