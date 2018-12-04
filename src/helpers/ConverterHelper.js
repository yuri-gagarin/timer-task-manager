const convertedTime = function(milliseconds) {

    function pad(numberString, size) {
        let padded = numberString;
        while(padded.length < size) {
            padded=`0${padded}`;
        }
        return padded;
    }
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds /1000 / 60 / 60) % 24);

    const formattedTime = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2)
    ];

    return formattedTime.join(":");
}

export {convertedTime};