let data = false;
//Récupération des infos du fichier photographer.json
export const api = () => {
  if (!data) {
    data = fetch("/projets/3_fisheye/data/photographers.json")
      .then(response => response.json())
      .catch(error => console.log(error));
    return data;
  } else {
    return data;
  }
};