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
      (item) => item.category == "Useful Links"
    );
    console.log("filteredDAta", filteredDAta);
    cardBody.innerHTML += filteredDAta.reverse().map(
      (item) =>
        `   <div>
        <div>
          <h5 class="h3"  style="color: rgb(107,145,27);"">
          <b> ${item.name}</b>
         </h5>
          <p class="h3">
            ${item.description.slice(0, 0)}
          </p>
             <p class="h5">
            ${item.description}
          </p>
          <a href="${item.link}" class="btn btn-success">click for link</a>
        </div>
      </div>`
    );
  } catch (error) {
    console.error("There was an error!", error);
  }
}

renderCard();
