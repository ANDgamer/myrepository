// FOR ANDREY - start

// Максимальна кількість елементів
const maxElems = 20

// Максимальна кількість сейвів
const maxSaves = 20

// Максимальна кількість темплейтів(по твому ескізи, хоча до чого тут вони, ескізи це ж про художнє мистецтво)))
const maxSketch = 20


// FOR ANDREY - end

const timeoutAnimation = 200
const selectorAnimation = "active"

const openersMenu = document.querySelectorAll(".opener")
const menus = document.querySelectorAll(".menu")

const elemsList = document.querySelector(".elements__list")
const savesList = document.querySelector(".saves__body")
const sketchesList = document.querySelector(".sketches__body")

const elemsDeleteAllBtn = document.getElementById("elems-delete-all")
const savesDeleteAllBtn = document.getElementById("saves-delete-all")
const sketchesDeleteAllBtn = document.getElementById("sketches-delete-all")

let elemsDeleteBtns = elemsList.querySelectorAll(".delete-btn")
let savesDeleteBtns = savesList.querySelectorAll(".delete-btn")
let sketchesDeleteBtns = sketchesList.querySelectorAll(".delete-btn")

const elemsAddBtn = document.getElementById("elems-add")
const savesAddBtn = document.getElementById("saves-add")
const sketchesAddBtn = document.getElementById("sketches-add")

const elemItemHTML = `
	<li class="elements__item">
		<div class="elements__item_blur"></div>
		<i class="fas fa-circle"></i>
		<p class="elements__name"></p>
		<div class="elements__item-buttons">
			<button class="fas fa-random" title="Change"></button>
			<button class="far fa-trash-alt delete-btn" title="Delete"></button>
		</div>
	</li>`
const saveItemHTML = `
	<div class="save item">
		<div class="save_main-body item__body">
			<i class="fas fa-save"></i>
			<h2 class="save__name">Save </h2>
			<button>use</button>
		</div>
		<div class="save_toolbar item__toolbar">
			<div>
				<button>Rename</button>
			</div>
			<div>
				<button class="delete-btn">Delete</button>
			</div>
		</div>
	</div>`
const sketchItemHTML = `
	<div class="sketch item">
		<div class="sketch_main-body item__body">
			<i class="fas fa-save"></i>
			<h2 class="sketch__name">Sketch </h2>
			<button>use</button>
		</div>
		<div class="sketch_toolbar item__toolbar">
			<div>
				<button>Rename</button>
			</div>
			<div>
				<button class="delete-btn">Delete</button>
			</div>
		</div>
	</div>`

let elems = []

let sortable = new Sortable(elemsList, {
	animation: 300,
	delay: 200
})

const random = arr => arr[Math.floor(Math.random() * arr.length)]

for (let i = 0; i < elemsList.children.length; i++) {
	const children = elemsList.children[i];
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

const addAnimation = (items, timeout, selector) => {
	items.forEach(item => {
		item.addEventListener("click", (e) => {
			if (e.target.tagName === "BUTTON") return

			items.forEach(i => {
				if (i.tagName && i.classList.contains(selector) &&
					i !== item) {
					i.classList.remove(selector)
				}
			})

			if (item.classList.contains(selector)) {
				item.classList.remove(selector)
				item.classList.add("dis" + selector)
				setTimeout(() => {
					item.classList.remove("dis" + selector)
				}, timeout)
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

const initDeleteEvent = (btns, list, itemSelector) => {
	btns.forEach(btn => {
		btn.addEventListener("click", () => {
			const item = btn.closest(itemSelector)
			setTimeout(() => {
				item.remove()
			}, 0);
		})
	})
}

const initDeleteAllEvent = (btn, list) => {
	btn.addEventListener("click", () => clearList(list))
}

const initAddEvent = (btn, list, itemHTML, nameSelector, name) => {
	btn.addEventListener("click", () => {

		list.innerHTML += itemHTML
		const itemName = list.lastChild.querySelector(nameSelector)
		itemName.textContent += name()
		const deleteBtns = list.querySelectorAll(".delete-btn")
		const itemSelector = list.lastChild.classList[0]
		console.log(itemSelector)

		initDeleteEvent(deleteBtns, list, "." + itemSelector)

		addAnimation(list.childNodes, timeoutAnimation, selectorAnimation);
	});
}




openersMenu.forEach(initOpenMenu);

addAnimation(savesList.childNodes, timeoutAnimation, selectorAnimation);
addAnimation(sketchesList.childNodes, timeoutAnimation, selectorAnimation);

initDeleteAllEvent(elemsDeleteAllBtn, elemsList);
initDeleteAllEvent(savesDeleteAllBtn, savesList);
initDeleteAllEvent(sketchesDeleteAllBtn, sketchesList);

initDeleteEvent(elemsDeleteBtns, elemsList, ".elements__item");
initDeleteEvent(savesDeleteBtns, savesList, ".save");
initDeleteEvent(sketchesDeleteBtns, sketchesList, ".sketch");

initAddEvent(elemsAddBtn, elemsList, elemItemHTML, ".elements__name", () => random(elems))
initAddEvent(savesAddBtn, savesList, saveItemHTML, ".save__name", () => savesList.childElementCount)
initAddEvent(sketchesAddBtn, sketchesList, sketchItemHTML, ".sketch__name", () => sketchesList.childElementCount)

window.addEventListener("click", detectCloseMenu)