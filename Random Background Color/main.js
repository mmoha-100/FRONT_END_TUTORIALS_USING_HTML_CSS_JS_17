let arrTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let arrColorRes = [];

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * arrTest.length);
    arrColorRes.push(arrTest[randomIndex]);
}

let color = `#${arrColorRes.join("")}`;

document.body.style.backgroundColor = color;
