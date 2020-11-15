let textshown = document.getElementById('text');
function displayer(text, speed, pause = 0, repeatTimes = 0, callback = ''){
    //Clears the words from the view
    textshown.innerText = '';
    //Adds backup of the word
    let textSave = text;
    //text to be presented, the speed in miliseconds between letters, execute upon completion including repeattimes, repeattime
    function worder(text, speed, callback, repeatTimes) {
        //Sets the main timeout with the speed as the settime before activation
        setTimeout(function(){
            //Adds letter
            textshown.innerText += text[0];
            //Removes letter from list
            text = text.substring(1);
            //if no text remains
            if (text == ''){
                //and the pause does exist
                if(pause != 0){
                    //Settimeout to length of pause
                    setTimeout(function(){
                        //If repeattimes exist
                        if(repeatTimes != 0){
                            //move them down one
                            repeatTimes--;
                            //Restore text
                            text = textSave;
                            //Remove shown text
                            textshown.innerText = '';
                            //Recall the function
                            worder(text, speed, callback, repeatTimes);
                        }else{
                            //If callback does not exist return
                            if(callback == ''){
                                return
                            } else {
                                //Else call the callback
                                callback()
                            }
                        }
                    }, pause)
                //if pause does not exist
                }else{
                    //And callback does not exist, return
                    if(callback == ''){
                        return
                    }else{
                        //else, trigger callback
                        callback()
                    }
                }
            //If text is left
            }else{
                //Call the function again
                worder(text, speed, callback, repeatTimes)
            }
        }, speed);
    }
    //First call
    worder(text, speed, callback, repeatTimes);
}
//Text, speed, pause, repeattimes, callback
displayer('I specifically told you not too...', 100, 1000, 0,
    function() {displayer('And yet you did?', 100, 1000, 0,
        function() {displayer('You thought you were funny... didn\'t you?', 100, 1000, 0,
            function() {displayer('Well... now it\'s gonna take longer to load... you\'re welcome...', 100, 1000, 0,
                function() {displayer('LOADING...', 100, 1000, 3, function(){window.location = '../index.html'})})})}
    )}
)