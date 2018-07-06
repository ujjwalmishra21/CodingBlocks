$(()=> {
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')
    let deltask = $('#deltask')
   
    addtask.click(function() {
        let task = newtask.val()
        let datetime = new Date();
        if(task == ""){
            alert("Error! Please complete the fields.")
            return
        }
       
        newtask.val('')
       
        todolist
        .append($('<li>')
        .text(task).addClass("list").click(function(){
            $(this).toggleClass("done")
        })
        .prepend(($('<p>'))
                   .text(datetime).append($('<hr noshade height="5px" >')))

        .prepend($('<button>')
        .prepend('<img src="https://png.icons8.com/small/50/000000/trash.png" width="20px" height="20px">').addClass("btn btn-outline-danger btn-sm last cmbtn").click(function(){
            $(this).parent().remove()
        }))
        .prepend($('<button>')
        .prepend('<img src="https://png.icons8.com/ios/50/333333/sort-up-filled.png" width="20px" height="20px" >').addClass("btn btn-outline-secondary btn-sm last cmbtn").click(function(){
            $(this).parent().css('text-decoration','none')
            .insertBefore($(this).parent().prev())
        }))
        .prepend($('<button>')
        .prepend('<img src="https://png.icons8.com/ios/50/333333/sort-down-filled.png" width="20px" height="20px" >').addClass("btn btn-outline-secondary btn-sm l first cmbtn").click(function(){
            $(this).parent().css('text-decoration','none')
            .insertAfter($(this).parent().next())


        }))
       
       
        
       
           
    )
})
    deltask.click(function(){
        if($('*').hasClass('done')){
            var num = $('.done').length
            $(this).siblings().children('*.done').remove()
            alert(num + " to-do Successfully Deleted")
            
        }
        else{
            alert('Error! No To-Do selected.')
            return
        }
       
    })

     

    
    
        

    
    

})
