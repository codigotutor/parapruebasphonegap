// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {


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



        // Empty
    }


    // alert dialog dismissed
        function alertDismissed() {
            console.log("se mostro mensaje");
        }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }



    function verificarConexion() {


    	if(device.platform != "BlackBerry")
	    	if(navigator.network.connection.type == Connection.NONE)
				return false;

		
	    return true;
    }