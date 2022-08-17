var currentSlide = 1;



//DEFUNCT
// function SwitchElement(tabNum){
//         var i;
//         for(i=0; i<=7; i++){
//                 document.getElementById(i.toString()).style.display = "none";
//         }
        
//         document.getElementById(tabNum.toString()).style.display = "block";
        
// }


/**
 * Reroutes to /html/phylonet.html
 * 
 * @return nothing.      
 */
function PhyloNet(){ 
        //navigates to PhyloNet download page
        window.location.replace("/html/phylonet.html");
}

/**
 * Opens a tab within a software page.
 * 
 * @param {Event} evt an Event
 * @param {String} tabName the id of the tab to open
 * @return nothing       
 */
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


//DEFUNCT AFTER SWITCH TO USING GOOGLE SCHOLAR
// /**
//  * Reroutes to a certain page, either google scholar or the tutorials page
//  * 
//  * @param {String} page the link to the page to navigate to
//  * @return nothing.      
//  */
// function SwitchPage(slideNum){

//         var link = document.getElementById(currentSlide.toString());
//         link.className = " ";
//         var tableOld = document.getElementById("slide" + currentSlide.toString());
//         tableOld.style.display = "none";
//         currentSlide=slideNum;
//         var newLink = document.getElementById(currentSlide.toString());
//         newLink.className = "active";
//         var tableOld = document.getElementById("slide" + currentSlide.toString());
//         tableOld.style.display = "block";


// }

// /**
//  * Reroutes to a certain page, either google scholar or the tutorials page
//  * 
//  * @param {String} page the link to the page to navigate to
//  * @return nothing.      
//  */
// function NextPage(){
        
//         if(currentSlide!=6){
//                 var link = document.getElementById(currentSlide.toString());
//                 link.className = " ";
//                 currentSlide+=1;
//                 var newLink = document.getElementById(currentSlide.toString());
//                 newLink.className = "active";
//         }

// }

// /**
//  * Reroutes to a certain page, either google scholar or the tutorials page
//  * 
//  * @param {String} page the link to the page to navigate to
//  * @return nothing.      
//  */
// function PrevPage(){

//         if(currentSlide!=1){
//                 var link = document.getElementById(currentSlide.toString());
//                 link.className = " ";
//                 currentSlide-=1;
//                 var newLink = document.getElementById(currentSlide.toString());
//                 newLink.className = "active";
//         }

// }


//DEFUNCT WITH USE OF THE SIMPLE LINK TO GOOGLE SCHOLAR
// /**
//  * Reroutes to a certain page, either google scholar or the tutorials page
//  * 
//  * @param {String} page the link to the page to navigate to
//  * @return nothing.      
//  */
// function openModal(pdfHref, bibtexFilename) {
//         // alert();
//         console.log("OPENING MODAL");
//         var modal = document.getElementById("myModal");
//         var pdfName = document.getElementById("pdfLink");
//         if(pdfHref.length == 0){
//                 pdfName.href = "#"
//         }else{
//                 pdfName.href = pdfHref;
//         }

//         var bibtexLink = document.getElementById("bib");
//         bibtexLink.href = bibtexFilename;
//         modal.style.display = "block";
// }

// /**
//  * Reroutes to a certain page, either google scholar or the tutorials page
//  * 
//  * @param {String} page the link to the page to navigate to
//  * @return nothing.      
//  */
// function closeModal() {
//         console.log("CLOSING MODAL");
//         var modal = document.getElementById("myModal");
//         modal.style.display = "none";
// }


/**
 * Reroutes to a certain page, either google scholar or the tutorials page
 * 
 * @param {String} page the link to the page to navigate to
 * @return nothing.      
 */
function nav(page){
        if(page=='pubs'){
                window.open("https://scholar.google.com/citations?hl=en&user=46HLWf8AAAAJ&view_op=list_works&sortby=pubdate", "_blank");
        }else if (page == 'tutorials'){
                window.location.replace("/html/tutorials.html");
        }
}


/**
 * Open the sidenav in /html/phylogenpyDocs.html
 * 
 * @return nothing.      
 */
function openNav() {
        //show sidebar and shift the main content to the right
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "250px";
}
      
/**
 * Close the sidenav in /html/phylogenpyDocs.html
 * 
 * @return nothing.      
 */
function closeNav() {
        //hide the sidenav
        document.getElementById("mySidebar").style.width = "0";
        //shift the main content back to normal
        document.getElementById("main").style.marginLeft = "0";
} 


/**
 * Handles the dynamic resizing of the people images in /html/people.html
 * 
 * @return nothing.      
 */
function sizeIt(){

        //get the available window width
        var width = window.innerWidth;
        
        //arbitrary heuristic of how much space an image should take of the screen
        widthNum = width/3;

        //don't let the dimensions get too big or too small
        if(widthNum > 400){
                widthNum = 400;
        }else if(widthNum < 250){
                widthNum = 250;
        }
        widthStr = widthNum.toString() + "px";

        //grab all elements that contain images
        var tables = document.getElementsByClassName("peopleElement");
        var tables2 = document.getElementsByClassName("containerMark");

        //resize all the images (done by height since the aspect ratio is locked)
        for(i=0; i<tables.length; i++){
                tables[i].style.height = widthStr;
        }
        for(i=0; i<tables2.length; i++){
                tables2[i].style.height = widthStr;
        }
}


/**
 * Handles the pagination at the bottom of /html/people.html
 * 
 * @param  {String} slideId the id of the page to switch away from
 * @return nothing.      
 */
function SwitchPeople(slideID){
        
        if(slideID == "currentPeople"){
                //hide currentPeople page
                var peoplePage = document.getElementById("currentPeople");
                peoplePage.style.display = "none";
                peoplePage.className = " ";
                
                //display past people page
                var newPage = document.getElementById("pastPeople");
                newPage.style.display = "block";
                newPage.className = "active";

                //reset pagination links to reflect current page
                var curLink = document.getElementById("past");
                curLink.className = "active";
                var oldLink = document.getElementById("cur");
                oldLink.className = " ";

        }else if(slideID == "pastPeople"){
                
                //hide past people
                var peoplePage = document.getElementById("pastPeople");
                peoplePage.style.display = "none";
                peoplePage.className = " ";
                
                //show current people
                var newPage = document.getElementById("currentPeople");
                newPage.style.display = "block";
                newPage.className = "active";

                //reset links
                var curLink = document.getElementById("cur");
                curLink.className = "active";
                var oldLink = document.getElementById("past");
                oldLink.className = " ";
        }
}


/**
 * Handles the forward button at the bottom of the page of /html/people.html
 * 
 * If the page is currently on the current team members, should go to the past team
 * page. Otherwise, this should have no effect.
 * 
 * @return nothing.   
 * @return nothing.      
 */
function NextPeople(){
        
        var cur = document.getElementById("currentPeople");
        
        //if page currently displayed is the current people page
        if(cur.style.display == "block"){
                //switch away from current people
                SwitchPeople("currentPeople");
        }
}

/**
 * Handles the back button at the bottom of the page of /html/people.html
 * 
 * If the page is currently on the past team members, should go to the current team
 * page. Otherwise, this should have no effect.
 * 
 * @return nothing.      
 */
function PrevPeople(){
        var cur = document.getElementById("pastPeople");
        
        //if page currently displayed is the past people page
        if(cur.style.display == "block"){
                //switch away from past people
                SwitchPeople("pastPeople");
        }

}