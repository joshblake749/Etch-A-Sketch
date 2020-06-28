function sizer(){
    var theamount = 16;
var theamountfin = theamount*theamount;
    for(i = 0; i < theamountfin; i++){
        window.contains = document.querySelector('.container' );
        window.star = document.createElement('div');
        star.classList.add('square');
        contains.appendChild(star);
        
    } 
};
function runover(){
var found = document.querySelectorAll('square');
        event.target.classList.replace('square','over');
}
function done(){
    contains.innerHTML = ""
    after();
}
function after(){
    if(tt > 0){
    contains.innerHTML = ""
     document.querySelector('.container' ).style.gridTemplateColumns = 'repeat(' + tt + ', 2fr)';
     document.querySelector('.container' ).style.gridTemplateRows = 'repeat(' + tt + ', 2fr)'
 for(var i = 0; i < xt; i++){
    window.contains = document.querySelector('.container' );
        window.star = document.createElement('div');
        star.classList.add('square');
        contains.appendChild(star);
    }
}
    else{
        contains.innerHTML = ""
     document.querySelector('.container' ).style.gridTemplateColumns = 'repeat(' + 16 + ', 2fr)';
     document.querySelector('.container' ).style.gridTemplateRows = 'repeat(' + 16 + ', 2fr)'
 for(var i = 0; i < 256; i++){
    window.contains = document.querySelector('.container');
        window.star = document.createElement('div');
        star.classList.add('square');
        contains.appendChild(star);
    }
    }
}
var tt = document.getElementById('data').value;
var xt = tt*tt;
function change(){
   window.tt = document.getElementById('data').value;
window.xt = tt*tt;
if(tt > 100){
  var r = confirm('Your etch a sketch will be over 100 x 100, it is recommended that the grid is turned off by clicking ok you will be turning of the black grid if you would like the grid to stay please click cancel.')
        if(r == true){
            document.querySelector('.square').style.border = "none";
        }
        else{
            return;
        }
}
if(tt > 0){
    contains.innerHTML = ""
     document.querySelector('.container' ).style.gridTemplateColumns = 'repeat(' + tt + ', 2fr)';
     document.querySelector('.container' ).style.gridTemplateRows = 'repeat(' + tt + ', 2fr)'
 for(var i = 0; i < xt; i++){
    window.contains = document.querySelector('.container' );
        window.star = document.createElement('div');
        star.classList.add('square');
        contains.appendChild(star);
    }
}
else{
   alert('Please enter a value.')
   return;
}
}
function wrist(){
    document.getElementsByClassName('square').style.border = "none"
}
document.getElementById('togBtn').addEventListener('change', function(){
    if(document.getElementById("togBtn").checked == true){
        wrist();
    }
    else{
        console.log('error');
    }
});

