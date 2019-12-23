
$(document).ready(function(){
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
           //data.forEach(function(data){} 
           $.each(data,function(i, data){
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
   $('#form1').on('submit', function(e){
       e.preventDefault();
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
    /* $('#btn1').on('click', function(){
        // alert('Button Click!');
        $('.paragraph').toggle();
        //$('.paragraph').hide();
        });
        $('#btn2').on('click',function(){
            $('.paragraph').show();
        });
        $('#btn1').on('dblclick',function(){
            $('.paragraph').toggle();
        });
        $('#btn1').on('hover',function(){
        $('.paragraph').toggle();
        })
        $('#btn1').on('mouseenter',function(){
        $('.paragraph').toggle();
        })
        $('#btn1').on('mouseleave',function(){
        $('.paragraph').toggle();
    })  
   $('#btn1').click(function(e){
       //console.log(e)
       //alert(e.currentTarget.id);
      // alert(e.currentTarget.innerHtml);
       //alert(e.currentTarget.outerHtml);
       alert(e.currentTarget.className);
   });
   $(document).on('mousemove', function(e){
        $('#coord').html("coord : Y : " + e.clientY + " X : " + e.clientX);
   });
     
      $('input').focus(function(){
          $(this).css('background','pink');
      }); 
      $('input').blur(function(){
        $(this).css('background','white');
    });
    $('input').keyup(function(e){
    console.log(e);
    });
    $('select#gender').change(function(e){
        alert(e.currentTarget.value);
    });
   // $('p.paragraph').css({color : 'red', background : '#ccc'});
   
   //$('p.paragraph').addClass('paragraph'); 
   //$('p.paragraph').removeClass('paragraph');
   $('#btn1').click(function(e){
      // console.log(e);
      $('p.paragraph2').toggleClass('paragraph2');  
   }); 
  // $('div#appendText').text('hello world');
  $('div#appendText').html('<h3>Hello World</h3>');

 $('ul#appendTextToUlList').append('<li>Append List Item</li>');
 $('ul#appendTextToUlList').prepend('<li>Placed On Top</li>');
 
 $('ul').before('<h4>Hello</h4>');
 $('ul').after('<h4>World</h4>');
 //$('ul').empty(); 
   $('ul').detach();

 //$('a').attr('target','_blank');
 //alert($('a').attr('href'));
 $('#newText').keyup(function(e){
    var code = e.which;
    console.log(e);
    if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+ e.currentTarget.value +'</li>');
       // $(this).val('');
       e.currentTarget.value = '';
    }

 });
 var myArr = ['brad', 'kelly', 'Nate', 'Jose'];
 $.each(myArr,function(i, val){
     console.log(val); 
     $('ul#users').append('<li>'+ val +'</li>')  
 });
 var newArr = $('ul#appendTextToUlList li').toArray();
 console.log(newArr);
 $.each(newArr,function(i, val){
    console.log(val.innerHTML); 
    //$('ul#users').append('<li>'+ val +'</li>')  
});*/
$('#btnFadeOut').click(function(){
    $('#box').fadeOut(1000, function(){
        $('#btnFadeOut').text('Its Gone'); 
    });
});
$('#btnFadeIn').click(function(){
    $('#box').fadeIn(1000);
    });
$('#btnFadeTog').click(function(){ 
    $('#box').fadeToggle(1000);
    });
    $('#btnSlideUp').click(function(){
        $('#box').slideUp(1000);
        }); 
    $('#btnSlideDown').click(function(){
        $('#box').slideDown(1000);
        });
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000);
    });
});    