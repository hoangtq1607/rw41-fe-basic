$(".btn-add").click(function () {
    $('.add-area').toggle(100);
});

$(".btn-delete").click(function () {
    $(this).parent().parent().remove();
});

let id = 4;

$("#btn-ok").click(function () {

    let name = $("#txt-name").val();

    let tr = `
        <tr>
            <td>${id++}</td>
            <td>${name}</td>
            <td>
                <button class="btn btn-sm btn-danger btn-delete">Delete</button>
            </td>
        </tr>
    `;

    $("tbody.table-data").append(tr);

    $("#txt-name").val(''); // cho gia tri cua input co id=txt-name ve rong

    // toggle = hide & show

    $('.add-area').hide(100); // an class add-area

});
