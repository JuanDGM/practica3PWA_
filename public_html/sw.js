
const CACHE_STATIC='static-v1';


self.addEventListener('install', e=>{
    
    const respuesta = caches.open(CACHE_STATIC).then(resp=>{
        resp.addAll([
            'index.html',
            'css/styles.css',
            'js/app.js',
            'sw.js',
            'manifest.json'
        ]);
        
        
    });
    
    e.waitUntil(respuesta);
    
});



self.addEventListener('fetch', e=>{
    
    
    e.respondWith(caches.match(e.request));
    
});


