const ans = () => {
	let value = prompt("Enter String")
	return value;
}

const ans2 = () => {
	let data = ans()
	
let index = -1;
let fnc = ' ';

if(data.length == 0){
alert("EMPTY STRING");
}

for (let i of data) {
	if (data.split(i).length - 1 === 1) {
		fnc = i;
		break;
	} else {
		index += 1;
	}
}
if (index === data.length-1) {
console.log("yooo")

	alert("All The Charecter Are reapeating")
} else {
	alert(fnc);
}  
}
ans2()