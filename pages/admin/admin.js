const submitButton = document.querySelector("#submitButton");
const imageInput = document.querySelector("#imageInput");

submitButton.addEventListener("click", async function () {
  const headerInput = document.querySelector("#headerInput").value;
  const DescriptionInput = document.querySelector("#DescriptionInput").value;
  const dateInput = document.querySelector("#dateInput").value;

  if (
    headerInput === "" ||
    DescriptionInput === "" ||
    dateInput === "" ||
    imageInput.files.length === 0
  ) {
    alert("Dataları tam yazın zəhmət olmasa | boşluqları doldurun ");
  } else {
    let formData = new FormData();
    formData.append("name", headerInput);
    formData.append("description", DescriptionInput);
    formData.append("created_at", dateInput);

    Array.from(imageInput.files).forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });

    try {
      const response = await axios.post(
        "https://deeppink-emu-468932.hostingersite.com/item",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      if (response.status == 201 || response.status == 200) {
        myFunction();
        document.querySelector("#headerInput").value = "";
        document.querySelector("#DescriptionInput").value = "";
        document.querySelector("#dateInput").value = "";
        document.querySelector("#imageInput").value = "";
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  }
});

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 6000);
}
