var food = [

{
    category:"hamburger",
    imgSrc:"./food/Cheeseburger.jpg",
    price : 9, 
    id: "cheese Burger"
},{
    category: "hamburger",
    imgSrc:"./food/Chicken-Burger.png",
    price : 9.5, 
    id : "Chicke Burger"
},{
    category:"hamburger",
    imgSrc:"./food/doublecheese.jpg",
    price : 11, 
    id : "Double cheese Burger"
},{
    category:"pizza",
    imgSrc:"./food/margharitta.jpg",
    price : 9,
    id : "Pizza Margharitta " 
},{
    category:"pizza",
    imgSrc:"./food/mexican.jpg",
    price : 14,
    id: "Pizza Mexican" 
},{
    category:"pizza",
    imgSrc:"./food/pizza.jpg",
    price : 10, 
    id :  "Pizza Neptune"
},{
    category:"pizza",
    imgSrc:"./food/fruit de mer.jpg",
    price : 17,
    id : "Pizza Sea Food"

},{
    category:"pasta",
    imgSrc:"./food/pasta carbonara.jpg",
    price : 16,
    id : "Pasta Carbonara" 
},{
    category:"pasta",
    imgSrc:"./food/pasta fruit de mer.jpg",
    price : 23,
    id : "Pasta Sea Food" 
},{
    category:"pasta",
    imgSrc:"./food/sauce blanche.jpg",
    price : 20,
    id : "Pasta with white Sauce" 
},{
    category:"sandwiches",
    imgSrc:"./food/chickensandwich.jpg",
    price : 10,
    id : "Chicken Sandwich" 
},{
    category:"sandwiches",
    imgSrc:"./food/jambon.jpg",
    price : 8.5,
    id : "Jambon Sandwich"  
},
{
    category:"sandwiches",
    imgSrc:"./food/tuna.jpg",
    price : 8,
    id : "Tuna Sandiwich" 
}, {
    category:"supplements",
    imgSrc:"./food/cheese.jpg",
    price : 3,
    id : "Cheese" 
}, {
    category:"supplements",
    imgSrc:"./food/french.jpg",
    price : 4,
    id : "French Fries" 
},{
  category:"supplements",
    imgSrc:"./food/supjambon.jpg", 
    price : 3,
    id : "Jambon" 

}, {category:"supplements",
    imgSrc:"./food/mushrooms.jpg",
    price : 2.5,
    id : "Mushrooms" 
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
function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key) ;
  });
  return acc;
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

 function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 

       return acc; 
 }

 function renderImages(array){
    each(array, function(e,i){
        var btn = $(`<button class = "price" > ${e.price} dt </button>`)
        btn.click(function(l){
            var p = $(`<p class="p">${e.id} <span class = "prc">${e.price}</span> dt</p>`)
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

/*function sum(array){
    return reduce(array,function(result,e,i){
  return  result + e
    },0)
    }
    var result = sum($(".prc"))
    $("#finished").click(function(){
        $("#secondSpan").append(`<p>${result}</p>`)
    })*/

function sum2(){
    var result=0
    var k=$(".prc");
    for (var i =0;i<k.length;i++){
        result+=parseInt(k[i].innerHTML)
    }
    return result
    $("#cost").css("color", "yellow")
}
$("#finished").click(function(){
    $("#secondSpan").append(`<p id = "cost"> your Order cost : ${sum2()} dt </p>`)
})
$("#finished").css("float","right")
$("#finished").css("margin-right","30px")
$("#finished").css("background-color","black")
$("#finished").css("color","white")
$("#finished").css("height","40px")
$("#finished").css("width","100px")
$("#pizza").css("display","block")
$("#pizza").css("height","40px")
$("#pizza").css("width","150px")
$("#pizza").css("border","2px solid #BFC0C0;")
$("#pizza").css("margin","10px 20px 20px 20px")
$("#pizza").css("color","black")
$("#pizza").css("test-transform","upperCase")
$("#pizza").css("text-decoration","none")
$("#pizza").css("font-size",".8em")
$("#pizza").css("letter-Spacing","1.5px")
$("#pizza").css("align-items","center")
$("#pizza").css("justify-content","center")
$("#pizza").css("overflow","hidden")

$("#hamburger").css("display","block")
$("#hamburger").css("height","40px")
$("#hamburger").css("width","150px")
$("#hamburger").css("border","2px solid #BFC0C0;")
$("#hamburger").css("margin","10px 20px 20px 20px")
$("#hamburger").css("color","black")
$("#hamburger").css("test-transform","upperCase")
$("#hamburger").css("text-decoration","none")
$("#hamburger").css("font-size",".8em")
$("#hamburger").css("letter-Spacing","1.5px")
$("#hamburger").css("align-items","center")
$("#hamburger").css("justify-content","center")
$("#hamburger").css("overflow","hidden")

$("#sandwiches").css("display","block")
$("#sandwiches").css("height","40px")
$("#sandwiches").css("width","150px")
$("#sandwiches").css("border","2px solid #BFC0C0;")
$("#sandwiches").css("margin","10px 20px 20px 20px")
$("#sandwiches").css("color","black")
$("#sandwiches").css("test-transform","upperCase")
$("#sandwiches").css("text-decoration","none")
$("#sandwiches").css("font-size",".8em")
$("#sandwiches").css("letter-Spacing","1.5px")
$("#sandwiches").css("align-items","center")
$("#sandwiches").css("justify-content","center")
$("#sandwiches").css("overflow","hidden")

$("#pasta").css("display","block")
$("#pasta").css("height","40px")
$("#pasta").css("width","150px")
$("#pasta").css("border","2px solid #BFC0C0;")
$("#pasta").css("margin","10px 20px 20px 20px")
$("#pasta").css("color","black")
$("#pasta").css("test-transform","upperCase")
$("#pasta").css("text-decoration","none")
$("#pasta").css("font-size",".8em")
$("#pasta").css("letter-Spacing","1.5px")
$("#pasta").css("align-items","center")
$("#pasta").css("justify-content","center")
$("#pasta").css("overflow","hidden")

$("#supplements").css("display","block")
$("#supplements").css("height","40px")
$("#supplements").css("width","150px")
$("#supplements").css("border","2px solid #BFC0C0;")
$("#supplements").css("margin","10px 20px 20px 20px")
$("#supplements").css("color","black")
$("#supplements").css("test-transform","upperCase")
$("#supplements").css("text-decoration","none")
$("#supplements").css("font-size",".8em")
$("#supplements").css("letter-Spacing","1.5px")
$("#supplements").css("align-items","center")
$("#supplements").css("justify-content","center")
$("#supplements").css("overflow","hidden")

