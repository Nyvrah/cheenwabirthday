var audio = document.getElementById('audio');
var b = document.getElementById('mute');
function mute() {
    audio.play();
    if (audio.muted){
        audio.muted = false;
        b.innerHTML = "Shut Up";
        b.style.backgroundColor = 'rgb(255, 159, 159)';
    }
    else {
        
        audio.muted = true;
        b.innerHTML = "Keep Yapping";
        b.style.backgroundColor = 'rgb(178, 255, 213)';
    }
}





let pics = document.getElementsByClassName("pic");
const arr = Array.from(pics);
var i = 0;
arr.forEach(element => {
    
    const speed = (i+1)/3;
    let pic = element;
    const picWidth = pic.clientWidth;
    const picHeight = pic.clientHeight;
    let x = document.body.clientWidth/2-picWidth/2,
    y = document.body.clientHeight/2-picHeight/2,
    dirX = (i+1)%2*2-1,
    dirY = (i+1)%2*2-1;

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

