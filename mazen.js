var food = [

{
    category:"hamburger",
    imgSrc:"./food/Cheeseburger.jpg",
    price : 9 
},{
    category: "hamburger",
    imgSrc:"./food/Chicken-Burger.png",
    price : 9.5 
},{
    category:"hamburger",
    imgSrc:"./food/doublecheese.jpg",
    price : 11 
},{
    category:"pizza",
    imgSrc:"./food/margharitta.jpg",
    price : 9 
},{
    category:"pizza",
    imgSrc:"./food/mexican.jpg",
    price : 14 
},{
    category:"pizza",
    imgSrc:"./food/pizza.jpg",
    price : 10 
},{
    category:"pizza",
    imgSrc:"./food/fruit de mer.jpg",
    price : 17 
},{
    category:"pasta",
    imgSrc:"./food/pasta carbonara.jpg",
    price : 16 
},{
    category:"pasta",
    imgSrc:"./food/pasta fruit de mer.jpg",
    price : 23 
},{
    category:"pasta",
    imgSrc:"./food/sauce blanche.jpg",
    price : 20 
},{
    category:"sandwiches",
    imgSrc:"./food/chickensandwich.jpg",
    price : 10 
},{
    category:"sandwiches",
    imgSrc:"./food/jambon.jpg",
    price : 8.5 
},
{
    category:"sandwiches",
    imgSrc:"./food/tuna.jpg",
    price : 8 
}, {
    category:"supplements",
    imgSrc:"./food/cheese.jpg",
    price : 3 
}, {
    category:"supplements",
    imgSrc:"./food/french.jpg",
    price : 4 
},{
  category:"supplements",
    imgSrc:"./food/supjambon.jpg", 
    price : 3 

}, {category:"supplements",
    imgSrc:"./food/mushrooms.jpg",
    price : 2.5 
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
        var btn = $(`<button class = "price" > ${e.price} dt </button>`)
        btn.click(function(l){
            var p = $(`<p>${e.price}</p>`)
           $("#secondSpan").append(p)
        })
        var div=$(`<div  class='item ${e.category}'><img src="${e.imgSrc}"> </div>`)
div.append(btn)
   
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

$("#secondSpan").append($("<h1 id = 'bill'> Bill </h1>"))



// $(".price", this).click(function(){
//   var P =  $("<p></p> ")
  
//   P.text(this)
  
//   P.appendTo($("#secondSpan"))  

// })

// function add (){
//     var item = $("")
// }

// $('.price').click(function(){
//     for(var i =0;i<$('.price').length;i++){
//         if($(".price")[i].data("clicked",true)){

//         }
//     }
// })