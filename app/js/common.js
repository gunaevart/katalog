 //slider init
  var slider = document.querySelector('.slider');
  var instance = M.Slider.init(slider);

//modal init
  var modHed = document.querySelectorAll('.modal');
  var modalHeader = M.Modal.init(modHed);



// Masked phone
   $("#icon_telephone").mask("(999) 999-9999");
 

  // Or with jQuery
var tabs = document.querySelector('.tabs');
    var tabsPage = M.Tabs.init(tabs);


let zvonok = document.querySelector('#zakaz');

zvonok.onclick = function(){
	let name = document.querySelector('#icon_prefix').value;
	let phone = document.querySelector('#icon_telephone').value;

			if(name != '' && phone != ''){
			 $.ajax({
		      url: 'send.php', // куда посылаем запрос
		      type: "POST",
		      data: 
		      {
		      	name:name,
		      	phone:phone
		      },
		      success: function(data){ // что делаем в случае успеха, в data лежит ответ от сервера
		        alert(data); // выводим ответ
		        if(data == 'ok'){
					alert('Заявка успешно отправлена!');
				}
		      }
		    });
		}
		else{
			alert('Заполните все поля!');
		}

}