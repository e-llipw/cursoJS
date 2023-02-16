function maskdate(){
    var nChar=document.getElementById("txtData").value.length;
    
    if (nChar==2){
        document.getElementById("txtData").value=document.getElementById("txtData").value+"/";
    }
    if (nChar==5){
        document.getElementById("txtData").value=document.getElementById("txtData").value+"/";
    }
}

function maskCep(){
    var nChar=document.getElementById("txtCep").value.length;
    
    if (nChar==5){
        document.getElementById("txtCep").value=document.getElementById("txtCep").value+"-";
    }
}

function maskCel(){
    var nChar=document.getElementById("txtCel").value.length;
    
    if (nChar==0){
        document.getElementById("txtCel").value=document.getElementById("txtCel").value+"(";
    }
    if (nChar==3){
        document.getElementById("txtCel").value=document.getElementById("txtCel").value+")";
    }
    if (nChar==9){
        document.getElementById("txtCel").value=document.getElementById("txtCel").value+"-";
    }
}