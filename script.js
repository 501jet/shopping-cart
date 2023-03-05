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
    ^ going to change the append to a button function and the 'x2' to a seperate function,
    using a loop to update the amount of clicks and show the corresponding number
    - possibly assign price with object 

    working on assigning prices to items with an object

    update:
    working on assigning items via the elements id 

    update: currently getting a typeError, saying that selections.clear() is not
    a function. going to add my selections to an object, attach the object to 
    the html and then clear and slice the array.
*/ 



const buttons = document.querySelectorAll('.item-buttons') 
const selections = document.querySelector('.selections')
// const cart = document.querySelector('.cart')
const total = document.getElementById('total')
const clear = document.getElementById('clear-button')
const ul = document.createElement('ul')
let priceArr = [];

function clicks ()  {
    
    buttons.forEach (button => {
    let count = 1
    let li = document.createElement('li')
    let removeButton = '<button class = "removeButton"><i class ="material-icons"> delete </i></button>'
    
    button.addEventListener('click', () => {
        (count != 1) ? li.innerHTML = removeButton +
        button.textContent + "x" + count : li.innerHTML = removeButton + button.textContent
        
        ul.append(li)
        ul.style.listStyle = 'none'
        ul.style.lineHeight = '200%'
        
        priceArr.push(button.id)
        function toNumber(value) {
            return Number(value)
        }
        let numArr = priceArr.map(toNumber);
        console.log(numArr)
        count++
        
        })
})

     

}



clicks()
selections.append(ul)


/* removeButton.addEventListener('click', () => {
                console.log('clicked')
            })
            */


clear.addEventListener('click', button => {
    selections.textContent = ''
})







total.innerHTML = "<h3>Total:</h3><break><h4>£0.00</h4>"

