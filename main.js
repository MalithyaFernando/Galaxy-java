function setShowmoreEvent(){
    var content = document.getElementById("content");
    var showmore = document.getElementById("show-more");
    showmore.onclick = function(){
        if(content.className == "open"){
            content.className = " ";
            showmore.innerHTML = "Show more";
        }else{
            content.className = "open";
            showmore.innerHTML = "Show less";
        }
    }
}

setShowmoreEvent();