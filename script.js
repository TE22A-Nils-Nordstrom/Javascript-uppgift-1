console.log(2*3)

function calculate(type){

    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    switch(type){
        case 1:
            document.getElementById("svar").value = parseInt(a)+parseInt(b);
            break;
        case 2:
            document.getElementById("svar").value = parseInt(a)-parseInt(b);
            break;
        case 3:
            document.getElementById("svar").value = parseInt(a)*parseInt(b);
            break;
        case 4:
            document.getElementById("svar").value = parseInt(a)/parseInt(b);
            break;
                         
    }
}