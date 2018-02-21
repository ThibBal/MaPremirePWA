/**
 * Created by thibault on 21/02/2018.
 */
document.addEventListener('DOMContentLoaded', init, false);
function init() {

    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/serviceworker.js')
            .then((registration) => {
                console.log('Service Worker installed!');
            }).catch((err) => {
            console.error('Service Worker failed', err);
        });
    }

}