const cardBody = document.querySelector("#cardBody");
async function renderCard() {
  try {
    const response = await axios.get(
      "https://deeppink-emu-468932.hostingersite.com/item",
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    console.log(response.data.data);
    let filteredDAta = response.data.data.filter(
      (item) => item.category == "Climate Action Plan"
    );
    console.log("filteredDAta", filteredDAta);

    cardBody.innerHTML += filteredDAta.reverse().map(
      (item) =>
        `   <div class="card" style="width: 18rem">
            <img
              src="${item.images[0]}"
              class="card-img-top"
              alt="..."
              style="height: 200px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">
                ${item.description.slice(0, 60)}
              </p>
              <a href="../product/product.html#id=${
                item.id
              }" class="btn btn-success">More</a>
            </div>
          </div>`
    );
  } catch (error) {
    console.error("There was an error!", error);
  }
}

renderCard();
