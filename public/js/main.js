const addSetsButton = document.querySelectorAll('.addSets');

Array.from(addSetsButton).forEach((element)=>{
element.addEventListener('click', addSet)
});



async function addSet(){
    const exerciseText = this.parentNode.childNodes[1].innerText
    console.log(`Exercise is ${exerciseText}`);
    try{
        const response = await fetch('addSet', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemfromJS': exerciseText
            })
        })
    const data = await response.
    json()
    console.log(`Data is ${data}`)
    location.reload()
    }catch(err){
        console.log(err)
    }
}