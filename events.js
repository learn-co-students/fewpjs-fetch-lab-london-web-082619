
// document.addEventListener("click", myClick); //pattern1 eventlistner and fucntion are declared separately

// function myClick(){
//     document.querySelector("#click").innerHTML = "You clicked me";
// };


document.addEventListener("click", function(){
    document.querySelector("#click").innerHTML = "You clicked me";
});

// document.addEventListener("ondblclick", function(){
//     alert('I was clicked!');
// });