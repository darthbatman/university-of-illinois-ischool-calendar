var ical = require('ical');
var URL = "http://ischool.illinois.edu/ischool-events.ics";

function removeTags(str) {
    if (str) {
        return str.toString().replace(/<(?:.|\n)*?>/gm, '');
    }
}

ical.fromURL(URL, {}, function (err, data) {
                // Loop through all iCal data found
                for (var k in data) {
                    if (data.hasOwnProperty(k)) {
                        
                        var ev = data[k];
                        // Pick out the data relevant to us and create an object to hold it.
                        // console.log(typeof(ev.description));
                        // console.log(ev.description);
                        // console.log(typeof(removeTags(ev.description)));
                        // console.log(removeTags(ev.description));

                        var eventData = {
                            
                        };

                        if (ev.summary){
                            eventData.summary = removeTags(ev.summary);
                        }
                        if (ev.location){
                            eventData.location = removeTags(ev.location);
                        }
                        if (ev.description){
                            eventData.description = removeTags(ev.description).replace(/=/g, "").replace(/\n/g, " ").substring(0, removeTags(ev.description).replace(/=/g, "").replace(/\n/g, " ").indexOf("http:"));
                        }
                        if (ev.summary){
                            eventData.start = removeTags(ev.start);
                        }
                        console.log(eventData);
                        // add the newly created object to an array for use later.
                    
                    }
                }
            });