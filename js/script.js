const usernameInput = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetch-btn");
const profileContainer = document.querySelector("#profile");
const profileImg = document.querySelector("#profile-img");
const profileUsername = document.querySelector("#profile-info h2");
const profileName = document.querySelector("#profile-info h3");
const profileLink = document.querySelector("#profile-link");
const notFound = document.querySelector("#not-found");

fetchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = usernameInput.value;

  if (!username) {
    alert("Please enter a GitHub username.");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      hideProfile();
      showNotFound();
    } else {
      hideNotFound();
      const data = await response.json();
      displayUserProfile(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

function hideProfile() {
  profileContainer.classList.remove("show");
  profileContainer.classList.add("hide");
}

function showNotFound() {
  notFound.classList.add("show");
}

function hideNotFound() {
  notFound.classList.remove("show");
  notFound.classList.add("hide");
}

function displayUserProfile(data) {
  profileContainer.classList.add("show");
  profileImg.style.backgroundImage = `url(${data.avatar_url})`;
  profileUsername.textContent = data.login;
  profileName.textContent = data.name || "N/A";
  profileLink.setAttribute("href", data.html_url);
}
