/* Jquery popup */
(function($){ 		  
	$.fn.popupWindow = function(instanceSettings){
		
		return this.each(function(){
		
		$(this).click(function(){
		
		$.fn.popupWindow.defaultSettings = {
			centerBrowser:0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
			centerScreen:0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
			height:500, // sets the height in pixels of the window.
			left:0, // left position when the window appears.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			resizable:0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			width:500, // sets the width in pixels of the window.
			windowName:null, // name of window set from the name attribute of the element that invokes the click
			windowURL:null, // url used for the popup
			top:0, // top position when the window appears.
			toolbar:0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
		};
		
		settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
		
		var windowFeatures =    'height=' + settings.height +
								',width=' + settings.width +
								',toolbar=' + settings.toolbar +
								',scrollbars=' + settings.scrollbars +
								',status=' + settings.status + 
								',resizable=' + settings.resizable +
								',location=' + settings.location +
								',menuBar=' + settings.menubar;

				settings.windowName = this.name || settings.windowName;
				settings.windowURL = this.href || settings.windowURL;
				var centeredY,centeredX;
			
				if(settings.centerBrowser){
						
					if ($.browser.msie) {//hacked together for IE browsers
						centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120)/2) - (settings.height/2)));
						centeredX = window.screenLeft + ((((document.body.offsetWidth + 20)/2) - (settings.width/2)));
					}else{
						centeredY = window.screenY + (((window.outerHeight/2) - (settings.height/2)));
						centeredX = window.screenX + (((window.outerWidth/2) - (settings.width/2)));
					}
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else if(settings.centerScreen){
					centeredY = (screen.height - settings.height)/2;
					centeredX = (screen.width - settings.width)/2;
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else{
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + settings.left +',top=' + settings.top).focus();	
				}
				return false;
			});
			
		});	
	};
})(jQuery);

function expand_category()
{
	document.getElementById("li_1").reset();
}

/*Load model list*/
function model_reload(object)
{
	// Clear options
	var popt = document.getElementById("model_id");
	for ( var i = popt.length-1; i>= 0; i-- )
	{
		popt.remove(i);
	}
	// Add option
	var data = object.options[object.selectedIndex].getAttribute("title");
	
	data = data.split("||");
	for ( var j = 0; j<  data.length; j++ )
	{
		if ( data[j] )
		{
			var opt = document.createElement("option");
			var item = data[j].split("|");
			opt.text = item[1];
			opt.value = item[0];

			if ( popt.getAttribute("defaultvalue") == item[0] )
			{
				opt.selected = "selected";
			}
			
			popt.options.add(opt);
		}
	}
}

function comment_reload(object)
{
	// Clear options
	var popt = document.getElementById("model");
	for ( var i = popt.length-1; i>= 0; i-- )
	{
		popt.remove(i);
	}
	// Add option
	var data = object.options[object.selectedIndex].getAttribute("title");
	data = data.split("||");

	for ( var j = 0; j<  data.length; j++ )
	{
		if ( data[j] )
		{
			var opt = document.createElement("option");
			var item = data[j].split("|");
			opt.text = item[1];
			opt.value = item[0];
			popt.options.add(opt);
		}
	}
}

function vsearch(theForm)
{
		if (theForm.keyword.value=='' || theForm.keyword.value==theForm.keyword.defaultValue)
		{
			alert(lang_alert_search);
			theForm.keyword.focus();
			return false;
		 }

		//if (theForm.keyword.value.length <=2)
//		{
//			alert("Từ khóa quá ngắn. Vui lòng nhập lại với từ khóa khác trên 2 kí tự.");
//			theForm.keyword.focus();
//			return false;
//		}
}

function vsearch_advance(theForm)
{
		if (theForm.keyword.value!='' && theForm.keyword.value.length <=2)
		{
			alert("Từ khóa quá ngắn. Vui lòng nhập lại với từ khóa khác trên 2 kí tự.");
			theForm.keyword.focus();
			return false;
		}
}

