var currentSlide = 1;

function SwitchElement(tabNum){
        var i;
        for(i=0; i<=7; i++){
                document.getElementById(i.toString()).style.display = "none";
        }
        
        document.getElementById(tabNum.toString()).style.display = "block";
        
}

function PhyloNet(){ //navigates to PhyloNet download page
        window.location.replace("/html/phylonet.html");
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
        link.className = " ";
        var tableOld = document.getElementById("slide" + currentSlide.toString());
        tableOld.style.display = "none";
        currentSlide=slideNum;
        var newLink = document.getElementById(currentSlide.toString());
        newLink.className = "active";
        var tableOld = document.getElementById("slide" + currentSlide.toString());
        tableOld.style.display = "block";


}

function NextPage(){
        
        if(currentSlide!=6){
                var link = document.getElementById(currentSlide.toString());
                link.className = " ";
                currentSlide+=1;
                var newLink = document.getElementById(currentSlide.toString());
                newLink.className = "active";
        }

}

function PrevPage(){

        if(currentSlide!=1){
                var link = document.getElementById(currentSlide.toString());
                link.className = " ";
                currentSlide-=1;
                var newLink = document.getElementById(currentSlide.toString());
                newLink.className = "active";
        }

}


// When the user clicks the button, open the modal 
function openModal(pdfHref, bibtexFilename) {
        // alert();
        console.log("OPENING MODAL");
        var modal = document.getElementById("myModal");
        var pdfName = document.getElementById("pdfLink");
        if(pdfHref.length == 0){
                pdfName.href = "#"
        }else{
                pdfName.href = pdfHref;
        }

        var bibtexLink = document.getElementById("bib");
        bibtexLink.href = bibtexFilename;
        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
        console.log("CLOSING MODAL");
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
}


function nav(page){
        if(page=='pubs'){
                window.location.replace("/html/pubs.html");
        }else if (page == 'tutorials'){
                window.location.replace("/html/tutorials.html");
        }
}


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "250px";
}
      
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
} 


