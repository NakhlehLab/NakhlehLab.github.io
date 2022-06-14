function SwitchElement(tabNum){
        var i;
        for(i=0; i<=6; i++){
                document.getElementById(i.toString()).style.display = "none";
        }
        
        document.getElementById(tabNum.toString()).style.display = "block";
        
}

function PhyloNet(){ //navigates to PhyloNet download page

}