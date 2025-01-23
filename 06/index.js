// console.log('im connected');

// const person = {
//     name: "Travis Shanhun",
//     age: 30,
//     greet: function() {
//         console.log(`Hello`);
        
//     }
// }



// person.greet = function(name) {
//     console.log(`Hello ${name}!`);
    
// }

// person.greet("Steffan")

const el = document.querySelector('#my-unordered-list')
const btn = document.querySelector("#btn")


btn.addEventListener('click', btnHandler)



















































function btnHandler() {

   const listItem = document.createElement('li')
   listItem.innerHTML = `
   <li>List Item 1</li>
   <li>List Item 1</li>
   <li>List Item 1</li>
   `
   el.appendChild(listItem)
}


