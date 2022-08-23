var food = [

{
    category:"hamburger",
    imgSrc:"./food/Cheeseburger.jpg"
    price : "9 dt"
},{
    category: "hamburger",
    imgSrc:"./food/Chicken-Burger.png"
    price : "9.5 dt"
},{
    category:"hamburger",
    imgSrc:"./food/doublecheese.jpg"
    price : "11 dt"
},{
    category:"pizza",
    imgSrc:"./food/margharitta.jpg"
    price : "9 dt"
},{
    category:"pizza",
    imgSrc:"./food/mexican.jpg"
    price : "14 dt"
},{
    category:"pizza",
    imgSrc:"./food/pizza.jpg"
    price : "10 dt"
},{
    category:"pizza",
    imgSrc:"./food/fruit de mer.jpg"
    price : "17 dt"
},{
    category:"pasta",
    imgSrc:"./food/pasta carbonara.jpg"
    price : "16 dt"
},{
    category:"pasta",
    imgSrc:"./food/pasta fruit de mer.jpg"
    price : "23 dt"
},{
    category:"pasta",
    imgSrc:"./food/sauce blanche.jpg"
    price : "20 dt"
},{
    category:"sandwiches",
    imgSrc:"./food/chickensandwich.jpg"
    price : "10 dt"
},{
    category:"sandwiches",
    imgSrc:"./food/jambon.jpg"
    price : "8.5 dt"
},
{
    category:"sandwiches",
    imgSrc:"./food/tuna.jpg"
    price : "8 dt"
}, {
    category:"supplements",
    imgSrc:"./food/cheese.jpg"
    price : "3 dt"
}, {
    category:"supplements",
    imgSrc:"./food/french.jpg"
    price : "4 dt"
},{
  category:"supplements",
    imgSrc:"./food/supjambon.jpg" 
    price : "3 dt"

}, {category:"supplements",
    imgSrc:"./food/mushrooms.jpg"
    price : "2.5 dt"
}



];
var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
 function renderImages(array){
    each(array, function(e,i){
        var div=$(`<div class='item ${e.category}'><img src="${e.imgSrc}"><button> "click me" <button></div>`)

          div.appendTo($('#littleSpan') )
          })
 } 
function renderPizza(array){
    return filter(array,function(e,i){
        return e.category=== "pizza"
    })
}

var renderHamburger = function (arr){
    return filter(arr, function(e,i){
        return e.category=== "hamburger"
    })
}
function renderSandiwches(array){
    return filter(array,function(e,i){
        return e.category=== "sandwiches"
    })
}
function renderPasta(array){
    return filter(array,function(e,i){
        return e.category=== "pasta"
    })
}
function renderSupplements(array){
    return filter(array,function(e,i){
        return e.category=== "supplements"
    })
}
$("#pizza").on("click", function(){
    $(".item").remove()
    renderImages(renderPizza(food))
    
    }) 
$("#hamburger").on("click", function(){
    $(".item").remove()
    renderImages(renderHamburger(food))
    
    })  
$("#sandwiches").on("click", function(){
    $(".item").remove()
    renderImages(renderSandiwches(food))
    
    })  
$("#pasta").on("click", function(){
    $(".item").remove()
    renderImages(renderPasta(food))
    
    })  
$("#supplements").on("click", function(){
    $(".item").remove()
    renderImages(renderSupplements(food))
    
    })  



 





