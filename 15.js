const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"]


for(let j = 0;  j < color.length; j++) {
    console.log(`${j + 1}${j < 0 || j < 3 ? o[j + 1] : o[0] } choise is ${color[j]}`);
}