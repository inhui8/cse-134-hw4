
function create() {
    var temp = document.getElementById("t1").content.cloneNode(true);
    const dia1 = document.getElementById("dia");
    dia1.appendChild(temp);
    const button1 = document.getElementById("button1");
    button1.addEventListener('click', () => {
        const d1 = document.getElementById("d1");
        d1.remove();
    });
    const title = document.getElementById("Title");
    const date = document.getElementById("Date");
    const summary = document.getElementById("Summary");
    const saferTitle = DOMPurify.sanitize(title.value);
    const saferDate = DOMPurify.sanitize(date.value);
    const saferSummary = DOMPurify.sanitize(summary.value);
    const button2 = document.getElementById("button2");
    button2.addEventListener('click', () => {
        localStorage.setItem(title.value, JSON.stringify([title.value, date.value, summary.value]));
        add(title.value, date.value, summary.value);
        const d1 = document.getElementById("d1");
        d1.remove();
    });
    
}
function add(saferTitle, saferDate, saferSummary) {
    // const title = document.getElementById("Title");
    //     const date = document.getElementById("Date");
    //     const summary = document.getElementById("Summary");
    //     const saferTitle = DOMPurify.sanitize(title.value);
    //     const saferDate = DOMPurify.sanitize(date.value);
    //     const saferSummary = DOMPurify.sanitize(summary.value);
        const newLi = document.createElement("li");
        const newDiv = document.createElement("span");
        var dele1 = saferTitle;
        var date1 = saferDate;
        var summary1 = saferSummary;
        const newContent = document.createTextNode(`${dele1} (${date1})- ${summary1}  `);
        
        const editButton = document.createElement("button");
        //editButton.textContent = "edit";
        const deleteButton = document.createElement("button");
        //deleteButton.textContent = "delete";
        const editImg = document.createElement("img");
        editImg.src = "/pencil.png";
        editImg.width = "20";
        const deleteImg = document.createElement("img");
        deleteImg.src = "/trash-can.png";
        deleteImg.width = "20"
        //editImg.width = auto;
        editButton.append(editImg);
        deleteButton.append(deleteImg);
        newLi.append(newDiv);
        newDiv.append(newContent)
        newLi.append(editButton);
        newLi.append(deleteButton);
        
        const ulist = document.getElementById("u1");
        ulist.append(newLi);
        deleteButton.addEventListener('click', () => {
            newLi.remove();
            localStorage.removeItem(dele1);
        });

        editButton.addEventListener('click', () => {
            var temp = document.getElementById("t1").content.cloneNode(true);
            const dia1 = document.getElementById("dia");
            dia1.appendChild(temp);
            newDiv.textContent = `${dele1} (${date1})- ${summary1}  `;
            const button1 = document.getElementById("button1");
            button1.addEventListener('click', () => {
                const d1 = document.getElementById("d1");
                d1.remove();
            });
            
            
            const button2 = document.getElementById("button2");
            button2.addEventListener('click', () => {
                localStorage.removeItem(dele1);
                console.log(dele1);
                const title = document.getElementById("Title");
                const date = document.getElementById("Date");
                const summary = document.getElementById("Summary");
                const saferTitle = DOMPurify.sanitize(title.value);
                dele1 = title.value;
                const saferDate = DOMPurify.sanitize(date.value);
                date1 = date.value;
                const saferSummary = DOMPurify.sanitize(summary.value);
                summary1 = summary.value;
                localStorage.setItem(title.value, JSON.stringify([title.value, date.value, summary.value]));
                newDiv.textContent = `${saferTitle} (${saferDate})- ${saferSummary}  `;
                const d1 = document.getElementById("d1");
                d1.remove();
            });
            
        });
        
}
document.addEventListener('DOMContentLoaded', () => {
    const create1 = document.getElementById("button3");
    create1.addEventListener('click', create);
    localStorage.setItem("First", JSON.stringify(["First Post", "2022-01-01", "This is the first post"]));
    localStorage.setItem("Second", JSON.stringify(["Second Post", "2022-01-02", "This is the second post"]));
    localStorage.setItem("Third", JSON.stringify(["Third Post", "2022-01-03", "This is the third post"]));
    
    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        console.log((value[0]));
        add(value[0], value[1], value[2]);
    }
});
