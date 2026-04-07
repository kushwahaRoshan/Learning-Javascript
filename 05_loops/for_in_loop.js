// forin

const myObject = {
    css: "Cascading Style Sheets",
    js:"javascript"
}

for (const key in myObject) {
    console.log(`${key} shortcut of ${myObject[key]}`);
    
}