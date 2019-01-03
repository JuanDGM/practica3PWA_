

let url = window.location.href;

let swLocation = '/practica3PWA/sw.js';



if (navigator.serviceWorker){
        
    if(url.includes('localhost')){
        navigator.serviceWorker.register('./sw.js');
        
    }else{
        
        navigator.serviceWorker.register(swLocation);
    }    
        
}