import React from 'react'

export  const Refresh = () => {
    let http = require('http'); //importing http

    const startKeepAlive  = () => {
    setInterval(function() {
        var options = {
            host: 'https://matthew-williams.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();
    return (
        <div>
            
        </div>
    )
}


