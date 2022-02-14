const openersMenu = document.querySelectorAll(".opener")
const menus = document.querySelectorAll(".menu")

const deleteAllBtn = document.getElementById("delete-all")
let deleteBtns = document.querySelectorAll(".delete-btn")

const addElemBtn = document.getElementById("add-elem")

const elementsList = document.querySelector(".elements__list")

const saves = document.querySelectorAll(".save")
const sketches = document.querySelectorAll(".sketch")

let elems = []

let sortable = new Sortable(elementsList, {
	animation: 300,
	delay: 200
})



const random = arr => arr[Math.floor(Math.random() * arr.length)]

for (let i = 0; i < elementsList.children.length; i++) {
	const children = elementsList.children[i];
	const elem = children.textContent.trim()
	elems.push(elem)
}

const initOpenMenu = (btn) => {
	btn.addEventListener("click", () => {
		let menuSelector = btn.getAttribute("data-menu")
		let menu = document.querySelector("." + menuSelector)
		menus.forEach(nMenu => {
			if (nMenu.classList.contains("open") && nMenu !== menu) {
				nMenu.classList.remove("open")
			}
		})
		menu.classList.toggle("open")
	})
}

const addAnimation = (items, duration, selector) => {
	items.forEach(item => {
		item.addEventListener("click", (e) => {
			if (e.target.tagName === "BUTTON") return

			items.forEach(i => {
				if (i.classList.contains(selector) &&
					i !== item) {
					i.classList.remove(selector)
				}
			})

			if (item.classList.contains(selector)) {
				item.classList.remove(selector)
				item.classList.add("dis" + selector)
				setTimeout(() => {
					item.classList.remove("dis" + selector)
				}, duration)
				return
			}
			item.classList.toggle(selector)
		})
	})
}

const detectCloseMenu = (e) => {
	const targetMenu = e.target.closest(".menu")
	if (!e.target.classList.contains("opener") && !targetMenu) {
		menus.forEach(m => {
			if (m.classList.contains("open")) {
				m.classList.remove("open")
			}
		})
	}
}

const clearList = list => list.innerHTML = ''

const initDeleteEvent = () => {
	deleteBtns = document.querySelectorAll(".delete-btn")
	deleteBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			const item = btn.closest(".elements__item")
			item.remove()
		})
	})
}

const addElem = () => {
	elementsList.innerHTML += `		
	<li class="elements__item">
		<div class="elements__item_blur"></div>
		<i class="fas fa-circle"></i>
		<p>${random(elems)}</p>
		<div class="elements__item-buttons">
			<button class="fas fa-random" title="Change"></button>
			<button class="far fa-trash-alt delete-btn" title="Delete"></button>
		</div>
	</li>`
	initDeleteEvent()
}



openersMenu.forEach(initOpenMenu)

addAnimation(saves, 200, "active")
addAnimation(sketches, 200, "active")
initDeleteEvent()

addElemBtn.addEventListener("click", addElem)
deleteAllBtn.addEventListener("click", () => clearList(elementsList))
window.addEventListener("click", detectCloseMenu)