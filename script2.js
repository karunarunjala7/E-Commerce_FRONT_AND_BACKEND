/*-----------cart page-----------*/
const product = [
    {
        id: 0,
        image: 'img/f5.jpeg',
        title: 'Women Cartoon Print Hoodie',
        price: 799,
    },
    {
        id: 1,
        image: 'img/f2.jpg',
        title: 'YOTAMI Mens Tops Fashion',
        price: 782,
    },
    {
        id: 2,
        image: 'img/f6.jpeg',
        title: 'Trousers Men Festival Outfits',
        price: 650,
    },
    {
        id: 3,
        image: 'img/t32.jpg',
        title: 'Casual Sleeve Women Tops',
        price: 556,
    },
    {
        id: 2,
        image: 'img/f7.jpg',
        title: 'Cartoon Astronaut T-Shirts',
        price: 1250,
    },
    {
        id: 3,
        image: 'img/t43.jpeg',
        title: 'Women Cartoon Print Hoodie',
        price: 799,
    }
]; 
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var carts =[];

function addtocart(a){
    carts.push({...categories[a]});
    displaycart();
}
function delElement(a){
    carts.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=carts.length;
    if(carts.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = carts.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}    
