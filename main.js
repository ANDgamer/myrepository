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
const saveBtns = document.querySelectorAll(".save_main-body h2")

saveBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		const save = btn.closest(".save")

		saveBtns.forEach(i => {
			const nSave = i.closest(".save")
			if (nSave.classList.contains("active") &&
				nSave !== save) {
				nSave.classList.remove("active")
			}
		})

		if (!save.classList.contains("active")) {
			save.classList.add("active")
		}
	})
})