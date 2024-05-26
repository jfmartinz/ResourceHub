// document.addEventListener("DOMContentLoaded", function () {
//   const cardContainer = document.getElementById("card-container");

//   function fetchGitHubData(url, token) {
//     fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (response.status === 403) {
//           const retryAfter = parseInt(response.headers.get("Retry-After"));
//           if (retryAfter) {
//             console.log(`Rate limit exceeded. Retrying after ${retryAfter} seconds.`);
//             setTimeout(() => fetchGitHubData(url, token), retryAfter * 1000);
//           } else {
//             console.error("Rate limit exceeded. No Retry-After header present.");
//           }
//         } else if (!response.ok) {
//           loading.innerHTML = `
//             <p style="font-size: x-large;">Error while fetching...  <button onclick="window.location.reload()">Retry</button> </p>`;
//           throw new Error(`HTTP error! status: ${response.status}`);
//         } else {
//           const loading = document.getElementById("card-container");
//           loading.innerHTML = " ";
//           return response.json();
//         }
//       })
//       .then((data) => {
//         if (data) {
//           const extensionlessFiles = data.filter((file) => {
//             const isLicense = file.name.toUpperCase() === "LICENSE";
//             const isImage = file.name.toLowerCase() === "images";
//             const isWebsite = file.name.toLowerCase() === "website";
//             return (!file.name.includes(".") && !isLicense && !isImage && !isWebsite);
//           });
//           extensionlessFiles.forEach((file) => {
//             fetch(`https://api.github.com/repos/jfmartinz/ResourceHub/contents/${file.path}/readme.md`, {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             })
//               .then((readmeResponse) => readmeResponse.json())
//               .then((readmeData) => {
//                 const card = document.createElement("div");
//                 card.className = "card";
//                 card.innerHTML = `
//                   <div class="card-content">
//                     <p>${file.name}</p>
//                   </div>
//                 `;
//                 card.onclick = function () {
//                   sessionStorage.setItem("readmeContent", atob(readmeData.content));
//                   sessionStorage.setItem("filename", file.name);
//                   window.location.href = "content-display.html";
//                 };
//                 cardContainer.appendChild(card);
//               })
//               .catch((readmeError) => console.error("Error fetching README: ", readmeError));
//           });
//         }
//       })
//       .catch((error) => console.error("Error fetching data: ", error));
//   }

//   // Fetch the API token from the server and then fetch GitHub data
//   fetch('http://localhost:3000/api/token') // Ensure the correct endpoint
//     .then(response => response.json())
//     .then(data => {
//       const token = data.token;
//       fetchGitHubData("https://api.github.com/repos/jfmartinz/ResourceHub/contents/", token);
//     })
//     .catch(error => console.error("Error fetching token: ", error));
// });

// function filterCards() {
//   const input = document.querySelector(".search-input");
//   const val = input.value.toLowerCase();
//   const cards = document.querySelectorAll(".card");
//   cards.forEach((card) => {
//     const title = card.querySelector("p").textContent.toLowerCase();
//     if (title.includes(val)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

//  OLD CODE

// script.js
document.addEventListener("DOMContentLoaded", async function () {
  const loading = document.getElementById("card-container");
  loading.innerHTML = `
                    <p class="classic-4">Loading....</p>
                
                `;
  const cardContainer = document.getElementById("card-container");
  // Function to fetch GitHub data
  const apiUrl =
    "https://script.googleusercontent.com/macros/echo?user_content_key=SOnBnlAhhwAY2lLH5HfppGmJGT_2ps5V6IQnMqMGBXbQfQRkZzw_v_5iRGG0aocf2N5fb1QagfriAH_KtdGjmF5EZ-d2l64Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC62rQSNc23BPEU_1j4s8hh_HP6kAPpX9xtypcE4mPgzpikbBkSG4MZLP8aImUTewbmUkdfzbTtyUarIvNXMDMKXAagsogLIsQ&lib=MghKih2WtI3ppVHa2nSvtXXt7vnFOnL-L";

  async function getkey() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.apik[0].apikey;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const token = await getkey();
  function fetchGitHubData(url) {
    // Replace with your actual token
    // const token = " Your API_KEY"; // Replace with your actual token
    // Call the function

    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 403) {
          // If rate limit exceeded, parse the Retry-After header to calculate wait time
          const retryAfter = parseInt(response.headers.get("Retry-After"));
          if (retryAfter) {
            console.log(
              `Rate limit exceeded. Retrying after ${retryAfter} seconds.`
            );
            setTimeout(() => fetchGitHubData(url), retryAfter * 1000);
          } else {
            console.error(
              "Rate limit exceeded. No Retry-After header present."
            );
          }
        } else if (!response.ok) {
          loading.innerHTML = `
            <p style="font-size: x-large;">Error while fetching...  <button onclick="window.location.reload()">Retry</button> </p>`;
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const loading = document.getElementById("card-container");
          loading.innerHTML = " ";
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          // Process the data
          const extensionlessFiles = data.filter((file) => {
            // Exclude files with extensions and specific filenames like 'LICENSE'
            const isLicense = file.name.toUpperCase() === "LICENSE";
            const isImage = file.name.toLowerCase() === "images";
            const iswebsite = file.name.toLowerCase() === "website";
            return (
              !file.name.includes(".") && !isLicense && !isImage && !iswebsite
            );
          });
          extensionlessFiles.forEach((file) => {
            // Fetch README data for each file
            fetch(
              `https://api.github.com/repos/jfmartinz/ResourceHub/contents/${file.path}/readme.md`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
              .then((readmeResponse) => readmeResponse.json())
              .then((readmeData) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                  <div class="card-content">
                    <p>${file.name}</p>
                  </div>
                `;
                // Modify the click event for each card
                card.onclick = function () {
                  // Save README content in sessionStorage
                  sessionStorage.setItem(
                    "readmeContent",
                    atob(readmeData.content)
                  );
                  sessionStorage.setItem("filename", file.name);
                  // Open the content-display.html page
                  window.location.href = "content-display.html";
                };
                cardContainer.appendChild(card);
              })
              .catch((readmeError) =>
                console.error("Error fetching README: ", readmeError)
              );
          });
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }

  // Initial fetch call
  fetchGitHubData(
    "https://api.github.com/repos/jfmartinz/ResourceHub/contents/"
  );
});
function filterCards() {
  const input = document.querySelector(".search-input");
  const val = input.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const title = card.querySelector("p").textContent.toLowerCase();
    if (title.includes(val)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
