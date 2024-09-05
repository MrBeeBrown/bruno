import { Image } from "/projets/3_fisheye/scripts/Models/Image.js";
import { Video } from "/projets/3_fisheye/scripts/Models/Video.js";

export const mediaFactory = (media) => {
  if (media.image) {
    return new Image(media);
  } else {
    return new Video(media);
  }
}