self.addEventListener('install', function(event) {
    console.log('installed!', event)
});
self.addEventListener('activate', function(event) {
    console.log('activated!', event)
});
self.addEventListener('fetch', function(event) {
    console.log('fetch', event)
});