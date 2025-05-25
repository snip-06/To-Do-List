const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You forgot to write the Task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<i class="fa-regular fa-circle uncheck-icon"></i><p>${inputBox.value}</p>
        <span><i class="fa-solid fa-xmark cross"></i></span>`;
        listContainer.appendChild(li);
        inputBox.value = ""; 
    }
    saveData();
}

listContainer.addEventListener("click", function(e){

    if (e.target.tagName === 'P') {
        const li = e.target.parentElement;
        const icon = li.querySelector('i');
        e.target.classList.toggle("checked");
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular', 'fa-circle', 'uncheck-icon');
            icon.classList.add('fa-solid', 'fa-circle-check', 'check-icon');
        } else {
            icon.classList.remove('fa-solid', 'fa-circle-check', 'check-icon');
            icon.classList.add('fa-regular', 'fa-circle', 'uncheck-icon');
        }
    }

    if (e.target.classList.contains('cross')) {
        e.target.closest('li').remove();
    }

    saveData();
});


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();