const ItemId = window.location.hash;

const productBody = document.querySelector("#productBody");

let id = window.location.hash.slice(4, ItemId.length);
async function renderProductDetail() {
  try {
    const response = await axios.get(
      `https://deeppink-emu-468932.hostingersite.com/item/${id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    console.log(response.data.data);
    // productBody.innerHTML = `salam`;
  } catch (error) {
    console.error("There was an error!", error);
  }
}
renderProductDetail();
