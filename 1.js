let data = ["Software Engineer and Developer", "Project Manager", 'Bisnis and system analis', 'Web developer', 'Programer komputer'];
console.log(data)
console.log(data.length)
for (i = 0; i < data.length; i++) {
    let li = document.createElement("LI");
    let isi = document.createTextNode(data[i]);
    li.appendChild(isi);
    document.getElementById("list1").appendChild(li);
}