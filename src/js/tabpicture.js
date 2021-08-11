const filterNav = document.querySelector(".img__navbar");
const filterImg = document.querySelectorAll(".img__product--item");

window.onload = () => {
  filterNav.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("img__navbar--list")) {
      filterNav.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-filter");
      console.log(filterName);
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-filter");
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
};