function vcontact(theForm) 
{
	if (theForm.name.value=='' || theForm.name.value==theForm.name.defaultValue) 
	{
		alert(lang_alert_name);
		theForm.name.focus();
		return false;
	}
	
	var rephone=/^[0-9]+$/;
	if (theForm.phone.value=='' || theForm.phone.value==theForm.phone.defaultValue) 
	{
		alert(lang_alert_phone);
		theForm.name.focus();
		return false;
	}else if(!theForm.phone.value.match(rephone) || theForm.phone.value.length >12 || theForm.phone.value.length <10 )
	{
		alert(lang_alert_phone_error);
		theForm.phone.focus();
		return false;
	}
	
	if (theForm.email.value=='' || theForm.email.value==theForm.email.defaultValue)
	{
		alert(lang_alert_email);
		theForm.email.focus();
		return false;
	}
	
	if (theForm.email.value.indexOf('@', 0) == -1 || theForm.email.value.indexOf('.') == -1)
	{
		alert(lang_alert_email_error);
		theForm.email.focus();
		return false;
	}
	
	if (theForm.title.value=='' || theForm.title.value==theForm.title.defaultValue) 
	{
		alert(lang_alert_title);
		theForm.title.focus();
		return false;
	}
	
	if (theForm.message.value=='' || theForm.message.value==theForm.message.defaultValue) 
	{
		alert(lang_alert_content);
		theForm.message.focus();
		return false;
	}
	
	return true;
}



function vcart(theForm) 
{
	if (theForm.cart_name.value=='' || theForm.cart_name.value==theForm.cart_name.defaultValue) 
	{
		alert(lang_alert_name);
		theForm.cart_name.focus();
		return false;
	}
	if (theForm.cart_add.value=='' || theForm.cart_add.value==theForm.cart_add.defaultValue) 
	{
		alert("Bạn chưa nhập địa chỉ!");
		theForm.cart_add.focus();
		return false;
	}
	//if (theForm.cart_add.value.length <=8) 
//	{
//		alert("Vui lòng \"nhập đúng\" địa chỉ giao hàng!");
//		theForm.cart_add.focus();
//		return false;
//	}
	var rephone=/^[0-9]+$/;
	if (theForm.cart_phone.value=='' || theForm.cart_phone.value==theForm.cart_phone.defaultValue) 
	{
		alert("Bạn chưa nhập số điện thoại.");
		theForm.cart_phone.focus();
		return false;
	}else if(!theForm.cart_phone.value.match(rephone) || theForm.cart_phone.value.length >12 || theForm.cart_phone.value.length <10 )
	{
		alert("Số điện thoại không đúng!");
		theForm.cart_phone.focus();
		return false;
	}
	//if (isNaN(theForm.cart_phone.value) )
//	{
//		alert("Vui lòng nhập đúng số điện thoại!");
//		theForm.cart_phone.focus();
//		return false;
//	}
	//if (theForm.cart_add.value.length <=8) 
//	{
//		alert("Vui lòng nhập đúng số điện thoại!");
//		theForm.cart_phone.focus();
//		return false;
//	}
	//if (theForm.cart_email.value=='' || theForm.cart_email.value==theForm.cart_email.defaultValue )
//	{
//		alert("Vui lòng điền Email.");
//		theForm.cart_email.focus();
//		return false;
//	}
	if (theForm.cart_email.value !='' && (theForm.cart_email.value.indexOf('@', 0) == -1 || theForm.cart_email.value.indexOf('.') == -1))
	{
		alert("Vui lòng điền đúng Email!");
		theForm.cart_email.focus();
		return false;
	}
	
	return true;
}

