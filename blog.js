
export function create() {
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
    const button2 = document.getElementById("button2");
    button2.addEventListener('click', () => {
        localStorage.setItem(title.value, JSON.stringify([title.value, date.value, summary.value]));
        add(title.value, date.value, summary.value);
        const d1 = document.getElementById("d1");
        d1.remove();
    });
    
}
export function add(saferTitle, saferDate, saferSummary) {
        const newLi = document.createElement("li");
        const newDiv = document.createElement("span");
        var dele1 = saferTitle;
        var date1 = saferDate;
        var summary1 = saferSummary;
        console.log(dele1);
        newDiv.innerHTML = `${saferTitle} (${saferDate})- ${saferSummary}  `;    
        const editButton = document.createElement("button");
        editButton.className = "editB";
        editButton.textContent = "edit";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.className = "deleteB"
        newLi.append(newDiv);
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
            document.getElementById("Title").value = dele1;
            document.getElementById("Date").value = date1;
            document.getElementById("Summary").value = summary1;
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
                newDiv.innerHTML = `${saferTitle} (${saferDate})- ${saferSummary}  `;
                const d1 = document.getElementById("d1");
                d1.remove();
            });  
        });
        
}


