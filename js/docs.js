/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("hammy").style.display = "none";
}
      
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("hammy").style.display = "block";
} 


/**
 * Handles the sidenav active link styling
 * 
 * @param {Number} num the id of the sidenav link
 * @return nothing.      
 */
function activeLink(num){
        
        for(i=3; i<=3; i++){
                if(i - num == 0){
                        var link = document.getElementById("link" + i.toString());
                        link.classList.add('link-clicked');  
                }else{
                        var link = document.getElementById("link" + i.toString());
                        if(link != null){
                                link.classList.remove('link-clicked'); 
                        }
                }
        }

        /* deactivate all modules for the display */
        
}


function openDoc(id){
        var doc1 = document.getElementById('net')
        var doc2 = document.getElementById('io')
        var doc3 = document.getElementById('md')
        var doc4 = document.getElementById('includes')
        var doc5= document.getElementById('extras')

        doc1.style.display = 'none'
        doc2.style.display = 'none'
        doc3.style.display = 'none'
        doc4.style.display = 'none'
        doc5.style.display = 'none'
        
        var doc = document.getElementById(id);
        doc.style.display = "block"
}