// CART UPDATE
function chk_cart_upt(product_id)
{
	var the_form = document.getElementById("cart_step2_1");

	for ( var i = 0; i < the_form.length; i++ )
	{
		// Period
		if ( the_form[i].name == "count_"+product_id )
		{
			if (isNaN( the_form[i].value))
			{
				//UPDATE BTN
				alert("Vui lòng nhập số!");
				//document.getElementById("cart_update").setAttribute("disabled","");		
				//document.getElementById("cart_update").setAttribute("style","opacity: 0.4; font-weight: normal; color: rgb(0, 0, 0); cursor: default;");
				
				// NEXT
				document.getElementById("sub_mit").setAttribute("href",site_root_domain+"/gio-hang-cua-toi.html");
				document.getElementById("sub_mit").setAttribute("disabled","");		
				document.getElementById("sub_mit").setAttribute("style","opacity: 0.4; font-weight: normal; color: rgb(0, 0, 0); cursor: default;");
				
				return false;
			}
			if (document.getElementById("sp_"+product_id).value <=0)
			{
				
				alert("Số lượng phải lớn hơn 0");
				
				//UPDATE BTN
				//document.getElementById("cart_update").setAttribute("disabled","disabled");		
				//document.getElementById("cart_update").setAttribute("style","opacity: 0.4; font-weight: normal; color: rgb(0, 0, 0); cursor: default;");
				
				// NEXT
				document.getElementById("sub_mit").setAttribute("disabled","disabled");		
				document.getElementById("sub_mit").setAttribute("style","opacity: 0.4; font-weight: normal; color: rgb(0, 0, 0); cursor: default;");
				
				return false;
			}
			else
			{
				//UPDATE BTN
				//document.getElementById("cart_update").removeAttribute("disabled");		
				//document.getElementById("cart_update").removeAttribute("style");
				
				document.getElementById("sub_mit").removeAttribute("disabled");		
				document.getElementById("sub_mit").removeAttribute("style");
				
				// NEXT
//				document.getElementById("cart_steps2").setAttribute("href",site_root_domain+"/gio-hang-cua-toi/nhap-thong-tin.html");
//				document.getElementById("cart_steps2").removeAttribute("disabled","");		
//				document.getElementById("cart_steps2").removeAttribute("style");
				
				var sl = document.getElementById("sp_"+product_id).value;
				$.ajax({
					type:"POST",
					url: site_root_domain+"/?site=cart&act=process_cart",
					data: "product_id="+product_id+"&sl="+sl,
					success: function(html) 
					{//alert(html);return false;
						if(html != 0)
						{
							alert(alert_quantity_cart_1+html+alert_quantity_cart_2); return false;
						}else 
						{
							window.location = site_root_domain+"/gio-hang-cua-toi.html";
						}
					}
				});	

			}
		}
	}
	return true;
	
}

function turnon_button()
{
	var the_form = document.getElementById("cart_step2_1");
	for ( var i = 0; i < the_form.length; i++ )
	{

				//document.getElementById("cart_update").removeAttribute("disabled");		
				//document.getElementById("cart_update").setAttribute("style","cursor: pointer;");
				
	}
	
	var the_form = document.getElementById("cart_step2_2");
	for ( var i = 0; i < the_form.length; i++ )
	{
				document.getElementById("sub_mit").removeAttribute("disabled");
				document.getElementById("sub_mit").setAttribute("style","cursor: pointer;");
	}
}

