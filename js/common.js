// Dependencias: -Crypto

// Uso: 
// Tras haber iniciado la aplicación con el main.js
// En el primer archivo .js invocado usar el siguiente código:

// Cargamos el objeto de validación
// const validacion = require("./Validar.js");

// if (!validacion.validar()) {
//     //Hacer algo...
// }

var ElectronValIE = {
    //Contraseña secreta que se encuentra en el menú y la app
    llave : "25573DB64F2FCDB68A558677D9234",

    //Encrypta una string respecto a un llave dada
    //Retorna la string encriptada en hexadecimal
    sha: function (text, llave){
        //Requiere la instalación de la librería crypto en Electron
        var crypto;
        //try {
            crypto = require('crypto');
        /*} catch (err) {
            console.log('crypto no está instalado.');
        }*/

        var hash, hashHex;
        hash = crypto.createHmac('sha256', llave);
        hash.update(text)
        hashHex = hash.digest('hex');
        return hashHex;
    },

    //Obtener la fecha actual con horas, minutos y segundos
    getFecha: function () {
        var fecha = new Date();
    
        var anio = fecha.getFullYear();
        var mes = fecha.getMonth() + 1;
        var dia  = fecha.getDate();
        var hora = fecha.getHours();
        var minutos  = fecha.getMinutes();

        return String(anio)+String(mes)+String(dia)+String(hora)+String(minutos);
    },

    //Obtiene los argumentos con los cuales se llama la aplicación desde el menú
    //Retorna TRUE o FALSE respecto a si la validación ha sido existosa
    valOK: function () {
        //obtenemos los argumentos enviados desde el menú
        var args = require('electron').remote.process.argv;

        if(args.length != 2 || args == undefined)
        {
            return false;
        }
        else{
            args = args[1].split(',');
    
            var licencia = args[1];
            var codigo = args[2];
            var carpeta = args[args.length-1];
            var fecha = this.getFecha();
    
            var codigoGenerado = this.sha(carpeta+fecha+licencia, this.llave);
            return codigoGenerado == codigo;
        }
    }
};



var CordovaValIE = {
    //Contraseña secreta que se encuentra en el menú y la app
    llave : "25573DB64F2FCDB68A558677D9234",
    //Obtener la fecha actual con horas, minutos y segundos
    getFecha: function () {
        var fecha = new Date();

        var anio = fecha.getFullYear();
        var mes = fecha.getMonth() + 1;
        var dia  = fecha.getDate();
        var hora = fecha.getHours();
        var minutos  = fecha.getMinutes();

        return String(anio)+String(mes)+String(dia)+String(hora)+String(minutos);
    },

    //Retorna TRUE o FALSE respecto a si la validación ha sido existosa
    valOK: function (_url) {

        console.log(_url);
		    var data = _url.split(',');

        if(data.length == 3 || data.length == 6){
          var licencia = data[0];
          var codigo = data[1];
          var aplicacion = data[data.length-1];
          console.log(aplicacion);
          var fecha = this.getFecha();
          var hash = CryptoJS.HmacSHA256(aplicacion + fecha + licencia, this.llave);
          return (codigo == hash);
        }else{
            return false;
        }
    }
};



