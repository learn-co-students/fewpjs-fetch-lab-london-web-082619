
// document.addEventListener("click", myClick); //this works the same as //1.  

// function myClick(){
//     document.querySelector("#click").innerHTML = "You clicked me";
// };

//1
document.addEventListener("click", function(){
    document.querySelector("#click").innerHTML = "You clicked me";
});

//2
// document.addEventListener("ondblclick", function(){
//     alert('I was clicked!');
// });