// Alert when add a product
function cart_messenger_add()
{
	var r=confirm("Đã thêm 1 sản phẩm vào giỏ hàng");
	
	if (r==true)
  	{
  		alert("Vào giỏ hàng");
  	}
	else
	{
  		alert("Tiếp tục mua hàng");
  	}
	
}

	//############################################
	// ADD CART
	//############################################
	function add_cart_once(product_id,product_name)
	{		
		AjaxRequest.get(
		{
			'url': site_root_domain+'/gio-hang-cua-toi/them/'+product_id+'.html'
	
			,'onSuccess':function(req)
			{				
				///alert(reg); return;
				if (lang_default == "vn")
				{
					// Popup choice
					$.confirm({
					'title'		: 'Bạn đã thêm sản phẩm vào giỏ hàng',
					'message'	: '<b>' + product_name +'</b>',
					'buttons'	: {
						'Vào giỏ hàng'	: {
							'class'	: 'gray',
							'action': function(){
								$(window.location).attr('href', site_root_domain+'/gio-hang-cua-toi.html');
							}
						},
						'Tiếp tục mua'	: {
							'class'	: 'blue',
							'action': function(){
								//$(window.location).attr('href', site_referer+'#topcart');
							}
						}
					}
					});
				}
				else if (lang_default == "en")
				{
					// Popup choice
					$.confirm({
					'title'		: 'You have added product to cart',
					'message'	: '<b>' + product_name +'</b>',
					'buttons'	: {
						'Add to cart'	: {
							'class'	: 'gray',
							'action': function(){
								$(window.location).attr('href', site_root_domain+'/gio-hang-cua-toi.html');
							}
						},
						'Continue shopping'	: {
							'class'	: 'blue',
							'action': function(){
								//$(window.location).attr('href', site_referer+'#topcart');
							}
						}
					}
					});
				}
				
				// Insert cart HTML
				document.getElementById("topcart_content").innerHTML = req.responseText;
				
				open_cart();
			}
		}
		);
	}
	
	function check_cart(cartc)
	{
		if ( cartc > 0 )
		{
			document.getElementById("topcart").style.display = "block";	
		}
	}
	
	function open_cart()
	{
		document.getElementById("topcart").style.display = "block";	
	}
	
	function get_exchange_rate(value)
	{
		var tongtien = document.getElementById("tongtienbk").value;
		
		var n=value.split("-");
		
		tongtien = tongtien/n[0];
		
		tongtien = Math.floor(tongtien); 
		
		var rate = n[1];
		
		var pattern = / /gi;
		
		if (rate.match(pattern))
		{
			rate= rate.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
			rate= rate.replace(" ","");
			rate= rate.replace(" ","");	
		}

		if (value !=0)
		{

			AjaxRequest.get(
			{
				'url': site_root_domain+'/gio-hang-cua-toi/tygia-'+tongtien+'-'+rate+'.html'
		
				,'onSuccess':function(req)
				{
					//alert(req.responseText);
					document.getElementById("exchange_rate_text").innerHTML = req.responseText;
				}
			}
			);
		}
		else if (value ==0)
		{
			result = 0;
			
			document.getElementById("exchange_rate_text").innerHTML = result;
		}	
	}
	
	function add_cart_once_v2(product_id,product_name,product_situation)
	{		
		if (product_situation == 1)
		{
			alert(sold_out);
			return false;
		}
		
		AjaxRequest.get(
		{
			'url': site_root_domain+'/gio-hang-cua-toi/them/'+product_id+'.html'
	
			,'onSuccess':function(req)
			{			
				TINY.box.show({html:box_mess_cart+'<span>'+product_name+'</span>',animate:false,close:true,mask:false,boxid:'success',autohide:2,top:20,left:540});
				var url = site_root_domain+'?site=cart&act=load_cart';
				$("#load_cart").load(url);
				return false;
			}
		}
		);
	}
	
	function add_product_compare(product_id,product_name)
	{				
		AjaxRequest.get(
		{
			'url': site_root_domain+'?site=compare&act=add&id='+product_id
	
			,'onSuccess':function(req)
			{				
				if(req.responseText == 1)
				{
					TINY.box.show({html:box_mess_compare+'<span>'+product_name+'</span>',animate:false,close:true,mask:false,boxid:'success',autohide:2,top:20,left:540});
					var url = site_root_domain+'?site=compare&act=load';
					$("#load_compare").load(url);
					return false;
				}
				else
				{
					alert(req.responseText);
				}
			}
		}
		);
	}
	
	function delete_product_compare(product_id)
	{	
		AjaxRequest.get(
		{
			'url': site_root_domain+'?site=compare&act=delete&id='+product_id
	
			,'onSuccess':function(req)
			{				
				if(req.responseText == 1)
				{
					//alert('ok');
					var url = site_root_domain+'?site=compare&act=load';
					$("#load_compare").load(url);
					return false;
				}
				else
				{
					alert(req.responseText);
				}
			}
		}
		);
	}
	
	//$('a.pd_compare').live('click', function() 
