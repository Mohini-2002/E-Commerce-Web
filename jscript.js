console.log("Script running")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", () => {
document.querySelector('.Sidebar').classList.toggle('sidebarGO');
if(document.querySelector('.Sidebar').classList.contains('sidebarGO')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{
    document.querySelector('.cross').style.display='inline'
},350);
}
})