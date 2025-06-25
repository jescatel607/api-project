const apiURL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

const fetchData = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    // Example: Show the data in the HTML
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// 👇 This part waits until the page is fully loaded before running the event listener
window.onload = () => {
  document.getElementById("fetchData").addEventListener("click", fetchData);
};
