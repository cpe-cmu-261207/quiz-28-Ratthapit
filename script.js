//const Ran = document.getElementById("btn-random");

//Ran.onclick = () => {
callApi();
//};

const { default: axios } = require("axios");

async function callApi() {
  try {
    const resp = await axios.get("https://randomuser.me/api/");
    console.log(resp.data);
  } catch (err) {
    console.log(err.message);
  }
}
