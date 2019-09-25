const checkboxes = document.querySelectorAll(`.inbox input[type='checkbox']`);
let lastchecked;
function handleventchange(e){
    //check if they had the shift key down
    //And check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //go ahead and do what
        //loop over every single checkbox
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);
            if(checkbox === this || checkbox === lastchecked){
                inBetween=!inBetween;
                console.log("start")
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
lastchecked=this;
}
checkboxes.forEach(checkbox=>checkbox.addEventListener("click", handleventchange));