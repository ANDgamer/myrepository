const openersMenu = document.querySelectorAll(".opener")
const menus = document.querySelectorAll(".menu")

const deleteAllBtn = document.getElementById("delete-all")
const deleteBtns = document.querySelectorAll(".delete-btn")

const elementsList = document.querySelector(".elements__list")

const saves = document.querySelectorAll(".save")

let elems = []


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

// Initialize sortable
let sortable = new Sortable(elementsList, {
	animation: 300,
	delay: 200
})


// Delete all
const clearList = list => list.innerHTML = ''

deleteAllBtn.addEventListener("click", () => clearList(elementsList))

// Delete item

deleteBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		const item = btn.closest(".elements__item")
		item.remove()
	})
})


// Fill elems
for (let i = 0; i < elementsList.children.length; i++) {
	const children = elementsList.children[i];
	const elem = children.textContent.trim()
	elems.push(elem)
}

const random = arr => {
	return arr[Math.floor(Math.random() * arr.length)]
}
for (let i = 0; i < elementsList.children.length; i++) {
	console.log(random(elems))
}

const addElemBtn = document.getElementById("add-elem")

addElemBtn.addEventListener("click", () => {
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
})