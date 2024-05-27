const b = document.querySelector("button");
const SHIFT = 2;

b.addEventListener('mousemove', (e) => {
    b.style.left = Math.random() * window.screen.width / 2 + 'px';
    b.style.top = Math.random() * window.screen.height / 2 + 'px';
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
    alert("Check console for the key and here is the final message 'VNCV RUTQDW VFUP KS'")
    console.log("Key: ", key);
}