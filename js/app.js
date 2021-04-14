const menuItem = document.querySelector(".menu");

menuItem.addEventListener("click", () => {
    document
        .querySelectorAll(".target")
        .forEach(item => item.classList.toggle("change"));
});
