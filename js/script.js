const usernameInput = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetch-btn");
const profileContainer = document.querySelector("#profile");

fetchBtn.addEventListener("click", async () => {
  const username = usernameInput.value;
  if (!username) {
    alert("Please enter github username");
    return;
  }

  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    console.log(data);
    profileContainer.innerHTML = `
      <h2>${data.login}</h2>
      <img src="${data.avatar_url}" alt="${data.login}'s avatar">
      <p>Name: ${data.name || "N/A"}</p>
      <p>Location: ${data.location || "N/A"}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
    `;
  } catch (error) {
    profileContainer.innerHTML = "<h1>User not found</h1>";
  }
});
