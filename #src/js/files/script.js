// document.querySelector('.burger').addEventListener('click', function() {
// 	this.classList.toggle('_active');
// })
var b = 0;
var num = 0;
var ahh = 0
var counterspan = document.querySelector(".counterspan")
function countshow(e){
    e.parentElement.classList.add("product_home_cont_grid_item_bottom_active");
}
function countminus(e, event){
    b=e.nextElementSibling.textContent
    num = Number(b)
    num-=1;
    if(num>0){
        e.nextElementSibling.textContent=num
    }if(num<1){
        e.nextElementSibling.textContent=0;
        e.parentElement.parentElement.classList.remove("product_home_cont_grid_item_bottom_active")
        return e.nextElementSibling.textContent=1;
    }
}
function countpluse(e){
    b=e.previousElementSibling.textContent
    num = Number(b)
    num+=1
    e.previousElementSibling.textContent=num
}
var likeds = [];
function like(e){
    console.log(likeds)
    for(var i = 0; i <=likeds.length; i++ ){
        if(likeds[i]==e.parentElement){
            likeds[i].classList.remove('product_home_cont_grid_item_active')
            console.log('1')
        }
        else{
            likeds = document.getElementsByClassName("product_home_cont_grid_item_active")
            e.parentElement.classList.add('product_home_cont_grid_item_active')
            console.log('2')
        }
    }
}