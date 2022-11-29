// Adding Object property using dot or bracket notation

const circle = {};
circle;
circle.radius = 5;
circle;
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;

// Modifying Property using Dot or Bracket notation


const mondayMenu = {
    cheesePlate: {
        soft: "Chevre",
        semiSoft: "Gruyere",
        hard: "Manchego"
    },
    fries: "Curly",
    salad: "Cobb",
};

mondayMenu.fries = "sweet potato";


// Updating Object nondestructively using the spread operator

function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }


// Removing a property from an Object

const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };

  delete wednesdayMenu.salad;
  wednesdayMenu;

//   Identifying the relationship between Arrays and Objects

//  numbers, strings, booleans, symbols, objects, null and undefined.
// Array is a special type of object.

/* 
Debugging: is the process of figuring out where our code is either breaking, or giving us an unexpected result.

Tracing: is using output statements (like console.log()) to provide feedback about "What the machine is thinking."


*/


