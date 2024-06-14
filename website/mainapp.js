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
  const loading = document.getElementById("loading");
  loading.innerHTML = `<h1 class="loading">Loading</h1>`;
  const cardContainer = document.getElementById("card-container");
  //Api token fetching ,from different root
  const _0x4fa59d = _0x1546;
  (function (_0x5e22d9, _0x4a9d87) {
    const _0xe739c1 = _0x1546,
      _0x469b9e = _0x5e22d9();
    while (!![]) {
      try {
        const _0x2ed836 =
          -parseInt(_0xe739c1(0xef)) / 0x1 +
          -parseInt(_0xe739c1(0xec)) / 0x2 +
          parseInt(_0xe739c1(0xe4)) / 0x3 +
          (-parseInt(_0xe739c1(0xeb)) / 0x4) *
            (parseInt(_0xe739c1(0xed)) / 0x5) +
          (parseInt(_0xe739c1(0xe6)) / 0x6) *
            (-parseInt(_0xe739c1(0xf1)) / 0x7) +
          -parseInt(_0xe739c1(0xea)) / 0x8 +
          (parseInt(_0xe739c1(0xee)) / 0x9) * (parseInt(_0xe739c1(0xe9)) / 0xa);
        if (_0x2ed836 === _0x4a9d87) break;
        else _0x469b9e["push"](_0x469b9e["shift"]());
      } catch (_0x1b8abe) {
        _0x469b9e["push"](_0x469b9e["shift"]());
      }
    }
  })(_0x1b09, 0xd08d8);
  const apiUrl = _0x4fa59d(0xe5);
  function _0x1546(_0x40e8f3, _0x4fc182) {
    const _0x1b0963 = _0x1b09();
    return (
      (_0x1546 = function (_0x154650, _0x55d8c2) {
        _0x154650 = _0x154650 - 0xe3;
        let _0x5afe47 = _0x1b0963[_0x154650];
        return _0x5afe47;
      }),
      _0x1546(_0x40e8f3, _0x4fc182)
    );
  }
  async function getkey() {
    const _0x2daa18 = _0x4fa59d;
    try {
      const _0x5bab4e = await fetch(apiUrl);
      if (!_0x5bab4e["ok"]) throw new Error(_0x2daa18(0xe8));
      const _0x30a293 = await _0x5bab4e[_0x2daa18(0xe3)]();
      return _0x30a293["apik"][0x0][_0x2daa18(0xf0)];
    } catch (_0x2f1698) {
      console[_0x2daa18(0xf2)](_0x2daa18(0xe7), _0x2f1698);
    }
  }
  const token = await getkey();
  function _0x1b09() {
    const _0x81df8c = [
      "189BJxViq",
      "25984VRfZrs",
      "apikey",
      "7HMDlcJ",
      "error",
      "json",
      "1483971ONsjjD",
      "https://script.googleusercontent.com/macros/echo?user_content_key=zNbMh9qAQKR2wM3sl_1JSqCjsB2WbTo3VBuJqrOQC59Olh1O_WwE4PYwwJZdP9GBwEPg5zeXX4qjNoFK_T6KhxKqcQslXWwIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDvmf3ELyOtxtmXBv_oWbRsI8Wo8f6bUD8Cm__cnB-x36o40mmHJLKyUrh7eq3w7bg31shMIC1dI5-QsXEkR6DGZimDq1ZXxqtz9Jw9Md8uu&lib=MyKXjCfQbtx5OyXvXt3HHvbRoTJXMhXuF",
      "5898252CRCjpI",
      "Error\x20fetching\x20data:",
      "Network\x20response\x20was\x20not\x20ok",
      "2081380wEYjzT",
      "10733728IjVfTV",
      "248604zdeFtv",
      "1083726PQiPMW",
      "90DiIStF",
    ];
    _0x1b09 = function () {
      return _0x81df8c;
    };
    return _0x1b09();
  }
  function fetchGitHubData(url) {
    const loading1 = document.getElementById("loading1");
    loading.innerHTML = `<h1 class="loading">Loading</h1>`;

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
          const loading2 = document.getElementById("card-container");
          loading2.innerHTML = " ";
          loading1.innerHTML = ``;
          loading.innerHTML = ``;
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

let originalCards = [];

function filterCards() {
  const input = document.querySelector(".search-input");
  const val = input.value.toLowerCase();
  const cardContainer = document.getElementById("card-container");

  // Populate originalCards if empty
  if (originalCards.length === 0) {
    originalCards = Array.from(document.querySelectorAll(".card"));
  }

  // Filter and sort cards from the original set of cards
  const filteredCards = originalCards
    .filter((card) => {
      const title = card.querySelector("p").textContent.toLowerCase();
      return title.includes(val);
    })
    .sort((a, b) => {
      const titleA = a.querySelector("p").textContent.toLowerCase();
      const titleB = b.querySelector("p").textContent.toLowerCase();
      return titleA.localeCompare(titleB);
    });

  // Clear the container
  cardContainer.innerHTML = "";

  // Append filtered and sorted cards with 10px left margin
  filteredCards.forEach((card) => {
    card.style.marginLeft = "85px";
    cardContainer.appendChild(card);
  });

  // To check if any cards are displayed

// Ensure the filterCards function runs initially after DOM content is loaded
document.addEventListener("DOMContentLoaded", filterCards);

// LOTTIE ANIMATION

// Load Lottie animation
var animation = lottie.loadAnimation({
	container: document.getElementById("lottie-animation"),
	path: "./assets/workflowlottie.json",
	renderer: "svg", // Render type
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
});
window.addEventListener("resize", function () {
	var container = document.getElementById("lottie-animation");
	container.style.width = "100%";
	container.style.height = "100%";
});

// fucntionality to tackle the light/dark mode toggle option.
document.addEventListener("DOMContentLoaded", () => {

  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggleButton.checked = true;
  }

  themeToggleButton.addEventListener("change", () => {
    body.classList.toggle("light-mode");

    // Save theme preference
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  });

});


// ----------Toggle Scroll Bar ------------

window.addEventListener("scroll", () => {
	showScroll();
});

document.addEventListener("DOMContentLoaded", () => {
	hideScroll();
});

const onScrollStop = (showScroll) => {
	let scrolling;
	window.addEventListener(
		"scroll",
		() => {
			clearTimeout(scrolling);
			scrolling = setTimeout(() => {
				showScroll();
			}, 500);
		},
		false
	);
};

onScrollStop(() => {
	hideScroll();
});

function showScroll() {
	let web = document.querySelector("body");
	web.classList.remove("hide-scroll");
}

function hideScroll() {
	let web = document.querySelector("body");
	web.classList.add("hide-scroll");
}

// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show or hide the button based on the scroll position
function handleScroll() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add click event listener
scrollToTopBtn.addEventListener('click', scrollToTop);

