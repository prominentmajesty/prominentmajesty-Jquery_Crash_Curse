
$(function(){
    var list = $('#list');
    var button = $('#button'); 
    let name = $('#name');
    let email = $('#email');
    let password = $('#password'); 

    function addOder(oder){
        list.append('<div class = "container"><li style="display-style : none">Hello ! '+oder.name+' Your Registration Was Succesful</li></div>');
    }
    $.ajax({ 
        method :'GET',
        url : '/ajax',
        success : function(data){
            $.each(data, function(i,data){
                console.log(data);
                list.append('<div class = "container"><li style = "text-align : center; list-style : none">Name: '+ data.name +'</li></div>',
                '<div class = "container"><li style = "text-align : center; list-style : none">E-mail: '+ data.email +'</li></div>',
                '<div class = "container"><li style = "text-align : center; list-style : none">Password: '+ data.password +'</li></div>',
                '<div class = "container"><li style = "text-align : center; list-style : none">password: '+ data._id +'</li></div>');
            });
        },
        error : function(){
            alert('error in loading data'); 
        }
    }); 
   
    button.on('click', function(){
        var post = {  
            name : name.val(),
            email : email.val(),
            password : password.val() 
        }
        $.ajax({
            method : 'POST',
            url : '/post',
            data : post,
            success : function(newResult){
             addOder(newResult);
            },
            error : function(){
                alert('error occured while saving information')
            }
  
        });
    }); 
});   