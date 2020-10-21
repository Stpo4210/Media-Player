var gay = {
        name : "gay",
        link : "https://www.youtube.com/embed/fBeq8eZIxGs"
    };
var bruh = {
        name : "bruh",
        link : "https://www.youtube.com/embed/2ZIpFytCSVc"
    };
var gotem = {
        name : "gotem",
        link : "https://www.youtube.com/embed/Nz5n3ErEJis"
    };
var yooo = {
        name : "yooo",
        link : "https://www.youtube.com/embed/VKMw2it8dQY"
    };
var oof = {
        name : "oof",
        link : "https://www.youtube.com/embed/HoBa2SyvtpE"
    };
var dream = {
        name: "dream",
        link : "https://www.youtube.com/embed/EjYgM9KJyUc"
    };

var memeSrc = [gay, bruh, gotem, yooo, oof, dream];

function nextVideo() {
    if (document.getElementById("videoPlayer").src != "https://www.youtube.com/embed/EjYgM9KJyUc") {
        var check = false;
        var count = 0;
        document.getElementById("previousVideo").hidden = false;
        while(check == false){
            if(memeSrc[count].link == document.getElementById("videoPlayer").src){
                check = true;
                count++;
                document.getElementById("videoPlayer").src = memeSrc[count].link;
            }
            else{
                count++;
            }
        }
    }
    else{
        document.getElementById("nextVideo").hidden = true;
    }  

};

function previousVideo(){
    if (document.getElementById("videoPlayer").src != "https://www.youtube.com/embed/fBeq8eZIxGs") {
        var check = false;
        var count = memeSrc.length-1;
        document.getElementById("nextVideo").hidden = false;
        
        
        while(check == false){
            if(memeSrc[count].link == document.getElementById("videoPlayer").src){
                check = true;
                count--;
                document.getElementById("videoPlayer").src = memeSrc[count].link;
            }
            else{
                count--;
            }
        }
    }
    else{
        document.getElementById("previousVideo").hidden = true;
    }      
};

function whyGay(){
    document.getElementById("videoPlayer").src = gay.link;
}

function bruhh(){
    document.getElementById("videoPlayer").src = bruh.link;
}

function yoooo(){
    document.getElementById("videoPlayer").src = yooo.link;
}

function gotemm(){
    document.getElementById("videoPlayer").src = gotem.link;
}

function ooff(){
    document.getElementById("videoPlayer").src = oof.link;
}

function dreamm(){
    document.getElementById("videoPlayer").src = dream.link;
}