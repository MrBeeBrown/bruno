import { Media } from "/projets/3_fisheye/scripts/Models/Media.js"

export class Video extends Media {
  constructor(data) {
    super(data)
    this.video = data.video
  }

  print() {
    //Affichage sur la page du photographe
    const div_content = document.querySelector(".content");
    const photographeContent = document.createElement("div");
    photographeContent.setAttribute("class", "media");
    photographeContent.innerHTML = `
    <a href="#" data-title="${this.title}" title="${this.title}" class="lightbox_link">
      <video class="lightbox_media">
			  <source src="/projets/3_fisheye/assets/images/${this.video}" type="video/mp4">
		  </video>
    </a>
		<div class="media_infos">
			<div class="header_title">${this.title}</div>
			<div class="header_like">
				<p class="${this.id}">${this.likes}</p>
				<a href="#" id="${this.id}"  class="heart_links">
          <i class="fa-sharp fa-solid fa-heart" title="likes"></i>
        </a>
			</div>
		</div>`;
    div_content.appendChild(photographeContent);

    //Affichage dans la lightbox
    const lightbox = document.querySelector(".lightBox_data");
    const lightboxContent = document.createElement("div");
    lightboxContent.setAttribute("class", "media_filter");
    lightboxContent.setAttribute("hidden", "");
    lightboxContent.innerHTML = `
		<video controls="" alt="${this.title}">
			<source src="/projets/3_fisheye/assets/images/${this.video}" type="video/mp4"  title="video closeup view">
		</video>
		<div class="media_infos_lbox">
			<div class="header_title_lbox">${this.title}</div>
		</div>`;
    lightbox.appendChild(lightboxContent);
  }
}