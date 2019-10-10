
// document.addEventListener("click", myClick); //this works the same as //1.  

// function myClick(){
//     document.querySelector("#click").innerHTML = "You clicked me";
// };

//1
document.querySelector("#click").addEventListener("click", function(){
    document.querySelector("#click").innerHTML = "You clicked me";
});

//2
document.querySelector("#dblclick").addEventListener("dblclick", function(){
    alert('I was clicked!');
});

function find(array, criteriaFn) {
   
    let current = array
    let next = []

    while (current || current === 0) {
     if (criteriaFn(current)) {
        return current
      }
   
     if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i])
        }
      }
      current = next.shift()
    }
    return null
  }