//	{
//		myWindow=window.open(site_root_domain+'/so-sanh-san-pham.html', 'tabbox', 'width=900, height=700, status=no, menubar=no, location=no, resizable=yes, toolbar=no, scrollbars=yes');
//		myWindow.focus();		
//	});
	
	$('.delete_compare').live('click', function() 
	{
		var id = $(this).attr('id');

		AjaxRequest.get(
		{
			'url': site_root_domain+'?site=compare&act=delete&id='+id
			,'onSuccess':function(req)
			{
				location.reload();
			}
		}
		);
	});
	
	$(document).ready(function() 
	{
		$('a.login-window').live('click', function()
		{
					//Getting the variable's value from a link 
			var loginBox = '#login-box';

			//Fade in the Popup
			$(loginBox).fadeIn(300);
			
			//Set the center alignment padding + border see css style
			var popMargTop = ($(loginBox).height() + 24) / 2; 
			var popMargLeft = ($(loginBox).width() + 24) / 2; 
			
			$(loginBox).css({ 
				'margin-top' : -popMargTop,
				'margin-left' : -popMargLeft
			});
			
			// Add the mask to body
			$('body').append('<div id="mask"></div>');
			$('#mask').fadeIn(300);
			
			return false;
		});
		
		// When clicking on the button close or the mask layer the popup closed
		$('a.close, #mask').live('click', function() 
		{ 
			$('#mask , .login-popup').fadeOut(300 , function() 
			{
			  $('#mask').remove();  
			  $('.error').html('');
			}); 
			return false;
		});
		
		$(".signin").submit(function() 
		{
			var user_name = $("#username").val();
			var user_pass = $("#password").val();
			var cout_error = 0;
			if (!user_name)
			{
				$('.error').html(cus_incomplete_field);
				cout_error++;
				return false;
			}
			
			if (!user_pass)
			{
				$('.error').html(cus_incomplete_field);
				cout_error++;
				return false;
			}
			
			if (user_name && user_pass)
			{
				// Check username and pass
				AjaxRequest.get(
				{
					'url': site_root_domain+'?site=register&view=check_login&user_name='+user_name+'&user_pass='+user_pass
					,'onSuccess':function(req)
					{
						if(req.responseText == 1)
						{
							$('.error').html(login_username_fail);
							cout_error++;
							return false;
						}
						else if(req.responseText == 2)
						{
							$('.error').html(login_pass_fail);
							cout_error++;
							return false;
						}
						else if(req.responseText == 3)
						{
							$('.error').html(login_user_locked);
							cout_error++;
							return false;
						}
						else
						{
							alert(login_success);
							var url = site_root_domain+'?site=register&view=load_login';
							window.location.href = site_root_domain;
						}
					}
				}
				);
			}
			return false;
		});
		
		function reset_display_error()
		{
			$('.user_display_name').html('');
			$('.user_name').html('');
			$('.user_password').html('');
			$('.user_repassword').html('');
			$('.user_email').html('');
			$('.user_phone').html('');
			$('.user_address').html('');
			$('.security').html('');
		}
		
		$("form#register").submit(function() 
		{
			reset_display_error();
			var user_display_name = $("input[name=user_display_name]").val();
			var user_name = $("input[name=user_name]").val();
			var user_password = $("input[name=user_password]").val();
			var user_repassword = $("input[name=user_repassword]").val();
			var user_email = $("input[name=user_email]").val();
			var user_phone = $("input[name=user_phone]").val();
			var user_address = $("input[name=user_address]").val();
			var security = $("input[name=security]").val();
			security = $.md5(security)+$.md5('web4s');
			var check_code = $("input[name=check_code]").val();
			var count_error = 0;
			var user_bdday = $("select[name=user_bdday]").val();
			var user_bdmonth = $("select[name=user_bdmonth]").val();
			var user_bdyear = $("select[name=user_bdyear]").val();
			var user_sex = $("input[name=user_sex]").val();
			// Check null
			if(user_display_name=='' || user_name=='' || user_password=='' || user_repassword=='' || security=='' || user_phone == '' || user_address == '')// || user_email==''
			{
				count_error ++;	
				if (!user_display_name) $('.user_display_name').html(cus_incomplete_field);	
				
				if (!user_name) $('.user_name').html(cus_incomplete_field);	
				
				if (!user_password) $('.user_password').html(cus_incomplete_field);	
				
				if (!user_repassword)$('.user_repassword').html(cus_incomplete_field);	
	
				//if (!user_email)$('.user_email').html(cus_incomplete_field);
				
				if (!user_phone)$('.user_phone').html(cus_incomplete_field);
				
				if (!user_address)$('.user_address').html(cus_incomplete_field);
				
				if (!security)$('.security').html(cus_incomplete_field);
				
				
			}
			// Check password
			if (user_password)
			{
				if (user_password.length <6) 
				{
					count_error ++;	
					$('.user_password').html(cus_limit_password);
				}
				if (user_password != user_repassword)
				{
					count_error ++;	
					$('.user_repassword').html(cus_wrong_repass);
				}
			}
			
			// Check email
			if (user_email && (user_email.indexOf('@', 0) == -1 || user_email.indexOf('.') == -1))
			{
				count_error ++;	
				$('.user_email').html(lang_alert_email_error);
			}
			// Check username
			if(user_name)
			{
				AjaxRequest.get(
				{
					'url': site_root_domain+'?site=register&view=check_username&user_name='+user_name
					,'onSuccess':function(req)
					{
						if(req.responseText == 1)
						{
							$('.user_name').html(cus_username_exist);
							count_error ++;	
						}
					}
				}
				);
			}
			
			if(user_email)
			{
				AjaxRequest.get(
				{
					'url': site_root_domain+'?site=register&view=check_username&user_email='+user_email
					,'onSuccess':function(req)
					{
						if(req.responseText == 1)
						{
							$('.user_email').html(cus_email_exist);
							count_error ++;	
						}
					}
				}
				);
			}
			
			// Check code security
			if (check_code !=security)
			{
				$('.security').html(cus_wrong_security);
				count_error ++;	
			}

			if (count_error>0)
			{
				return false;
			}
			else // Add 
			{
				var dataString = 'user_display_name='+ user_display_name + '&user_name=' + user_name + '&user_password=' + user_password+ '&user_email=' + user_email +"&user_phone="+user_phone+"&user_address="+user_address+"&user_bdday="+user_bdday+"&user_bdmonth="+user_bdmonth+"&user_bdyear="+user_bdyear+"&user_sex="+user_sex;

				AjaxRequest.get(
				{
					'url': site_root_domain+'?site=register&view=add&'+dataString
					,'onSuccess':function(req)
					{
						if (req.responseText == 1)
						{
							window.location.href = site_root_domain+'/dang-ky-thanh-vien/thanh-cong.html';
						}
						else if (req.responseText == 2)
						{
							$('.user_name').html(cus_username_exist);	
						}
						else if (req.responseText == 3)
						{
							$('.user_email').html(cus_email_exist);	
						}
					}
				}
				);
			}
			return false;
		});
		
		$("form#change_pass").submit(function() 
		{
			$('.old_password').html('');
			$('.user_password').html('');
			$('.user_repassword').html('');

			var old_password = $("input[name=old_password]").val();
			var user_password = $("input[name=user_password]").val();
			var user_repassword = $("input[name=user_repassword]").val();
			
			var count_error = 0;
			// Check null
			if(old_password=='' || user_password=='' || user_repassword=='')
			{
				count_error ++;	
				
				if (!old_password) $('.old_password').html(cus_incomplete_field);	
				
				if (!user_password) $('.user_password').html(cus_incomplete_field);	
				
				if (!user_repassword)$('.user_repassword').html(cus_incomplete_field);	
			}

			if (user_password)
			{
				if (user_password.length <6) 
				{
					count_error ++;	
					$('.user_password').html(cus_limit_password);
				}
			}
			
			// Check password
			if (user_password != user_repassword)
			{
				count_error ++;	
				$('.user_repassword').html(cus_wrong_repass);
			}

			if (count_error>0)
			{
				return false;
			}
			else // Add 
			{
				AjaxRequest.get(
				{
					'url': site_root_domain+'?site=member&act=edit_pass&user_password='+user_password+'&old_password='+old_password
					,'onSuccess':function(req)
					{
						if (req.responseText == 1)
						{
							alert(cus_password_edited);
							window.location.href = site_root_domain+'/trang-thanh-vien.html';
						}
						else
						{
							$('.old_password').html(cus_wrong_current_password);
						}
					}
				}
				);
			}
			return false;
		});
		//$(".buynow").submit(function() 
//		{
//			var temp_product_id = $("#temp_product_id").val();
//			var gateway = $("input:checked").val();
//			
//			if (temp_product_id && gateway)
//			{
//				// Check username and pass
//				AjaxRequest.get(
//				{
//					'url': site_root_domain+'?site=cart&act=buy_now&product_id='+temp_product_id+'&gateway='+gateway
//					,'onSuccess':function(req)
//					{alert(req.responseText);return false;
//						if(req.responseText == 1)
//						{
//							alert(buy_now_success);
//							window.location.href = document.referrer;
//						}
//					}
//				}
//				);
//			}
//			return false;
//		});
	});
	
	//function add_buy_now()
