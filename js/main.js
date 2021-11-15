document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.btn')
	const input = document.querySelector('.input')
	const content = document.querySelector('.content')
	let changed = false

	btn.addEventListener('click', changeContent)

	input.addEventListener('keyup', watchChanges)

	function changeContent() {
		let value = input.value
		if (value.trim() === '') return alert('Ingresá un valor en el input')
		content.innerText = value
		btn.innerText = 'Título cambiado'
		changed = true
	}

	function watchChanges(e) {
		let value = e.target.value.trim()
		if (value === '') {
			btn.innerText = 'Ingresá algo en el input'
		} else {
			if (changed) {
				btn.innerText = 'Cambiar título otra vez'
			}
		}
	}

})
