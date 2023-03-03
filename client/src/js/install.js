const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    // butInstall.style.visibility = 'visible';
    // butInstall.textContent = 'Install!'
    console.log('event line 9', event);
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
    const promptEvent = window.deferredPrompt;
    console.log('event line 19', promptEvent);
    if(!promptEvent){
        return;
    }
    promptEvent.prompt()
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('event line 28', event);
    console.log('App installed!');
    butInstall.textContent = 'Installed!';
    window.deferredPrompt  = null;
});
