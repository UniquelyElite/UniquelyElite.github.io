let textshown = document.getElementById('text');
function displayer(text, speed, pause = 0, repeatTimes = 0, callback = ''){
    textshown.innerText = '';
    let textSave = text;
    //text to be presented, the speed in miliseconds between letters, execute upon completion including repeattimes, repeattime
    function worder(text, speed, callback, repeatTimes) {
        setTimeout(function(){
            textshown.innerText += text[0];
            text = text.substring(1);
            if (text == ''){
                if(pause != 0){
                    setTimeout(function(){
                        if(repeatTimes != 0){
                            repeatTimes--;
                            text = textSave;
                            textshown.innerText = '';
                            worder(text, speed, callback, repeatTimes);
                        }else{
                            if(callback == ''){
                                return
                            } else {
                                callback()
                            }
                        }
                    }, pause)
                }else{
                    if(callback == ''){
                        return
                    }else{
                        callback()
                    }
                }
            }else{
                worder(text, speed, callback, repeatTimes)
            }
        }, speed);
    }
    worder(text, speed, callback, repeatTimes);
}

//Text, speed, pause, repeattimes, callback -> what all that stuff below is
displayer('I specifically told you not too...', 100, 1000, 0,
    function() {displayer('And yet you did?', 100, 1000, 0,
        function() {displayer('You thought you were funny... didn\'t you?', 100, 1000, 0,
            function() {displayer('Well... now it\'s gonna take longer to load... you\'re welcome...', 100, 1000, 0,
                function() {displayer('LOADING...', 100, 1000, 3, function(){window.location = '../index.html'})})})}
    )}
)