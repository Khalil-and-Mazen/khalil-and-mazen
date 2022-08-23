var food = [

{
    category:"hamburger",
    imgSrc:"./food/Cheeseburger.jpg"
},{
    category: "hamburger",
    imgSrc:"./food/Chicken-Burger.png"
},{
    category:"hamburger",
    imgSrc:"./food/doublecheese.jpg"
},{
    category:"pizza",
    imgSrc:"./food/margharitta.jpg"
},{
    category:"pizza",
    imgSrc:"./food/mexican.jpg"
},{
    category:"pizza",
    imgSrc:"./food/pizza.jpg"
},{
    category:"pizza",
    imgSrc:"./food/fruit de mer.jpg"
},{
    category:"pasta",
    imgSrc:"./food/pasta carbonara.jpg"
},{
    category:"pasta",
    imgSrc:"./food/pasta fruit de mer.jpg"
},{
    category:"pasta",
    imgSrc:"./food/sauce blanche.jpg"
},{
    category:"sandwiches",
    imgSrc:"./food/chickensandwich.jpg"
},{
    category:"sandwiches",
    imgSrc:"./food/jambon.jpg"
},
{
    category:"sandwiches",
    imgSrc:"./food/tuna.jpg"
}, {
    category:"supplements",
    imgSrc:"./food/cheese.jpg"
}, {
    category:"supplements",
    imgSrc:"./food/french.jpg"
},{
  category:"supplements",
    imgSrc:"./food/supjambon.jpg" 

}, {category:"supplements",
    imgSrc:"./food/mushrooms.jpg"
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
        var div=$(`<div class='item ${e.category}'><img src="${e.imgSrc}"></div>`)
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
