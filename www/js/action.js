
var fn = {
    ready: function(){
        alert("=)");
        document.addEventListener("deviceready", fn.init(), false);
        
    },
    init: function(){   
        alert("2");
        $('#contact').tap(fn.activa);
        $('#eye').tap(fn.activa);
        $('#head').tap(fn.activa);
        
    },
    activa:function(){
    alert("3");
    // Vibrate for 3 seconds
    navigator.vibrate(3000);
 
   },

   beep:function(){

    navigator.notification.beep(2);
   },

   notifi:function(){
        navigator.notification.prompt(
            'Please enter your name',  // message
            alerta,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );

   },

   alerta:function(){
    alert("demissed");
   }

};



$(fn.ready);



