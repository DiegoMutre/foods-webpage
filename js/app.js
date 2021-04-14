function toggleMenu() {
    const menuItem = document.querySelector(".menu");

    menuItem.addEventListener("click", () => {
        document
            .querySelectorAll(".target")
            .forEach(item => item.classList.toggle("change"));
    });
}

function changeIcon() {
    let counter = 1;
    const icons = document.querySelectorAll(".section-1-icons i");

    setInterval(() => {
        counter++;
        console.log(icons.length);
        const activeIcon = document.querySelector(".section-1-icons i.change");
        activeIcon.classList.remove("change");
        if (counter > icons.length) {
            icons[0].classList.add("change");
            counter = 1;
            return;
        }
        activeIcon.nextElementSibling.classList.add("change");
    }, 4000);
}

toggleMenu();
changeIcon();
