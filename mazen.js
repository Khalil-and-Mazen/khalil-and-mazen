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
renderImages(food)
