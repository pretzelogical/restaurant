const displayManager = (() => {
  const display = document.querySelector(".displayArea");
  const homeButton = document.querySelector(".homeButton");
  const menuButton = document.querySelector(".menuButton");
  const infoButton = document.querySelector(".infoButton");

  let currentState;

  const stateList = {
    homePage: "HOME_PAGE",
    menuPage: "MENU_PAGE",
    infoPage: "INFO_PAGE",
  };

  const clearDisplay = () => {
    while (display.lastChild) {
      display.removeChild(display.lastChild);
    }
  };

  const updatePage = () => {};

  const testPage = () => {
    const testHeader = document.createElement("h2");
    testHeader.textContent = "Test page";
    testHeader.style.textAlign = "center";
    display.appendChild(testHeader);
  };

  const init = () => {
    homeButton.style.backgroundColor = "red";
    currentState = stateList.homePage;
    console.log(currentState);
    homeButton.addEventListener("click", clearDisplay);
    menuButton.addEventListener("click", testPage);
  };
  return { init };
})();

displayManager.init();
