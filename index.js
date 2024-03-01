

let pics = document.getElementsByClassName("pic");
const arr = Array.from(pics);
var i = 0;
arr.forEach(element => {
    let x = i*100,
    y = 0,
    dirX = 1,
    dirY = 1;
    const speed = i+3;
    let pic = element;
    const picWidth = pic.clientWidth;
    const picHeight = pic.clientHeight;

    function animate() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        if (y + picHeight >= screenHeight || y < 0) {
            dirY *= -1;
        }
        if (x + picWidth >= screenWidth || x < 0) {
            dirX *= -1;
        }
        x += dirX * speed;
        y += dirY * speed;
        pic.style.left = x + "px";
        pic.style.top = y + "px";
        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
    i+=1;
});

