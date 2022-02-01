const btns = [".fa-bars", ".fa-plus"]
const menus = [".menu__wrapper", ".plus__wrapper"]

btns.forEach((i, n) => {
	let btn = document.querySelector(i)
	btn.addEventListener("click", () => {
		let menu = document.querySelector(menus[n])

		menus.forEach(s => {
			let iMenu = document.querySelector(s)

			if (iMenu.classList.contains("open") && s !== menus[n]) {
				iMenu.classList.remove("open")
			}
		})

		menu.classList.toggle("open")
	})
})

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