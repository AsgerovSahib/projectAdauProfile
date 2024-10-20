const ItemId = window.location.hash;

const productBody = document.querySelector("#productBody");
const productTitle = document.querySelector("#productTitle");
const productDescription = document.querySelector("#productDescription");
const productImages = document.querySelector("#productImages");
const productlink = document.querySelector("#productlink");
const productData = document.querySelector("#productData");

console.log("productlink", productlink);

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
    // console.log(response.data.data);

    // Başlık ve açıklama ayarlama
    productTitle.innerHTML = response.data.data.name;
    productDescription.innerHTML = response.data.data.description;

    // Link kontrolü
    if (response.data.data.link == "#") {
      productlink.style.display = "none";
    } else {
      productlink.href = response.data.data.link;
    }

    // Tarih formatlama
    const date = new Date(response.data.data.created_at);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);

    // Takvim ikonlu tarih formatı
    productData.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${formattedDate}`;

    // Resimlerin temizlenmesi ve eklenmesi
    productImages.innerHTML = "";
    response.data.data.images.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.style.maxWidth = "18rem";
      imgElement.alt = response.data.data.name; 
      productImages.appendChild(imgElement);
    });
  } catch (error) {
    console.error("There was an error!", error);
  }
}

renderProductDetail();
