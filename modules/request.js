const https = require('https');

module.exports = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            https.get(url, res => {
                res.setEncoding("utf8");
                let body = "";
                res.on("data", data => {
                  body += data;
                });
                res.on("end", () => {
                    try{
                        let json = JSON.parse(body);
                        resolve(json);
                    }
                    catch(e){
                        reject(e);
                    }
                  
                });

            }).on('error', (e) => {
                reject(e);
            });
        })
    }
}