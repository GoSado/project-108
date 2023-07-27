https://teachablemachine.withgoogle.com/models/2IZmFz7Cs/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2IZmFz7Cs/model.json",modelready);
}
function modelready(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
    
        document.getElementById("label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("confidence").innerHTML="Acurracy-"+(results[0].confidence).toFixed(2);
    
        document.getElementById("label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color="rgb("+r+","+g+","+b+")";
    
        img1=document.getElementById("dog");
        img2=document.getElementById("cat");
        
     if(results[0].label=="bark"){
        img1.src="https://www.bing.com/images/search?view=detailV2&ccid=NRtkvqeQ&id=CC077CC883019E77DA461E64408EA4EE8D7CBE16&thid=OIP.NRtkvqeQK20z1_Bi4L5-oAHaHa&mediaurl=https%3a%2f%2fclipground.com%2fimages%2fdog-barking-clipart-14.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.351b64bea7902b6d33d7f062e0be7ea0%3frik%3dFr58je6kjkBkHg%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=cartoon+dog+barkiog&simid=608031554181737209&FORM=IRPRST&ck=A59796C2ADAF1BA63DE236C4BD36A5CF&selectedIndex=62";
        img2.src="https://th.bing.com/th/id/OIP.Ti0zaOrN9DOu-F3qEXSxBAHaLx?w=119&h=190&c=7&r=0&o=5&pid=1.7";
     }
     else if(results[0].label=="meowing"){
        img1.src="https://th.bing.com/th/id/OIP.SjAg2Xk-aAOCoZDjQ6pXxwHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7";
        img2.src="https://th.bing.com/th/id/OIP.ZSbaLUq-_8mr7ucysMHECAHaF-?w=258&h=208&c=7&r=0&o=5&pid=1.7";
     }
     
    }
    }
