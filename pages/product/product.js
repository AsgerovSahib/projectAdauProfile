const ItemId = window.location.hash;

const productBody = document.querySelector("#productBody");
const productTitle = document.querySelector("#productTitle");
const productDescription = document.querySelector("#productDescription");
const productImages = document.querySelector("#productImages");

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

    // Set title and description
    productTitle.innerHTML = response.data.data.name;
    productDescription.innerHTML = response.data.data.description;

    // Clear the productImages container
    productImages.innerHTML = "";

    // Loop through the images and append them
    response.data.data.images.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.style.maxWidth = "18rem";
      imgElement.alt = response.data.data.name; // Optional: Use a descriptive alt text
      productImages.appendChild(imgElement);
    });
  } catch (error) {
    console.error("There was an error!", error);
  }
}

renderProductDetail();
