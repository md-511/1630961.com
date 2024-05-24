const b = document.querySelector("button");
const SHIFT = 2;

window.addEventListener('mousemove', (e) => {
    b.style.left = e.clientX + 15 + 'px';
    b.style.top = e.clientY + 15 + 'px';
});

function genKey() {
    let key = 'fcuctr';
    let buffer = key;
    let bit = 1;
    key = "";
    for (let i of buffer) {
        if (bit == 1) {
            key += String.fromCharCode(i.charCodeAt() - SHIFT);
        } else {
            key += String.fromCharCode(i.charCodeAt() + SHIFT);
        }
        bit = (bit + 1) % 2;
    }
    console.log(key);
    return key;
}