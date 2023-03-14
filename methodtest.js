
async function post_method() {
    document.getElementById("date").value = new Date();
    let form = document.getElementById('method_form');
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: new FormData(form)
    });
    document.getElementById('response').innerHTML = `<pre>${await response.text()}</pre>`;
}


async function put_method() {
    document.getElementById("date").value = new Date();
    let form = document.getElementById('method_form');
    const response = await fetch("https://httpbin.org/put", {
        method: "PUT",
        body: new FormData(form)
    });
    document.getElementById('response').innerHTML = `<pre>${await response.text()}</pre>`;
}

function get_method() {
    document.getElementById("date").value = new Date();
    let getData = {
        id: document.getElementById('id').value,
        article_name: document.getElementById('article_name').value,
        article_body: document.getElementById('article_body').value,
        date: document.getElementById('date').value
    };
    fetch(`https://httpbin.org/get?id=${getData.id}&article_name=${getData.article_name}&article_body=${getData.article_body}&date=${getData.date}`, {
        method: "get"
    })
        .then(response => {return response.json()})
        .then(data => {
            document.getElementById('response').innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
function delete_method() {
    document.getElementById("date").value = new Date();
    let deleteData = {
        id: document.getElementById('id').value,
        article_name: document.getElementById('article_name').value,
        article_body: document.getElementById('article_body').value,
        date: document.getElementById('date').value
    };
    fetch(`https://httpbin.org/delete?id=${deleteData.id}&article_name=${deleteData.article_name}&article_body=${deleteData.article_body}&date=${deleteData.date}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
        })
        .catch(error => {
            console.error(error);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById("postBtn");
    const getBtn = document.getElementById("getBtn");
    const putBtn = document.getElementById("putBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    postBtn.addEventListener('click', post_method);
    getBtn.addEventListener('click', get_method);
    putBtn.addEventListener('click', put_method);
    deleteBtn.addEventListener('click', delete_method);
});