//	{		
//		//Getting the variable's value from a link 
//		var loginBox = '#buy_now';
//	
//		//Fade in the Popup
//		$(loginBox).fadeIn(300);
//		
//		//Set the center alignment padding + border see css style
//		var popMargTop = ($(loginBox).height() + 24) / 2; 
//		var popMargLeft = ($(loginBox).width() + 24) / 2; 
//		
//		$(loginBox).css({ 
//			'margin-top' : -popMargTop,
//			'margin-left' : -popMargLeft
//		});
//		
//		// Add the mask to body
//		$('body').append('<div id="mask"></div>');
//		$('#mask').fadeIn(300);
//	}

	$(function()
	{
		$('.auto-submit-star').rating(
		{
			callback: function(value, link)
			{
				if (rating_userid)
				{
					// rating_userid -> user_id
					// rating_productid -> product_id
					if (!value) value = 0;
	
					AjaxRequest.get(
					{
						'url': site_root_domain+'?site=member&act=rating&rating_userid='+rating_userid+'&rating_productid='+rating_productid+'&value='+value
						,'onSuccess':function(req)
						{//alert(req.responseText);
							$('.info_rating').find('span').remove();
							$(".info_rating").append(req.responseText);
						}
					}
					);
				}
				else
				{
					alert(buy_nologin);
				}
			}
		});
	});
	
	$('.click_thumbnail').live("click", function() 
	{
        $('.zoom_image').hide();

		$('.zoom_image').fadeIn();

        return false; 
    });
	
	function love_product(product_name,product_id,user_id)
	{		
		if (user_id > 0)
		{
			AjaxRequest.get(
			{
				'url': site_root_domain+'?site=member&act=love_product&product_id='+product_id
		
				,'onSuccess':function(req)
				{		//alert(req.responseText);		
					TINY.box.show({html:box_mess_love+'<span>'+product_name+'</span>',animate:false,close:true,mask:false,boxid:'success',autohide:2,top:20,left:540});
					var url = site_root_domain+'?site=cart&act=load_cart';
					$("#load_cart").load(url);
					$('.love a').removeAttr("onclick");
					$(".love a").text(product_love_ok);
					return false;
				}
			}
			);
		}
		else
		{
			alert(buy_nologin);
		}	
	}
	
	function deleteTr(row_id)
	{
		if(row_id)
		{
			AjaxRequest.get(
			{
				'url': site_root_domain+'?site=member&act=remove_pd&product_id='+row_id
		
				,'onSuccess':function(req)
				{		//alert(req.responseText);		
					$('#my_row_'+row_id).remove();
					return false;
				}
			}
			);
		}
	}