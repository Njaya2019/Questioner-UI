var commentbtns=document.getElementsByClassName("message-icon");

for(i=0; i<commentbtns.length; i++){
    commentbtns[i].addEventListener("click", function(){
    //this.classList.toggle("activ");
    var commentsContent=document.getElementsByClassName("c");
    for(k=0; k<commentsContent.length; k++){
        if(commentsContent[k].style.display==="block"){
            commentsContent[k].style.display="none"  
        }
        else{
            commentsContent[k].style.display="block" 
        }

    }


    });
}

//document.getElementsByClassName("options").addEventListener("click",openoptions);
optionsCommentMenu=document.getElementsByClassName("options");
for(o=0;o<optionsCommentMenu.length;o++){
    optionsCommentMenu[o].addEventListener("click",function(){
        var optionsContent=document.getElementsByClassName("dropdown-question-options");
        for(optionSection=0;optionSection<optionsContent.length;optionsContent++){
            if(optionsContent[optionSection].style.display==="block"){
                optionsContent[optionSection].style.display="none"  
            }
            else{
                optionsContent[optionSection].style.display="block" 
            }

        }
    });

}
