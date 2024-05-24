// script.js
document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("card-container");

  // Function to fetch GitHub data
  function fetchGitHubData(url) {
    // const token = " Your API_KEY"; // Replace with your actual token

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
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
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
