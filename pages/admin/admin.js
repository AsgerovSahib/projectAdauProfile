const submitButton = document.querySelector("#submitButton");
const imageInput = document.querySelector("#imageInput");

let imageNamesArray = [];

imageInput.addEventListener("change", function () {
  imageNamesArray = Array.from(imageInput.files).map((file) => file.name);
});

// submitButton.addEventListener("click", async function () {
//   const headerInput = document.querySelector("#headerInput").value;
//   const DescriptionInput = document.querySelector("#DescriptionInput").value;
//   const dateİnput = document.querySelector("#dateİnput").value;

//   if (
//     headerInput == "" ||
//     DescriptionInput == "" ||
//     dateİnput == "" ||
//     imageNamesArray.length == 0
//   ) {
//     alert("Dataları tam yazın zəhmət olmasa | boşluqları doldurun ");
//   } else {
//     let data = {
//       name: headerInput,
//       description: DescriptionInput,
//       images: imageNamesArray,
//       created_at: dateİnput,
//     };
//     console.log(data);
//     const send_api = await fetch(
//       `https://deeppink-emu-468932.hostingersite.com/item`,
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     let response = await send_api.json();
//     console.log("response", response);
//   }
// });

submitButton.addEventListener("click", async function () {
  const headerInput = document.querySelector("#headerInput").value;
  const DescriptionInput = document.querySelector("#DescriptionInput").value;
  const dateInput = document.querySelector("#dateİnput").value; // Fixed a potential typo

  if (
    headerInput == "" ||
    DescriptionInput == "" ||
    dateInput == "" ||
    imageNamesArray.length == 0
  ) {
    alert("Dataları tam yazın zəhmət olmasa | boşluqları doldurun ");
  } else {
    let data = {
      name: headerInput,
      description: DescriptionInput,
      images: imageNamesArray,
      created_at: dateInput,
    };

    try {
      const send_api = await fetch(
        `https://deeppink-emu-468932.hostingersite.com/item`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json", // Ensure this header is set
          },
          body: JSON.stringify(data),
          mode: "no-cors",
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data)) // Check for error messages here
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("An error occurred. Please check the console for details.");
    }
  }
});
