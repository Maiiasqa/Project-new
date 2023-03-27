
function add(item) {
	for (let i = 0; i < item.length; i++) {
		const input = document.querySelector(item[i].inputSelector)
		const inputBlock = document.querySelector([i].inputBlockSelector)
		const lists = document.querySelector(item[i].listsSelector)
		const arrow = document.querySelector(item[i].arrowSelector)
		const listItems = document.querySelectorAll(item[i].listItemsSelector)

		function listiner(event) {
			if (!event.target.closest(item[i].inputBlockSelector) && lists.classList.contains('vis')) {
				lists.classList.remove('vis')
				arrow.classList.remove('rotate')
			}
		}
		input.addEventListener('click', () => {
			lists.classList.toggle('vis')
			arrow.classList.toggle('rotate')
			window.addEventListener('click', listiner)
		})

		arrow.addEventListener('click', () => {
			lists.classList.toggle('vis')
			arrow.classList.toggle('rotate')
		})

		for (let i = 0; i < listItems.length; i++) {
			listItems[i].addEventListener('click', () => {
				input.value = listItems[i].innerText
				lists.classList.remove('vis')
				arrow.classList.remove('rotate')

			})
		}

	}
}

const addList = {
	inputSelector: '.country',
	listsSelector: '.lists',
	arrowSelector: '.arrow',
	listItemsSelector: '.list-items',
	inputBlockSelector: '.country-block'
}
const addList2 = {
	inputSelector: '.phone',
	listsSelector: '.lists-phone',
	arrowSelector: '.arrow-phone',
	listItemsSelector: '.phone-list-items',
	inputBlockSelector: '.phone-block'
}
const addList3 = {
	inputSelector: '.amount',
	listsSelector: '.lists-amount',
	arrowSelector: '.arrow-amount',
	listItemsSelector: '.list-amount-items',
	inputBlockSelector: '.amount-block'
}

const array = [addList, addList2, addList3]

add(array)





// -----------Попап вікно на Мобіке
const popup = document.querySelector(".popup-wrapper")
const popupBoDy = document.querySelector(".popup-body")
const popupContent = document.querySelector(".popup-content")

const closeBtn = document.querySelector(".popup-close")
const burgerOpen = document.querySelector(".burger-menu")

// -----------open the popup window 

burgerOpen.addEventListener("click", () => {
	popup.classList.toggle('open')
})

// -----------closing the popup window 

closeBtn.addEventListener("click", () => {
	popup.classList.remove('open')
})
// -----------closing the popup window clicikng on background ???? в розробці 

document.onclick = function(e){
	if(e.target == popup){
		popup.classList.remove('open')
		popupBoDy.classList.remove('open')
		popupContent.classList.remove('open')
	}
}




