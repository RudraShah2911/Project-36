var dog,sadDog,happyDog, food, addFood, deleteFood;
var database, foodStockref;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food ()

  addFood = createButton("Add Food")
  addFood.position(550,100)
  deleteFood = createButton ("Delete Food")
  deleteFood.position(650,100)

  database = firebase.database()
  foodStockref = database.ref('food')
  foodStockref.on("value",(data)=>{
    food.foodStock = data.val()
  })

}

function draw() {
  background(46,139,87);

  food.display();

  addFood.mousePressed(function(){
    food.adding()
    dog.addImage(sadDog)
  })

  deleteFood.mousePressed(function(){
    food.deleting()
    dog.addImage (happyDog)
  })

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
