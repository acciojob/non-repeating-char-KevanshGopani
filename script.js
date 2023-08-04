const ans = () => {
	let value = prompt("Enter String")
	return value;
}

const ans2 = () => {
	let data = ans()
	alert(data.charAt(0))
}
ans2()