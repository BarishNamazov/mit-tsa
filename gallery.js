const images = [
  {
    url: '/gallery/berkin_kumpir.jpg',
    date: "September 28, 2023",
    description: "TSA Kumpir Night (featuring Berkin '24 in the photo)"
  },
  {
    url: '/gallery/23nisan_2022.jpg',
    date: 'April 23, 2022',
    description: "TSA gathered for National Sovereignty and Children's Day"
  },
];

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const gallery = $("#gallery");
const galleryTemplate = $("#gallery-template");

images.forEach((image) => {
  const imageNode = galleryTemplate.content.cloneNode(true);
  imageNode.querySelector(".gallery-image").src = image.url;
  imageNode.querySelector(".gallery-image").alt = image.description;
  imageNode.querySelector(".gallery-image").title = image.description;
  imageNode.querySelector(".gallery-date").textContent = image.date;
  imageNode.querySelector(".gallery-text").textContent = image.description;
  gallery.appendChild(imageNode);
});