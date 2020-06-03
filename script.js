let inptask = $('#inplazzytask')
let add_btn = $('#btn_add')
let reset_btn = $("#btn_reset")
let sort_btn = $("#btn_sort")
let delete_btn = $("#btn_delete")
let ultasklist = $("#ultask")


function additem() {
    let lazzy_task = inptask.val()
    // let newtask = '<li class="list-group-item">' + lazzy_task + '</li>'
    let newtask = $('<li>', {
        'class': 'list-group-item',
        text: lazzy_task
    })
    ultasklist.append(newtask)
    inptask.val("")

    // ----toggle task done or not ------
    newtask.click(() => {
        newtask.toggleClass('done')
    })
    togglebtn()
}

inptask.keypress((event) => {
    if (event.which == 13) {
        additem()
    }
})
function resettask() {
    inptask.val("")
    togglebtn()
}

function deletetask() {
    $('#ultask .done').remove()
    togglebtn()
}

function sorttask() {
    $('#ultask .done').appendTo(ultasklist)
}

function togglebtn() {
    reset_btn.prop('disabled', inptask.val() == "")
    add_btn.prop('disabled', inptask.val() == "")
    sort_btn.prop('disabled', ultasklist.children().length < 1)
    delete_btn.prop('disabled', ultasklist.children().length < 1)
}

inptask.on('input', togglebtn)

add_btn.click(additem)
reset_btn.click(resettask)
delete_btn.click(deletetask)
sort_btn.click(sorttask)