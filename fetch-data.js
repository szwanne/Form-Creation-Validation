// const fetchUserData = async () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users";
//   const dataContainer = document.getElementById("api-data");
//   try {
//     const response = await fetch(apiUrl);
//     const users = await response.json(); //This will await for json parsing

//     dataContainer.innerHTML = ""; //Clear the loading message

//     const userList = document.createElement("ul");

//     users.forEach((user) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = user.username;
//       userList.appendChild(listItem); //This will append to unordered list
//     });
//     dataContainer.appendChild(userList);
//   } catch (error) {
//     dataContainer.innerHTML = "Failed to load user data.";
//     console.error("Error fetching user data: error");
//   }
// };

// document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json(); //This will await for json parsing

    dataContainer.innerHTML = ""; //Clear the loading message

    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.username;
      userList.appendChild(listItem); //This will append to unordered list
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data: error");
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
