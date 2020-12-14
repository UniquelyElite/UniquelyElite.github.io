
//If they fail to click the coin they are sent to the actual homepage
function heresTheActualPage(){
    window.location = "data/index.html"
}

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

displayer('WELCOME', 100, 1000, 0, heresTheActualPage)