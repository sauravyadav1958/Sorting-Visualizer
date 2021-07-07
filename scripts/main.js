

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value; // input for array size
var inp_gen=document.getElementById("a_generate"); // generate new array
var inp_aspeed=document.getElementById("a_speed"); // speed input
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button"); // selecting all the algo buttons

var div_sizes=[];
var divs=[];
var margin_size;  
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
//cont.style="margin-top:80px";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 40) + 25;
        divs[i]=document.createElement("div");// box
        cont.appendChild(divs[i]);
        margin_size=0.1; // may be used later
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) +
         "%;  margin-top:" + (60 - div_sizes[i]/1.6) + "%; height:auto"; // here margin-top is less for more height
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)//this = butts_algos[i] (for understanding.)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
