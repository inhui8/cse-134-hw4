export function my_alert() {
    const di = document.getElementById("contentA");
    di.textContent= " ";
    var temp = document.getElementById("t1").content.cloneNode(true);
    const dia1 = document.getElementById("dia");
    dia1.appendChild(temp);

    const button1 = document.getElementById("button1");
    button1.addEventListener('click', () => {
        const d1 = document.getElementById("d1");
        d1.remove();
    });
}

export function my_confirm() {
    const di = document.getElementById("contentA");
    di.textContent= " ";
    setTimeout(() => {
        var temp = document.getElementById("t2").content.cloneNode(true);
        const dia2 = document.getElementById("dia");
        dia2.appendChild(temp);
        const button2 = document.getElementById("button2");
        button2.addEventListener('click', () => {
            const d2 = document.getElementById("d2");
            d2.remove();
            var div = document.getElementById('contentA');
            div.textContent = 'The value returned by the confirm method is: false';
        });
        const button3 = document.getElementById("button3");
        button3.addEventListener('click', () => {
            const d2 = document.getElementById("d2");
            d2.remove();
            var div = document.getElementById('contentA');
            div.textContent = 'The value returned by the confirm method is: true';
        });
    },0);
}

export function my_prompt() {
    const di = document.getElementById("contentA");
    di.textContent= " ";
    setTimeout(() => {
        var temp = document.getElementById("t3").content.cloneNode(true);
        const dia3 = document.getElementById("dia");
        dia3.appendChild(temp);
        const button4 = document.getElementById("button4");
        
        button4.addEventListener('click', () => {
            const d3 = document.getElementById("d3");
            d3.remove();
            var div = document.getElementById("contentA");
            div.textContent = "User didn't enter anything";
        });
        const name = document.getElementById("your_name");
        const button5 = document.getElementById("button5");
        button5.addEventListener('click', () => {
            const saferName = DOMPurify.sanitize(name.value);
            const d3 = document.getElementById("d3");
            d3.remove();
            var div = document.getElementById('contentA');
            div.innerHTML = `The value returned by the prompt method is : ${saferName}`;
        });
    },0);
}