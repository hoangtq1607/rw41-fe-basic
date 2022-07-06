const instance = axios.create({
    baseURL: 'https://62c166692af60be89ec642e1.mockapi.io/api/v1/',
});

let users = [];

function deleteUser(id) {

    let isConfirmed = confirm("Chắc chưa?");

    if (isConfirmed) {
        instance.delete('users/' + id)
            .then(res => {
                showUsers();
                alert("Đã xoá thành công " + res.data.name);
            });
    }

}

function updateUser(id) {

    let oldUser = users.find(item => item.id == id);

    let name = prompt("sửa lại tên user", oldUser.name);

    let updateUser = {
        name: name
    }

    instance.put('users/' + id, updateUser)
        .then(res => {
            showUsers();
            alert("Đã update " + res.data.name);
        });

}


function showUsers() {

    let params = { sortBy: 'id', order: 'desc' };

    instance.get('users', { params: params })
        .then(res => {
            users = res.data;
            let tableData = $(".table-data");
            tableData.html('');

            users.forEach(user => {
                let tr = `
                <tr>
                    <td>${user.id}</td>
                    <td><img width="50px" src="${user.avatar}"></td>
                    <td>${user.name}</td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-delete"
                             onclick="deleteUser(${user.id})">Delete</button>
                        <button class="btn btn-sm btn-success btn-delete"
                             onclick="updateUser(${user.id})">Update</button>
                    </td>
                </tr>`;
                tableData.append(tr);
            });

        })

}

showUsers();

$(".btn-add").click(function () {

    let name = prompt("Nhập tên");

    if (name) {
        let user = {
            "name": name,
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/65.jpg",
        }
        createUser(user);
    }

});

function createUser(user) {
    instance.post('users', user)
        .then(res => {
            showUsers();
            alert("Đã thêm thành công " + res.data.name);
        })
}
