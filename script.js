/*   OVERVIEW


    - when the user clicks on one of the buttons, the item will appear in the cart with it's price and a cancel button nect to it. 
    - the total will be updated when the user adds or subtracts items 
    - the user can clear the cart with a clear button at the buttom of the page

    METHOD
    - names and prices need to be assigned to the buttons
    - items will need to appear in the cart in an aesthetically pleasing list format
    - the total will need to the sum of all items
    - clear button needs to make the cart empty and reset the total to 0

    -three main functions: ADD TO CART, CALCULATE TOTAL, CLEAR CART
    -assign prices in an object

    NOTES
    - not sure how to assign prices yet
    - possibly append button.innerText to the cart to update it.
    - possibly assign price with object 

    working on assigning prices to items with an object

    update:
    working on assigning items via the elements id 

    update: currently getting a typeError, saying that selections.clear() is not
    a function. going to add my selections to an object, attach the object to 
    the html and then clear and slice the array.
*/ 

// class Cart 
   // constructor(selections) {
        //this.selections = selections
   // }   

/* function calcTotal() {

}*/

    // clear() {
       // this.selections = ''
       // }

const priceList = [
    {
        name: 'long sleeved shirt',
        price: '50',
    },

    {
        name: 'wallet',
        price: '35'
    }
]

const buttons = document.querySelectorAll('.item-buttons') 
const selections = document.querySelector('.selections')
// const cart = document.querySelector('.cart')
const total = document.getElementById('total')
const clear = document.getElementById('clear-button')

// const cart = new Cart(selections)

/* buttons.forEach (button => {
    button.addEventListener('click', () => {
    selections.append(button.textContent) 
    
    })
})

*/ 

/* let ul = document.createElement('ul')


buttons.forEach (button => {
    let li = document.createElement('li')
    button.addEventListener('click', () => {
    li.innerHTML = button.textContent
    ul.appendChild(li)
    })
    

})

selections.appendChild(ul)
*/

let ul = document.createElement('ul')


buttons.forEach (button => {
    let li = document.createElement('li')
    button.addEventListener('click', () => {
    li.innerHTML = button.textContent
    ul.append(li)
    ul.style.listStyle = 'none'
    })
})

selections.append(ul)



clear.addEventListener('click', button => {
    selections.textContent = ''
})

//adds items to the cart

// convert the inner text to a string and append it to the cart




    
// calculates the total
// working on doing this by assigning prices in the html id and then accessing
// it, converting it into a number and then adding it to the cart



//empties the cart



total.innerHTML = "<h3>Total:</h3><break><h4>£0.00</h4>"

