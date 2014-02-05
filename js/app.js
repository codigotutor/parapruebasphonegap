// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {

    	navigator.notification.alert(
				'Hola notification',   
				null,         
			    'Mensaje',         
			    'Cerrar'               
			);


    	alert("Hola desde alert");


    	console.log("mostrando bienvenidas");


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

    }



    function verificarConexion() {


    	if(device.platform != "BlackBerry")
	    	if(navigator.network.connection.type == Connection.NONE)
				return false;

		
	    return true;
    }