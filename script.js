
//cart class 
class Purchase {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}


//UI class: handles UI tasks 
class UI {
    static displayItems() {
        const storedItems = [
            {
                name: 'jacket',
                price: '140'
            },
            {
                name: 'jacket 2',
                price: '140'
            }
            
        ] 
        
        const items = storedItems;
        
        items.forEach((item) => UI.addToCart(item))
    }

    
    static addToCart(item) {

        const selections = document.querySelector('.selections')

        const ul = document.createElement('ul')

        const li = document.createElement('li')

    
        ul.append(li)

        li.style.listStyleType = "none"
        li.style.lineHeight = '300%'

        
        li.innerHTML = `${item.name} (£${item.price}) <button class = "removeButton"><i class ="material-icons"> delete </i></button>`

        selections.appendChild(li)

        
    }   
    
    
}


//event: display cart items
document.addEventListener('DOMContentLoaded', UI.displayItems)


//event: add cart items

const nums = []
total = document.getElementById('total')
total.innerHTML = "<h3>Total:</h3><break>"


document.querySelectorAll('.item-buttons').forEach(button => button.addEventListener('click',
() => {



  

    const name = button.innerHTML
    const price = parseFloat(button.id)

    const purchase = new Purchase(name, price)

    UI.addToCart(purchase)

    // calculate price
        
    for (let i = 0; i < 1; i++)   {
        nums.push(price)
        let sum = nums.reduce(function(a, b){
            return a + b;
        });
        function displayTotal() {
            total = document.getElementById('total')
            total.innerHTML = "<h3>Total:</h3><break>" + "£" +`${sum}`
        }
        displayTotal()
        
    }


    
    

}))



/* const clearButton = document.querySelector('#clear-button').addEventListener('click', () => {
    UI.clear()
})*/ 
  

