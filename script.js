let inptask = $('#inplazzytask')
let add_btn = $('#btn_add')
let clear_btn = $("#btn_clear")
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

clear_btn.click(() => {
    inptask.val("")
})