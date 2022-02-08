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
	save.addEventListener("click", (e) => {

		if (e.target.tagName === "BUTTON") return

		saves.forEach(i => {
			if (i.classList.contains("active") &&
				i !== save) {
				i.classList.remove("active")
			}
		})
		if (save.classList.contains("active")) {
			save.classList.remove("active")
			save.classList.add("disactive")
			setTimeout(() => {
				save.classList.remove("disactive")
			}, 200)
			return
		}
		save.classList.toggle("active")
	})
})

window.addEventListener("click", (e) => {
	const targetMenu = e.target.closest(".menu")

	if (!e.target.classList.contains("opener") &&
		!targetMenu) {
		menus.forEach(m => {
			if (m.classList.contains("open")) {
				m.classList.remove("open")
			}
		})
	}
})

// Initialize sort

// const sortableOptions = {
// 	draggable: 'li',
// 	delay: {
// 		mouse: 300,
// 		drag: 0,
// 		touch: 300
// 	},
// 	plugins: [SortAnimation.default],
// 	sortAnimation: {
// 		duration: 200,
// 		easingFunction: 'linear',
// 	},
// 	classes: {
// 		'source:dragging': ["draggable-source--is-dragging", 'active'],
// 		'source:placed': ["draggable-source--placed", 'active']
// 	}
// }

// let sortable = new Sortable.default(document.querySelector('ul.elements__list'), sortableOptions)

let elements = document.querySelector('ul.elements__list')

let sortable = new Sortable(elements, {
	animation: 300,
	// handle: '.far',
	delay: 200
})