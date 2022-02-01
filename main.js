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

//TODO: HACK YOU ASS Two Times