import { api } from "/projets/3_fisheye/scripts/api/api.js";
import { showPhotographerInfo } from "/projets/3_fisheye/scripts/functions/showPhotographerInfo.js";
import { printPhotographerMedia } from "/projets/3_fisheye/scripts/functions/printPhotographerMedia.js"
import { createForm } from "/projets/3_fisheye/scripts/functions/createForm.js";
import { createLightbox } from "/projets/3_fisheye/scripts/functions/createLightBox.js";
import { filterMedia } from "/projets/3_fisheye/scripts/functions/filteredMedia.js";
import { mediaFactory } from "/projets/3_fisheye/scripts/factories/mediaFactory.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

//Récupération des données
const { media, photographers } = await api();

//Sélection du photographe
const photographer = photographers.find(p => p.id == id);

//Sélection des médias du photographe
const medias = media.filter(m => m.photographerId == id).map(m => mediaFactory(m));

//Affichage des infos du photographe
showPhotographerInfo(photographer);

//Création du formulaire avec selection du photographe
createForm(photographer);

//Création de la lightBox
createLightbox();

//Affichage en fonction de la sélection du filtre de tri
filterMedia(medias);

//Affichage de l'encart total de likes et prix par jour
printPhotographerMedia(medias, photographer);

//Affichage de l'encart total likes et prix photographe
printPhotographerSection(medias);

function printPhotographerSection(medias) {
  const main = document.querySelector("main");
  const encart = document.createElement("div");
  encart.setAttribute("class", "like_price");
  let totalLikes = 0;
  medias.map(e => totalLikes = totalLikes + parseInt(e.likes))
  encart.innerHTML = `
   <div class="likes">
     <p class="total_likes">${totalLikes}</p>
     <i class="fa-sharp fa-solid fa-heart"></i>
   </div>
   <div class="user__price">
   <p>${photographer.price}€ / jour</p>
   </div>`
  main.appendChild(encart);
}