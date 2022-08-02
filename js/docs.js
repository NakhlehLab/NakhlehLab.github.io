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


function activeLink(num){
        console.log("GRRRRR");
        for(i=1; i<=8; i++){
                if(i - num == 0){
                        var link = document.getElementById("link" + i.toString());
                        link.classList.add('link-clicked');  
                        console.log("GRRRRR2");
                }else{
                        var link = document.getElementById("link" + i.toString());
                        link.classList.remove('link-clicked'); 
                        console.log("GRRRRR3");
                }
        }
        
}