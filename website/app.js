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
  <p class="classic-4 text-white font-semibold text-center text-2xl ">Loading....</p>

                `;
  const cardContainer = document.getElementById("card-container");
  // Function to fetch GitHub data
  const apiUrl =
    "https://script.googleusercontent.com/macros/echo?user_content_key=zNbMh9qAQKR2wM3sl_1JSqCjsB2WbTo3VBuJqrOQC59Olh1O_WwE4PYwwJZdP9GBwEPg5zeXX4qjNoFK_T6KhxKqcQslXWwIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDvmf3ELyOtxtmXBv_oWbRsI8Wo8f6bUD8Cm__cnB-x36o40mmHJLKyUrh7eq3w7bg31shMIC1dI5-QsXEkR6DGZimDq1ZXxqtz9Jw9Md8uu&lib=MyKXjCfQbtx5OyXvXt3HHvbRoTJXMhXuF";

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
    const loading = document.getElementById("card-container");
    loading.innerHTML = `
                    <p class="classic-4 text-white font-semibold text-center text-2xl ">Loading....</p>

                `;

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
              //DONT CHANGE THE CLASSNAMES FOR THE CARDS AND PARAGRAPH
              .then((readmeResponse) => readmeResponse.json())
              .then((readmeData) => {
                const card = document.createElement("div");
                card.className = "card-content hover:text-black ";
                card.innerHTML = `
                <div class="card hover:text-black glow-on-hover">
                <p class="font-semibold z-10 text-center hover:text-black text-xs sm:text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-neutral-300">${file.name}</p>

                </div>
                `;
                // Modify the click event for each card
                if (readmeData.message != "Not Found")
                  card.onclick = function () {
                    console.log(readmeData);

                    // Save README content in sessionStorage
                    sessionStorage.setItem(
                      "readmeContent",
                      atob(readmeData.content)
                    );
                    sessionStorage.setItem("filename", file.name);
                    // Open the content-display.html page
                    window.location.href = "content-display.html";
                  };
                else
                  card.onclick = function () {
                    console.log("Not Found");
                    fetchGitHubData(
                      `https://api.github.com/repos/jfmartinz/ResourceHub/contents/${file.path}/`
                    );
                    // window.location.reload();
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


// LOTTIE ANIMATION


// Load Lottie animation
var animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  path: './assets/workflowlottie.json',
  renderer: 'svg', // Render type
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});


window.addEventListener('resize', function () {
  var container = document.getElementById('lottie-animation');
  container.style.width = '100%';
  container.style.height = '100%';
});

// fucntionality to tackle the light/dark mode toggle option.
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
      themeToggleButton.checked = true;
  }

  themeToggleButton.addEventListener('change', () => {
      body.classList.toggle('light-mode');

      // Save theme preference
      if (body.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light');
      } else {
          localStorage.removeItem('theme');
      }
  });
});
