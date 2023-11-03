/*
var platformType = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Electron: function () {

        if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
            return true;
        }

        if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
            return true;
        }

        if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
            return true;
        }

        return false;
    }
}

function openPdf(guiaPdf) {
    if(platformType.Android()) { 
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/' + guiaPdf, function(fileEntry) {
            window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
                fileEntry.copyTo(dirEntry, 'guia.pdf', function(newFileEntry) {
                    cordova.plugins.fileOpener2.open(newFileEntry.nativeURL,'application/pdf',{ 
                        error : function(e) { 
                            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                        },
                        success : function () {
                            console.log('file opened successfully'); 
                        }
                    }
                    );
                });
            });
        });
    }
    else if(platformType.iOS()){
    cordova.plugins.fileOpener2.open(cordova.file.applicationDirectory + 'www/' + guiaPdf,'application/pdf', { 
        error : function(e) { 
            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
            console.log('file opened successfully'); 
        }
    });
    }
    else if (platformType.Electron()){

        const remote = require('electron').remote;
        const BrowserWindow = remote.BrowserWindow;
        const PDFWindow = require('electron-pdf-window');

        const win = new BrowserWindow({ width: 1200, height: 800});

        PDFWindow.addSupport(win);

        win.setMenu(null);
        win.loadURL('file://' + __dirname + '/' + guiaPdf);

    }
    else {
        window.open(guiaPdf, '_blank', 'menubar=no,location=no,scrollbars=yes');
    }
}

//se agrega esta parte en el js que llame el index para validar la seguridad
var initSession = window.sessionStorage.getItem('valSession');
//alert("mobile platform 1");


if(platformType.Electron()){
    var _bundle_id = "cloudlabs.cn.primaria.unidad8";
    var remote = require('electron').remote;
    const app = remote.app;
}

if(platformType.Android() || platformType.iOS()){
    var _url = "";

    function handleOpenURL(url) {
        _url = String(url).substring(String(url).indexOf("A=") + 2,100000);
    }

    function onDeviceReady() {
        
        setTimeout(function () {
            if (_url != "" && _url != undefined && _url != null) {
                //Se comprueban los parámetros enviados a la aplicación.
                if (CordovaValIE.valOK(_url)) {
                    window.sessionStorage.setItem('valSession', true);
                    execContent();
                } else {
                    swal({
                            title: "Error!",
                            text: "No ha sido posible comprobar su número de licencia. Asegúrese que esté abriendo esta aplicación desde el menú principal CloudLabs.",
                            type: "error",
                            showCancelButton: false,
                            closeOnConfirm: false,
                            showLoaderOnConfirm: true,
                            confirmButtonText: "Aceptar"
                        },
                        function () {
                            cerrarApp();
                        });
                }
            } else {
                swal({
                        title: "Error!",
                        text: "No ha sido posible comprobar su número de licencia. Asegúrese que esté abriendo esta aplicación desde el menú principal CloudLabs.",
                        type: "error",
                        showCancelButton: false,
                        closeOnConfirm: false,
                        showLoaderOnConfirm: true,
                        confirmButtonText: "Aceptar"
                    },
                    function () {
                        cerrarApp();
                    });
            }
        }, 300);
    }

    function cerrarApp() {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        } else {
            window.close();
        }
    }
}



$(document).ready(function(){
    // *************Inicio segunda parte agregada **************** * /

    //se agrega esta parte para validar la sesion de seguridad
    if(platformType.Electron()){
        if (initSession == null ){
            if (ElectronValIE.valOK()) {
                
                window.sessionStorage.setItem('valSession', true);
                //app.console.log(window.sessionStorage.getItem('valSession'));
                execContent();
                
            } else {
                
                swal({
                    title: "Error!",
                    text: "No ha sido posible comprobar su número de licencia. Asegúrese que esté abriendo esta aplicación desde el menú principal CloudLabs.",
                    type: "error",
                    showCancelButton: false,
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true,
                    confirmButtonText: "Aceptar"
                },
                function(){
                    remote.getCurrentWindow().close();
                });
            }
        }
        else {
            execContent();
        }
    } else if(platformType.Android() || platformType.iOS()){
        
        if ( initSession == undefined || initSession == null) {
            document.addEventListener("deviceready", onDeviceReady, false);
            //console.log("variable ondeviceready", initSession);
        }
        else{
            //console.log("variable execContent", initSession);
            execContent();
        }
    }
});	

    //se inicia el contenido despues de validar la seguridad
function execContent(){

        //se cambia el estado del container principal para mostrar el contenido despues de validar la seguridad
        $("#container-principal").show();
*/
// para activar la seguridad se deben quitar el comentario multilinea que abre en el inicio del documento y cierra una linea mas arriba
// se debe eliminar la linea del $(document).ready(function(){ siguiente y comentar el ultimo ) antes del cierre ;
$(document).ready(function(){
    /*************************inicio scroll y popups*******************************************/
    $(".contenidoInfo,.textoCont,.item h4,.contenidoPopp7").niceScroll({
        cursorcolor:"#793187",
        cursorwidth:"12px"
    });

    $(".tableroTexto").niceScroll({
        cursorcolor:"#ffffff",
        cursorwidth:"12px"
    });
    
    $('.closeGenerico').click(function() {
        $('.overlayGenerico').fadeOut(300);
        stopAudios();
        $("#iconPlayF").removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#iconPlayS").removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#iconPlayD").removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");  
        $("#audioLabs")[0].play();   
    });
    
    $('.closeGenericop7').click(function() {
        stopAudios();
        $('.overlayGenericop7').fadeOut(300);
    });

    $('#emojiKo,#emojiOk').click(function() {
        $('.overlayGenerico').fadeOut(300);
    });
    /*************************fin scroll y popups*********************************************/

    /*************************inicio botones header*******************************************/

    $("#textoUno").html("CLOUDLABS ADVENTURE");
    $("#textoDos").html("Vision World");

    $('.iconBulb').click(function() {
        $("#textoUno").html("CLOUDLABS ADVENTURE");
        $("#textoDos").html("Vision World");
        $("body").css("background-image","url(img/home_background.jpg)");
        $(".screen,footer,.inicio,.practicasLaboratorio").hide();
        $(".screen").removeClass("on off").addClass("off");
        $(".actividadesAprendizaje").css("display","flex")
        stopAudios();
        $("#iconBackF").data("pant","1")
        $("#iconNextF").data("pant","1")
        $("footer .progress .paginas").text("Pag 1/"+totalPant);
        porcentaje=1*100/totalPant
        $('.progress-bar').css('width', porcentaje+'%');
        $("#container-principal").css("position","relative");
        $(".pantallaTipo1 .tooltip-left,.pantallaTipo1 .tooltip-right").hide();
        $(".circle,.triangle").show();
        $("#iconPlayS").hide();
        $("#iconPlayD").hide().removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#iconPlayF").show().removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
    });

    $('.iconVaso').click(function() {    
        $("#textoUno").html("CLOUDLABS ADVENTURE");
        $("#textoDos").html("Vision World");
        $("body").css("background-image","url(img/home_background.jpg)");
        $(".screen,footer,.inicio,.actividadesAprendizaje").hide();
        $(".screen").removeClass("on off").addClass("off");
        $(".practicasLaboratorio").css("display","flex")
        stopAudios();
        $("#iconBackF").data("pant","1")
        $("#iconNextF").data("pant","1")
        $("footer .progress .paginas").text("Pag 1/"+totalPant);
        porcentaje=1*100/totalPant
        $('.progress-bar').css('width', porcentaje+'%');
        $("#container-principal").css("position","relative");
        $(".pantallaTipo1 .tooltip-left,.pantallaTipo1 .tooltip-right").hide();
        $(".circle,.triangle").show();
        $("#iconPlayS").hide();
        $("#iconPlayD").hide().removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#iconPlayF").show().removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
    });    

    $('.iconBook').click(function() {
        $('#popupBibliografia').fadeIn(300);
        $(".contenidoInfo").getNiceScroll().resize();
        $("#audioLabs")[0].pause();
        $("#audioSlide")[0].pause();
        $("#iconPlayS").addClass("off").css("background-image","url(img/play_button.svg)");
        $("#iconPlayF").addClass("off").css("background-image","url(img/play_button.svg)");
        $("#iconPlayD").addClass("off").css("background-image","url(img/play_button.svg)");
    });
    $('.iconInfo').click(function() {
        $('#popupInfo').fadeIn(300);
        $("#audioLabs")[0].pause();
        $("#audioSlide")[0].pause();
        $("#iconPlayS").addClass("off").css("background-image","url(img/play_button.svg)");
        $("#iconPlayF").addClass("off").css("background-image","url(img/play_button.svg)");
        $("#iconPlayD").addClass("off").css("background-image","url(img/play_button.svg)");
    });

    $('.menres').click(function() {
        if($(this).hasClass("off")){
            $(".iconsCloudLabsm").show()
            $(this).removeClass("off").addClass("on")
        } else {
            $(".iconsCloudLabsm").hide()
            $(this).removeClass("on").addClass("off")
        }
    });

    /*************************fin botones header**********************************************/

    /*************************inicio botones footer*******************************************/

    $('#iconGlosF').click(function() {
        $('#popupGlosario').fadeIn(300);
        $(".contenidoInfo").getNiceScroll().resize();
        $("#audioLabs")[0].pause();
        $("#audioSlide")[0].pause();
        $("#iconPlayS").addClass("off").css("background-image","url(img/play_button.svg)");
        $("#iconPlayF").removeClass("on").addClass("off"); 
        $("#iconPlayF").css("background-image","url(img/play_button.svg)"); 
    });

    $(".iconHome,#iconHomeF,.back").click(function() {
        $("#textoUno").html("CLOUDLABS ADVENTURE");
        $("#textoDos").html("Vision World");
        $("body").css("background-image","url(img/home_background.jpg)");
        $(".screen,footer,.actividadesAprendizaje,.practicasLaboratorio").hide();
        $(".screen").removeClass("on off").addClass("off");
        stopAudios();
        $(".inicio").show()
        $("#iconBackF").data("pant","1")
        $("#iconNextF").data("pant","1")
        $("footer .progress .paginas").text("Pag 1/"+totalPant);
        porcentaje=1*100/totalPant
        $('.progress-bar').css('width', porcentaje+'%');
        $("#container-principal").css("position","relative");
        $(".pantallaTipo1 .tooltip-left,.pantallaTipo1 .tooltip-right").hide();
        $(".circle,.triangle").show();
        $("#iconPlayS").hide();
        $("#iconPlayD").hide().removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#iconPlayF").show().removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
    });

    $("#iconVoluF").click(function() {
        if($(this).hasClass("off")){
            $(this).removeClass("off").addClass("on").css("background-image","url(img/mute.png)");
            $("#audioLabs")[0].volume = 0;
            $("#audioInstantanea")[0].volume = 0;
            $("#audioPhoto")[0].volume = 0;
            $("#audioSlide")[0].volume = 0;
            $("#audioCelebracion")[0].volume = 0;
            $("#audioContenido")[0].volume = 0;
            $("video")[0].volume = 0;
        }
        else{
            $(this).removeClass("on").addClass("off").css("background-image","url(img/sound_button.svg)");
            $("#audioLabs")[0].volume = 1;
            $("#audioInstantanea")[0].volume = 1;
            $("#audioPhoto")[0].volume = 1;
            $("#audioSlide")[0].volume = 1;
            $("#audioCelebracion")[0].volume = 1;
            $("#audioContenido")[0].volume = 1;
            $("video")[0].volume = 1;
        }
    });


    $("#iconBackF").click(function() {
        stopAudios();
        $("body").css("background-image","none");
        if(parseInt($(this).data("pant"))>1){
            $(".fotos--01,.fotos--02,.fotos--03,.fotos--04,.fotos--05").css("opacity","0");
            $("#audioLabs")[0].pause();    
            $("#iconPlayF").removeClass("on").addClass("off");
            $("#iconPlayF").css("background-image","url(img/play_button.svg)");        
            $("#iconNextF").prop("disable",false);
            $("#iconNextF").css("pointer-events","");
            $(".screen").hide().removeClass("on off").addClass("off");
            idPant=$(this).data("pant");
            back=parseInt(idPant)-1
            idPrincipal="#"+$("#actividadActual").val()+"pt"+back
            $(idPrincipal).show().removeClass("off").addClass("on");
            screenPlay(idPrincipal)
            porcentaje=back*100/totalPant
            $('.progress-bar').css('width', porcentaje+'%');
            $("footer .progress .paginas").text("Pag "+back+"/"+totalPant);
            $(this).data("pant",back);
            $("#iconNextF").data("pant",back);
            $(idPrincipal+" .textoCont,"+idPrincipal+".item h4,"+idPrincipal+".tableroTexto").getNiceScroll().resize();
            
            $("#container-principal").css("position","relative")
            if($(idPrincipal).hasClass("pantallaTipo9") || $(idPrincipal).hasClass("pantallaTipo11")){ 
                $("#container-principal").css("position","absolute")
            }

            
            /*Aquí empieza el código para reiniciar la pantalla 6*/
            if($(idPrincipal).hasClass("pantallaTipo6")){             
                $(idPrincipal).css("background-image","url("+$(idPrincipal+" .firstItem").data("img")+")");
                itemsslide = $(idPrincipal).children().children().children().children();

                $(itemsslide).each(function(){
                if(itemsslide.hasClass("active")){
                    itemsslide.removeClass("active")
                }

                itemsslide.first().addClass("active");
                });
            }
             /*Aquí termina el código para reiniciar la pantalla 6*/

            $(".pantallaTipo1 .tooltip-left,.pantallaTipo1 .tooltip-right").hide();
            
            if(idPant <= 2){
              $(this).prop("disable",true);
              $(this).css("pointer-events","none");
            }
        }
        $("#iconPlayS").hide();
        $("#iconPlayD").hide();
        $("#iconPlayF").show();
    })



    $("#iconPlayF").click(function(){
        if($(this).hasClass("off")){
            $(".screen").each(function(){
                if($(this).hasClass("on")){
                    id=($(this).prop("id"))
                }
            })

            if(id=='a1pt1'){
                if(dialogoa1pt1[0]["tipo"]=="1"){
                  $("#audioLabs").prop("src",dialogoa1pt1[0]["audio"])
                    $(".tooltip-right .textoCont").html(dialogoa1pt1[0]["texto"]);
                    $(".textoCont").getNiceScroll().resize();
                    $(".tooltip-left").hide();
                    $(".tooltip-right").show();
                }
                if(dialogoa1pt1[0]["tipo"]=="2"){
                  $("#audioLabs").prop("src",dialogoa1pt1[0][estudiante==1?"audio":"audio1"])
                    $(".tooltip-left .textoCont").html(dialogoa1pt1[0]["texto"]);
                    $(".textoCont").getNiceScroll().resize();
                    $(".tooltip-left").show();
                    $(".tooltip-right").hide();
                }
                ia1pt1=1
            }
            
            $(this).removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
            $("#audioLabs")[0].play();
        }
        else{
            $(this).removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
            $("#audioLabs")[0].pause();
        }

        $("#iconPlayF").hide();
        $("#iconPlayD").show();

        if ($(idPrincipal).hasClass("pantallaTipo2") || 
        $(idPrincipal).hasClass("pantallaTipo3") ||
        $(idPrincipal).hasClass("pantallaTipo4") ||
        $(idPrincipal).hasClass("pantallaTipo5") ||
        $(idPrincipal).hasClass("pantallaTipo6") ||
        $(idPrincipal).hasClass("pantallaTipo7") ||
        $(idPrincipal).hasClass("pantallaTipo8") ||
        $(idPrincipal).hasClass("pantallaTipo9") ||
        $(idPrincipal).hasClass("pantallaTipo10") ||
        $(idPrincipal).hasClass("pantallaTipo11") ||
        $(idPrincipal).hasClass("pantallaTipo12")) {
            $("#iconPlayF").show();
            $("#iconPlayD").hide();
        }
    });

    $("#iconPlayD").click(function(){
        if($(this).hasClass("off")){ 
            $(".screen").each(function(){
                if($(this).hasClass("on")){
                    id=($(this).prop("id"))
                }
            })
            
            $(this).removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
            $("#audioLabs")[0].play();
                      
        }   
        else{
            $(this).removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
            $("#audioLabs")[0].pause();
        }     
        
    });

    $("#iconPlayS").click(function(){
        if($(this).hasClass("off")){
            $(this).removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
            $("#audioSlide")[0].play();
        }

        else{
            $(this).removeClass("on").addClass("off").css("background-image","url(img/play_button.svg)");
            $("#audioSlide")[0].pause();
        }
    });

    $("#iconNextF").click(function() {
        stopAudios();
        $(".fotos--01,.fotos--02,.fotos--03,.fotos--04,.fotos--05").css("opacity","0");
        $("#audioLabs")[0].pause();    
        $("#iconPlayF").removeClass("on").addClass("off");
        $("#iconPlayF").css("background-image","url(img/play_button.svg)");
        $("body").css("background-image","none");
        $("#iconBackF").prop("disable",false);
        $("#iconBackF").css("pointer-events","");
        $(".screen").hide().removeClass("on off").addClass("off");
        idPant=$(this).data("pant");
        next=parseInt(idPant)+1
        idPrincipal="#"+$("#actividadActual").val()+"pt"+next;
        $(idPrincipal).show().removeClass("off").addClass("on");
        screenPlay(idPrincipal)
        porcentaje=next*100/totalPant
        $('.progress-bar').css('width', porcentaje+'%');
        $("footer .progress .paginas").text("Pag "+next+"/"+totalPant);
        $(this).data("pant",next);
        $("#iconBackF").data("pant",next);    
        $(idPrincipal+" .textoCont,"+idPrincipal+".item h4,"+idPrincipal+".tableroTexto").getNiceScroll().resize();

        if($(idPrincipal).hasClass("pantallaTipo4")){             
            $(idPrincipal+" video").prop("src",$(idPrincipal).data(estudiante==1?"video":"video1"));
        }           
        
        /*Aquí empieza el código para reiniciar la pantalla 6*/
        if($(idPrincipal).hasClass("pantallaTipo6")){             
            $(idPrincipal).css("background-image","url("+$(idPrincipal+" .firstItem").data("img")+")");

            itemsslide = $(idPrincipal).children().children().children().children();

            $(itemsslide).each(function(){
                if(itemsslide.hasClass("active")){
                    itemsslide.removeClass("active")
                }

            itemsslide.first().addClass("active");
                });

        }
        /*Aquí termina el código para reiniciar la pantalla 6*/

        if($(idPrincipal).hasClass("pantallaTipo7")){ 
            $(idPrincipal).css("background-image","url("+$(idPrincipal).data("img")+")");            
        }     
        $("#container-principal").css("position","relative")
        if($(idPrincipal).hasClass("pantallaTipo9") || $(idPrincipal).hasClass("pantallaTipo11")){ 
            $("#container-principal").css("position","absolute")
        }   

        $(".pantallaTipo1 .tooltip-left,.pantallaTipo1 .tooltip-right").hide();

        if(next >= totalPant){
          $(this).prop("disable",true);
          $(this).css("pointer-events","none");
        }

        $("#iconPlayS").hide();
        $("#iconPlayD").hide();
        $("#iconPlayF").show();
        return false;
    });



    function screenPlay(id){
        if($(id).hasClass("pantallaTipo2") ||
        $(id).hasClass("pantallaTipo3") ||
        $(id).hasClass("pantallaTipo5") ||
        $(id).hasClass("pantallaTipo6") ||
        $(id).hasClass("pantallaTipo7") ||
        $(id).hasClass("pantallaTipo8") ||
        $(id).hasClass("pantallaTipo9") ||
        $(id).hasClass("pantallaTipo10") ||
        $(id).hasClass("pantallaTipo11")){
            $("#audioLabs").prop("src",$(id).data("sound"));
            $("#iconPlayF").removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
            $("#audioLabs")[0].play();
        }
    }

    $("#audioLabs").prop("src","sound/audio.mp3")
    $("#audioLabs").on('ended',function() {

        $(".screen").each(function(){
            if($(this).hasClass("on")){
                id=($(this).prop("id"))
            }
        })

        if(id=='a1pt4'){
            introInstantaneas(1)
        }
        if(id=='a4pt7'){
            introInstantaneas(5)
        }
       if(id=='a2pt3' || id=='a2pt6' || id=='a3pt6'){
            introInstantaneas(4)
        }
        if(id=='a2pt5'){
            introInstantaneas(3)
        }
        if(id=='a3pt4'){
            introInstantaneas(2)
        }

        if(id=='a1pt1'){
            if(ia1pt1==totalDialogoa1pt1){
                $("#iconPlayF").css("background-image","url(img/play_button.svg)");
                $(".tooltip-left").hide();
                $(".tooltip-right").hide();
                $(this)[0].pause();
            }else{
                if(dialogoa1pt1[ia1pt1]["tipo"]=="1"){
                    $(this).prop("src",dialogoa1pt1[ia1pt1]["audio"])
                    $(".tooltip-right .textoCont").text(dialogoa1pt1[ia1pt1]["texto"]);
                    $(".textoCont").getNiceScroll().resize();
                    $(".tooltip-left").hide();
                    $(".tooltip-right").show();
                }
                if(dialogoa1pt1[ia1pt1]["tipo"]=="2"){
                    $(this).prop("src",dialogoa1pt1[ia1pt1][estudiante==1?"audio":"audio1"])
                    $(".tooltip-left .textoCont").text(dialogoa1pt1[ia1pt1]["texto"]);
                    $(".textoCont").getNiceScroll().resize();
                    $(".tooltip-left").show();
                    $(".tooltip-right").hide();
                }
                $("#iconPlayF").css("background-image","url(img/pause_button.svg)");
                $(this)[0].play();
            }
            ia1pt1++
        }

        $("#iconPlayF").removeClass("on").addClass("off");
        $("#iconPlayF").css("background-image","url(img/play_button.svg)");

    });

    function stopAudios(){
        $('video').trigger('pause');
        $("#audioLabs")[0].pause();
        $("#audioInstantanea")[0].pause();
        $("#audioPhoto")[0].pause();
        $("#audioSlide")[0].pause();
        $("#audioCelebracion")[0].pause();
        $("#audioContenido")[0].pause();
    }
    /*************************fin botones footer**********************************************/

    /*************************inicio home*****************************************************/
    var estudiante=0 //0->no seleccionado 1->niño 2->niña

    if(estudiante==0){
        $('#popupPersonaje').fadeIn(300);
        $('.overlayGenericop').show();
    }

    $('#iconNino').click(function() {
        estudiante=1
        $(".pantallaTipo1 .locIzquiquiero img").prop("src",(estudiante==1)?"img/nino.png":"img/nina.png")
        $('.overlayGenericop').fadeOut(300);
    });
    $('#iconNina').click(function() {
        estudiante=2
        $(".pantallaTipo1 .locIzquiquiero img").prop("src",(estudiante==1)?"img/nino.png":"img/nina.png")
        $('.overlayGenericop').fadeOut(300);
    });

    $("#actividades").click(function(){
        $(".inicio").hide();
        $(".actividadesAprendizaje").css("display","flex");
    })

    $("#practicas").click(function(){
        $(".inicio").hide();
        $(".practicasLaboratorio").css("display","flex");
    })

    $("#objbutton,#conbutton,#metbutton").click(function() {
        $("#popupInfo .contenidoInfo").html($(this).data("inf"))
        $("#audioContenido").prop("src",$(this).data("sound"));
        $("#audioContenido")[0].play();
    });
    /*************************fin home********************************************************/

    /*************************inicio actividades de aprendizaje*******************************/
    var totalPant=13;

    $("#leftact1").click(function(){
        $("#textoUno").html("Vision World");
        $("#textoDos").html("V/TO");
        $(".actividadesAprendizaje").hide();
        $("body").css("background-image","none");
        $("footer").show()
        $(".screen").removeClass("on off").addClass("off");
        $("#a1pt1").removeClass("off").addClass("on")
        $("#iconPlayF").data("pant","pt1");
        $("#a1pt1").show()
        $("#actividadActual").val("a1")
        $("#pantallasActual").val("13")
        totalPant=6;
        $("footer .progress .paginas").text("Pag 1/"+totalPant);
        $("#iconNextF").prop("disable",false);
        $("#iconNextF").css("pointer-events","");
        $(".circle,.triangle").hide();
         if(!$("#a1pt1").hasClass("pantallaTipo1") && !$("#a1pt1").hasClass("pantallaTipo4")){
            $("#audioLabs").prop("src",$("#a1pt1").data("sound"))            
        }
    })

    /*************************fin actividades de aprendizaje *********************************/

    /*************************inicio prácticas de laboratorio *******************************/

    

    /*************************fin prácticas de laboratorio *******************************/

    /**************************inicio funciones pantalla tipo 1****************************************/
     //tipo 1 profesor, tipo 2 alumno
     var dialogoa1pt1=[
        {"tipo":"1","texto":"Hello, the objetive in vision world is everyone in the organization seeing the same clear image of where the business is going and how it’s going to get there.","audio":"sound/act1_p1_a2.mp3"},
        {"tipo":"2","texto":"Hi, I understand, thank you very much.","audio":"sound/Male/act1_p1_a3.mp3", "audio1":"sound/Female/act1_p1_a3.mp3"}]

    var totalDialogoa1pt1=dialogoa1pt1.length;
    var ia1pt1=0;

    /**************************fin funciones pantalla tipo 1*******************************************/

    /**************************inicio funciones pantalla tipo 2****************************************/
    /**************************fin funciones pantalla tipo 2*******************************************/

    /**************************inicio funciones pantalla tipo 3****************************************/
    /**************************fin funciones pantalla tipo 3*******************************************/

    /**************************inicio funciones pantalla tipo 4****************************************/
    /**************************fin funciones pantalla tipo 4*******************************************/

    /**************************inicio funciones pantalla tipo 5****************************************/
    $('.headerInstantaneaUno').click(function() {
        $("#audioInstantanea").prop("src",$(this).data("sound"))
        $("#audioInstantanea")[0].play();

    });

    function introInstantaneas(total){
        
        $(".fotos--01").animate({opacity:'1'},200, function(){
            $("#audioPhoto")[0].play();
        })
        if(total>1){
            $(".fotos--02").delay(1000).animate({opacity:'1'},200, function(){
                $("#audioPhoto")[0].pause();
                $("#audioPhoto")[0].currentTime = 0;
                $("#audioPhoto")[0].play();
            })
        }
        if(total>2){
            $(".fotos--03").delay(2000).animate({opacity:'1'},200, function(){
                $("#audioPhoto")[0].pause();
                $("#audioPhoto")[0].currentTime = 0;
                $("#audioPhoto")[0].play();
            })
        }
        if(total>3){
            $(".fotos--04").delay(3000).animate({opacity:'1'},200, function(){
                $("#audioPhoto")[0].pause();
                $("#audioPhoto")[0].currentTime = 0;
                $("#audioPhoto")[0].play();
            })
        }
        if(total>4){
            $(".fotos--05").delay(4000).animate({opacity:'1'},200, function(){
                $("#audioPhoto")[0].pause();
                $("#audioPhoto")[0].currentTime = 0;
                $("#audioPhoto")[0].play();
            })
        }
    }

    $(".fotos").click(function() {
        $("#audioPhoto")[0].play();
    })



    /**************************fin funciones pantalla tipo 5*******************************************/

    /**************************inicio funciones pantalla tipo 6****************************************/
    const nextIcon = '<img src="./img/right-arrow.svg" class="imgSlide">';
    const prevIcon = '<img src="./img/left-arrow.svg" class="imgSlide">';

    $('.owl-carousel').owlCarousel({
      transitionStyle : "fade",
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin:10,
      touchDrag: false,
      mouseDrag: false,
      autoHeight: true,
      loop:false,
      nav: true,
      navText: [
      prevIcon,
      nextIcon
    ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    })


    $(".owl-next").click(function() {
        stopAudios();
        id=$(this).parent().parent().parent().prop("id")
        $("#"+id+" .owl-item").each(function(){
            if($(this).hasClass("active")){                
                $(this).parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().css("background-image","url("+$(this).children("div").data("img")+")");
                $(this).parent().parent().parent().parent().fadeIn();
                $("#audioSlide").prop("src",$(this).children("div").data("sound")) 
                $("#audioSlide")[0].play();
                $("#iconPlayS").addClass("on").css("background-image","url(img/pause_button.svg)");
                $("#iconPlayS").show();
                $("#iconPlayF").hide();
                return false;
            }
        })
    })

    $(".owl-prev").click(function() {
        stopAudios();
        id=$(this).parent().parent().parent().prop("id")
        $("#"+id+" .owl-item").each(function(){
            if($(this).hasClass("active")){                
                $(this).parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().css("background-image","url("+$(this).children("div").data("img")+")");
                $(this).parent().parent().parent().parent().fadeIn();          
                $("#audioSlide").prop("src",$(this).children("div").data("sound"))
                $("#audioSlide")[0].play();
                $("#iconPlayS").addClass("on").css("background-image","url(img/pause_button.svg)");
                $("#iconPlayS").show();
                $("#iconPlayF").hide();
                return false;
            }
        })
    })

    /**************************fin funciones pantalla tipo 6*******************************************/

    /**************************inicio funciones pantalla tipo 7****************************************/
    $('.punto').click(function() {
        stopAudios();
        if($(this).hasClass("off")){
            pos=$(this).data("pos")-1
            idPadre=$(this).parent().prop("id")
            if(!$("#"+idPadre+" .pos"+pos).hasClass("off")){
                $(".punto").removeClass("purple")
                $(this).removeClass("off").addClass("purple")
                $(".popupGenericop7 .contenidoPopp7").html($(this).data("text"))
                $(".popupGenericop7 img").prop("src",$(this).data("img"))
                $('#popupPantalla7').fadeIn(300);
                $("#audioLabs").prop("src",$(this).data("audio"));                
                $("#audioLabs")[0].play();
            }else{
                $(".popupGenericop7 .contenidoPopp7").html("You must go in order")
                $(".popupGenericop7 img").prop("src",$(this).data("img"))
                $('#popupPantalla7').fadeIn(300);
            }
        }else{
            $(".popupGenericop7 .contenidoPopp7").html($(this).data("text"))
            $(".popupGenericop7 img").prop("src",$(this).data("img"))
            $('#popupPantalla7').fadeIn(300);
            $("#audioLabs").prop("src",$(this).data("audio"));                
            $("#audioLabs")[0].play();   
        }
    });
    /**************************fin funciones pantalla tipo 7*******************************************/

    /**************************inicio funciones pantalla tipo 8****************************************/
    $('.ico8').click(function() {
        id=$(this).parent().parent().parent().prop("id")
        $("#"+id+" .texto8").html($(this).data("text"))
        $("#"+id+" .main8").prop("src",$(this).data("img"))
        $(this).css("filter","grayscale(100%)");
        $("#audioLabs").prop("src",$(this).data("audio"));
        $("#iconPlayF").removeClass("off").addClass("on").css("background-image","url(img/pause_button.svg)");
        $("#audioLabs")[0].play();

    });
    /**************************fin funciones pantalla tipo 8*******************************************/

    /**************************inicio funciones pantalla tipo 9****************************************/

    $("#a2pt4t4p1").draggable({ revert: "invalid" });
    $("#a2pt4t4p2").draggable({ revert: "invalid" });
    $("#a2pt4t4p3").draggable({ revert: "invalid" });
    $("#a2pt4t4p4").draggable({ revert: "invalid" });

    $("#a2pt4p1").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a2pt4p2").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a2pt4p3").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a2pt4p4").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a4pt5t4p1").draggable({ revert: "invalid" });
    $("#a4pt5t4p2").draggable({ revert: "invalid" });
    $("#a4pt5t4p3").draggable({ revert: "invalid" });
    $("#a4pt5t4p4").draggable({ revert: "invalid" });

    $("#a4pt5p1").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a4pt5p2").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a4pt5p3").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $("#a4pt5p4").droppable({
        drop: function( event, ui ) {
            dataId=ui.draggable.attr("id");
            $("#"+dataId.split("t4p")[0]+"Et4p"+dataId.split("t4p")[1]).html("<div class='numero'>"+dataId.split("t4p")[1]+"</div>");
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");
            $(ui.draggable).css("width","100%");
            $(ui.draggable).css("height","150px");
            $("#"+this.id).html(ui.draggable);
            event.preventDefault();
            $("#"+this.id).droppable("disable");
        }
    });

    $('.verificar9').click(function() {
        id=$(this).parent().prop("id")
        verificarRespuestasPantalla9(id,$(this).data("correctas"))
    });

    function verificarRespuestasPantalla9(idPantalla,correctasEntrada){
        var correctas=correctasEntrada.split(",");
        var totalPreguntas=correctas.length;
        var calificacion=0;

        for(i=1;i<=totalPreguntas;i++){
            if(correctas[i-1]==$("#"+idPantalla+"p"+i+" img").attr("id").split(idPantalla+"t4p")[1]){
                calificacion++;
            }
        }

        porcentajeCalificacion=calificacion*100/totalPreguntas;
        calificacion=(calificacion*100/totalPreguntas)/10;

        if(calificacion<10){
            $("#audioCelebracion").prop("src","sound/error.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiKo').fadeIn(300);
        }else{
            $("#audioCelebracion").prop("src","sound/acierto.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiOk').fadeIn(300);
        }
    }

    /**************************fin funciones pantalla tipo 9*******************************************/

    /**************************inicio funciones pantalla tipo 10***************************************/
    $('.pregunta10').click(function() {
        $(this).append("&nbsp;&nbsp;<strong><span>&#10003;</span></strong>");
        $(this).addClass("respsel")
        id=$(this).parent().parent().parent().parent().prop("id")
        $("#"+id+" .pregunta10").css("pointer-events","none");
    });

    $('.verificar10').click(function() {
        id=$(this).parent().prop("id")
        respuesta=false
        $("#"+id+" .pregunta10").each(function(){
            if($(this).hasClass("respsel") && $(this).data("resp")=="ok"){
                respuesta=true
                return false
            }
        })

        $("#"+id+" .pregunta10").each(function(){
            if($(this).data("resp")=="ko"){
                $(this).css("text-decoration","line-through");
            }
        })

        if(respuesta){
            $("#audioCelebracion").prop("src","sound/acierto.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiOk').fadeIn(300);
        }else{
            $(this).css("text-decoration","line-through");
            $("#audioCelebracion").prop("src","sound/error.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiKo').fadeIn(300);
        }

    });
    /**************************fin funciones pantalla tipo 10******************************************/

    /**************************inicio funciones pantalla tipo 11***************************************/
    var last=''
    var lastId=''
    $('.tarjeta').click(function() {
        if($(this).hasClass("off")){
            id=$(this).prop("id")
            $("#"+id+" .img11hide").show()
            $("#"+id+" .img11Ini").hide()
            $(this).addClass("on").removeClass("off")
            if(last==''){
                last=$(this).prop("resp");
                lastId=id
            }else{
                if($(this).data("resp")==$("#"+lastId).data("resp")){
                    $("#"+lastId+" .img11hide").show()
                    $("#"+lastId+" .img11Ini").hide()
                    $("#"+id).css("pointer-events","none")
                    $("#"+lastId).css("pointer-events","none")
                    last=''
                    lastId=''
                    $("#audioCelebracion").prop("src","sound/acierto.mp3");
                    $("#audioCelebracion")[0].play();
                    $('#emojiOk').fadeIn(300);
                }else{
                    setTimeout(function() {
                        $("#"+id+" .img11hide").hide()
                        $("#"+id+" .img11Ini").show()
                        $("#"+lastId+" .img11hide").hide()
                        $("#"+lastId+" .img11Ini").show()
                        $("#"+id).removeClass("on").addClass("off")
                        $("#"+lastId).removeClass("on").addClass("off")
                        last=''
                        lastId=''
                        $("#audioCelebracion").prop("src","sound/error.mp3");
                        $("#audioCelebracion")[0].play();
                        $('#emojiKo').fadeIn(300);
                    }, 400);
                }
            }
        }
    });
    /**************************fin funciones pantalla tipo 11******************************************/

    /**************************inicio funciones pantalla tipo 12***************************************/
    $('.grid').click(function() {
        $(this).addClass("gridSel");
    });

    $('.verificar12').click(function() {

        idPadre=$(this).parent().prop("id")
        respuestas='';
        $("#"+idPadre+" .pantallaTipo12Contenido .grid").each(function(){
            if($(this).hasClass("gridSel")){
                respuestas+=$(this).data("pos")+',';
            }
        })


        if($(this).data("correctas")+','==respuestas){
            $("#audioCelebracion").prop("src","sound/acierto.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiOk').fadeIn(300);
        }else{
            $("#audioCelebracion").prop("src","sound/error.mp3");
            $("#audioCelebracion")[0].play();
            $('#emojiKo').fadeIn(300);
        }

    });
    /**************************fin funciones pantalla tipo 12******************************************/
}
)
;
