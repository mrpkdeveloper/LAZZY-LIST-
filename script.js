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
}

inptask.keypress((event) => {
    if (event.which == 13) {
        additem()
    }
})


add_btn.click(additem)

reset_btn.click(() => {
    inptask.val("")
})

function deletetask() {
    $('#ultask .done').remove()
}

delete_btn.click(deletetask)