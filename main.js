const openersMenu = document.querySelectorAll(".opener")
const menus = document.querySelectorAll(".menu")

// Menus toogle show
openersMenu.forEach((btn, n) => {
	btn.addEventListener("click", () => {
		let menu = btn.parentNode.querySelector(".menu")

		menus.forEach(nMenu => {
			if (nMenu.classList.contains("open") && nMenu !== menu) {
				nMenu.classList.remove("open")
			}
		})

		menu.classList.toggle("open")
	})
})


// Saves activation
const saves = document.querySelectorAll(".save")

saves.forEach(save => {
	save.addEventListener("click", () => {

		saves.forEach(i => {
			if (i.classList.contains("active") &&
				i !== save) {
				i.classList.remove("active")
			}
		})

		save.classList.toggle("active")
	})
})