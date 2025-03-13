const { default: Axios } = require("axios");

async function getUser() {
  try {
    const response = await Axios.get("https://api.github.com/users/octocat");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
