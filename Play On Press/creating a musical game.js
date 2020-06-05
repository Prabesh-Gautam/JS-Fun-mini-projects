var button1 = document.getElementById('a');
var button2 = document.getElementById('s');
var button3 = document.getElementById('d');
var button4 = document.getElementById('f');
var button5 = document.getElementById('g');
var button6 = document.getElementById('h');
var button7 = document.getElementById('j');
var button8 = document.getElementById('k');
var button9 = document.getElementById('l');
var audioPlayer = document.getElementById('player');

document.onkeydown= function(key){
    var pressedkey = key.keyCode;
    if(pressedkey === 65){
        console.log("you pressed a");
        button1.style.transform = "scale(.95)"
        button1.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button1)
        
    }
    else if(pressedkey === 83){
        console.log("you pressed s");
        button2.style.transform = "scale(.95)"
        button2.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button2)

    }
    else if(pressedkey === 68){
        console.log("you pressed d");
        button3.style.transform = "scale(.95)"
        button3.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button3)
    }
    else if(pressedkey == 70){
        console.log("you pressed f");
        button4.style.transform = "scale(.95)"
        button4.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button4)

    }
    else if(pressedkey == 71){
        console.log("you pressed g");
        button5.style.transform = "scale(.95)"
        button5.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button5)
        
    }
    else if(pressedkey == 72){
        console.log("you pressed h");
        button6.style.transform = "scale(.95)"
        button6.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button6)
    }
    else if(pressedkey == 74){
        console.log("you pressed j");
        button7.style.transform = "scale(.95)"
        button7.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button7)
    }
    else if(pressedkey == 75){
        console.log("you pressed k");
        button8.style.transform = "scale(.95)"
        button8.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button8)
    }
    else if(pressedkey == 76){
        console.log("you pressed l");
        button9.style.transform = "scale(.95)"
        button9.style.boxShadow = "0px -4px 8px lightblue"
        playSong(button9);
    }
    else{
        alert('Press the right key')
    }
}


document.onkeyup= function(key){
    var pressedkey = key.keyCode;
    if(pressedkey === 65){
        console.log("you pressed a");
        button1.style.transform = "scale(1)"
        button1.style.boxShadow = "0px -4px 8px lightgreen"
    }
    else if(pressedkey === 83){
        console.log("you pressed s");
        button2.style.transform = "scale(1)"
        button2.style.boxShadow = "0px -4px 8px lightgreen"

    }
    else if(pressedkey === 68){
        console.log("you pressed d");
        button3.style.transform = "scale(1)"
        button3.style.boxShadow = "0px -4px 8px lightgreen"
    }
    else if(pressedkey == 70){
        console.log("you pressed f");
        button4.style.transform = "scale(1)"
        button4.style.boxShadow = "0px -4px 8px lightgreen"

    }
    else if(pressedkey == 71){
        console.log("you pressed g");
        button5.style.transform = "scale(1)"
        button5.style.boxShadow = "0px -4px 8px lightgreen"
        
    }
    else if(pressedkey == 72){
        console.log("you pressed h");
        button6.style.transform = "scale(1)"
        button6.style.boxShadow = "0px -4px 8px lightgreen"
    }
    else if(pressedkey == 74){
        console.log("you pressed j");
        button7.style.transform = "scale(1)"
        button7.style.boxShadow = "0px -4px 8px lightgreen"
    }
    else if(pressedkey == 75){
        console.log("you pressed k");
        button8.style.transform = "scale(1)"
        button8.style.boxShadow = "0px -4px 8px lightgreen"
    }
    else if(pressedkey == 76){
        console.log("you pressed l");
        button9.style.transform = "scale(1)"
        button9.style.boxShadow = "0px -4px 8px lightgreen"
        
        
    }
    else{
        alert('Press the right key')
    }
}


// **********************************setting up the audio play things.******************


function playSong(ev){
    var values = ev.getAttribute('value');//getting the attribute value
    console.log(values);

    let src = "./audio/"+ values + ".m4a" //managing dynamic src value
    console.log(src);

    audioPlayer.src = src;
    audioPlayer.play();
}

function stopSong(ev){
    audioPlayer.pause();

}

