const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
  // try {
  //   const data = await fetch(BASE_URL);
  //   const json = await data.json();

  //   return json.webpurl;
  // } catch (e) {
  //   console.log(e.message);
  // }
  // bloco try/catch equivalente ao código abaixo

  const json = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));

  return json.webpurl;
};

const loadImg = async () => {
  catImg.src = await getCats();
};

catBtn.addEventListener("click", loadImg);

loadImg();
