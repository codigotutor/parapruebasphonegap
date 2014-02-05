// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


    /* --------------------------------- Event Registration -------------------------------- */
    //$(window).on('hashchange', route);

    document.addEventListener('deviceready', function () {

       
	  if(verificarConexion())
		{	
				navigator.notification.alert(
				'Hay Conexion.',   
				null,         
			    'Mensaje',         
			    'Cerrar'               
			);
	    }
	    else
	    {
		    navigator.notification.alert(
				'No es posible SIN conexion',   
				null,         
			    'Mensaje',         
			    'Cerrar'               
			);
	    }


    }, false);




    function verificarConexion() {


    	if(device.platform != "BlackBerry")
	    	if(navigator.network.connection.type == Connection.NONE)
				return false;

		
	    return true;
    }



}());