let inptask = $('#inplazzytask')
let add_btn = $('#btn_add')
let clear_btn = $("#btn_clear")
let ultasklist = $("#ultask")

add_btn.click(() => {
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
})

clear_btn.click(() => {
    inptask.val("")
})