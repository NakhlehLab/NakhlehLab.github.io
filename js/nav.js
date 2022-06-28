function SwitchElement(tabNum){
        var i;
        for(i=0; i<=7; i++){
                document.getElementById(i.toString()).style.display = "none";
        }
        
        document.getElementById(tabNum.toString()).style.display = "block";
        
}

function PhyloNet(){ //navigates to PhyloNet download page
        window.location.replace("/html/phylonet.html")
}

function openTab(evt, tabName) {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
} 

function SwitchPage(slideNum){

        var link = document.getElementById(currentSlide.toString());
        link.className = " "
        currentSlide=slideNum;
        var newLink = document.getElementById(currentSlide.toString());
        newLink.className = "active"
}

function NextPage(){
        
        if(currentSlide!=6){
                var link = document.getElementById(currentSlide.toString());
                link.className = " "
                currentSlide+=1;
                var newLink = document.getElementById(currentSlide.toString());
                newLink.className = "active"
        }

}

function PrevPage(){

        if(currentSlide!=1){
                var link = document.getElementById(currentSlide.toString());
                link.className = " "
                currentSlide-=1;
                var newLink = document.getElementById(currentSlide.toString());
                newLink.className = "active"
        }

}

