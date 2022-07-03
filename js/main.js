// let btnElement = document.getElementById("my-btn");
// let elements = document.getElementsByClassName("btn");
let elements = document.getElementsByClassName("btn-delete");

let id = 4;

for (let i = 0; i < elements.length; i++) {
    // elements[i].addEventListener('click', changeBtn);
    elements[i].addEventListener('click', removeBtn);
}

function removeBtn() {
    let parent = this.parentNode.parentNode;
    parent.remove();
}

function toggleAddArea() {
    let addArea = document.querySelector('.add-area');
    if (addArea.classList.contains("d-none")) {
        addArea.classList.remove("d-none")
    } else {
        addArea.classList.add("d-none")
    }
}

document.querySelector(".btn-add")
    .addEventListener("click", toggleAddArea);

document.querySelector("#btn-ok")
    .addEventListener("click", function () {
        let input = document.querySelector('#txt-name');

        let tr = `
        <tr>
        <td>${id++}</td>
        <td>${input.value}</td>
        <td>
            <button class="btn btn-sm btn-danger btn-delete" onclick="removeBtn.apply(this)">
                Delete
            </button>
        </td>
        </tr>
        `;

        document.querySelector("tbody.table-data")
            .insertAdjacentHTML('beforeend', tr)

        toggleAddArea();

        input.value = "";
    });

// btnElement.addEventListener('click', changeBtn);

function changeBtn() {

    console.log("clicked button!!");

    let classList = this.classList;

    if (classList.contains("btn-danger")) {
        this.textContent = "btn-success";
        classList.remove("btn-danger");
        classList.add("btn-success");

    } else {

        this.textContent = "btn-danger";
        classList.remove("btn-success");
        classList.add("btn-danger");
    }

}
