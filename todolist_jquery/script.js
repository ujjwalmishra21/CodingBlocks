$(()=> {
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')
    let deltask = $('#deltask')
    addtask.click(function() {
        let task = newtask.val()
        newtask.val('')
        todolist
        .append($('<li>')
        .text(task).click(function(){
            $(this).toggleClass("done")
        })        
        .prepend($('<button>')
        .text('🚫').click(function(){
            $(this).parent().remove()
        }))
        .prepend($('<button>')
        .text('🔺').click(function(){
            $(this).parent().css('text-decoration','none')
            .insertBefore($(this).parent().prev())
        }))
        .prepend($('<button>')
        .text('🔻').click(function(){
            $(this).parent().css('text-decoration','none')
            .insertAfter($(this).parent().next())
        }))
        
       
           
    )
    deltask.click(function(){
        $(this).siblings().children('*.done').remove()
       
    })

     

    
    
        

    
    

})
})