function calc(x){
        var text = document.getElementById('text');
        text.value += x;
}

function calc_result(){
        var x = document.getElementById('text');
        console.log(Number(x.value))
}