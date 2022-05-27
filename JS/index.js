const myOutput = document.querySelector(".myOutput")

const myInput = document.querySelector("#myInput")

const addBtn = document.querySelector(".addBtn")

// function addInput() {
//     const content = myInput.value;
//     if (content === ""){
//         alert("Please Type your name!!!")
//     }
//     else{
//         myOutput.innerHTML = content;
//         myInput.value = "";
//     }
// };

 function addInput() {
    const content = myInput.value;
    if (content == ""){
        alert("Please Type your name!!!")
  } 
  else {
      myOutput.innerHTML += `
            <div class="button">
                <span>
                    ${myInput.value}
                </span>
                <button class="deleteBtn">
                    Delete
                </button>
            </div>
        `;
        myInput.value = "";

    var new_names = document.querySelectorAll(".deleteBtn");
    for (var i = 0; i < new_names.length; i++) {
      new_names[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
