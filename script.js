const ans = () => {
	let value = prompt("Enter String")
	return value;
}

const ans2 = () => {
	let data = ans()
	
let index = -1;
let fnc = ' ';

if(data.length == 0){
alert(null);
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
	alert(null)
} else {
	alert(fnc);
}  
}
ans2()