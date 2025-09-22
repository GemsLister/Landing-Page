
    const btn = document.getElementById("balong");
    const bodybg = document.querySelector("body");
    btn.addEventListener("click", function () {
        alert("Hello Balong! ikaw ba si balong balongkers");

        bodybg.style.backgroundColor = "gray";
    
    });

    let count = 0;
    function increase() {
        count++;
        document.getElementById("count").innerText = count;
    }
    function decrease() {
        count--;
        document.getElementById("count").innerText = count;
        if (count < 0){
            document.getElementById("count").innerText = 0;
        }
    }