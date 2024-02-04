(()=>{
let inetrval = setInterval(
    async()=>{
const activeElement = document?.activeElement;
if(!!activeElement &&['textarea','password','email','search','text'].includes(activeElement.type) && activeElement.value == ""){
    const text = await navigator.clipboard.readText();
    if(!!text&&text != ""){
        const showcopycontent = document.createElement('p');
        showcopycontent.innerText = text;
        showcopycontent.onclick = ()=>{
            activeElement.value = text;
            showcopycontent.remove();
        }
        showcopycontent.setAttribute('style','position:absolute;font-size:20px;border:1px solid gray;width:auto;max-height:50px')
        activeElement.parentElement.appendChild(showcopycontent);
        setTimeout(()=>{
            activeElement.parentElement.removeChild(showcopycontent);
        },4000);
    }
}
},2000)
})()