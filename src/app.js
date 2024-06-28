
const foodItems = [
    {
        "foodname": "Margherita Pizza",
        "img": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "desc": "Classic cheese and tomato pizza with fresh basil.",
        "price": 130,
        "type": "veg"
    },
    {
        "foodname": "Chicken Biryani",
        "img": "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4=",
        "desc": "Spicy chicken biryani served with raita, fry chicken.",
        "price": 250,
        "type": "non-veg"
    },
    {
        "foodname": "Veggie Burger",
        "img": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "desc": "A hearty veggie burger with lettuce, tomato, and special sauce.",
        "price": 220,
        "type": "veg"
    }
];

const outlets = [
    {
        "outletname": "Pizza Palace",
        "img": "https://images.unsplash.com/photo-1517601278517-456741619dad?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "desc": "Best pizza in town with a variety of toppings.",
        "place": "Hsr Layout"
    },
    {
        "outletname": "Biryani House",
        "img": "https://images.unsplash.com/photo-1534583328967-da5861289dc7?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "desc": "Authentic biryani with a blend of rich spices.",
        "place": "Koramangala"
    },
    {
        "outletname": "Burger Barn",
        "img": "https://plus.unsplash.com/premium_photo-1663126639467-c7e99e7a7911?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "desc": "Delicious veggie and meat burgers with special sauces.",
        "place": "Indiranagar"
    }
];

const restaurants = [
    {
        "restaurantName": "Swaadisht Thali",
        "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "place": "Mumbai",
        "desc": "Traditional Indian thali with a variety of delicious dishes."
    },
    {
        "restaurantName": "Dilli Darbar",
        "img": "https://plus.unsplash.com/premium_photo-1679434137916-2469d3a047da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "place": "Delhi",
        "desc": "Authentic North Indian cuisine with a royal touch."
    },
    {
        "restaurantName": "Bangalore Biryani House",
        "img": "https://plus.unsplash.com/premium_photo-1661369889067-c86c31362f83?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "place": "Bangalore",
        "desc": "Famous for its flavorful and aromatic biryanis."
    }
];


function orderOnlin(){

    let orderOnline = document.querySelectorAll('.order-card');
    let outletCard = document.querySelectorAll('.outlet-card');
    let restaurantCard = document.querySelectorAll('.restaurant-card');

foodItems.map((foodItem, index) => {

    if(orderOnline[index]) {
            const img = orderOnline[index].querySelector('.img');
            const foodname = orderOnline[index].querySelector('.foodname');
            const desc = orderOnline[index].querySelector('.desc');
            const price = orderOnline[index].querySelector('.price');

            img.src = foodItem.img;
            img.alt = foodItem.foodname;
            foodname.textContent = foodItem.foodname;
            desc.textContent = foodItem.desc;
            price.textContent = `Price: ${foodItem.price}`;
    
    }
        const foodType = orderOnline[index].querySelector('.food-type')
        let span = document.createElement('span')
        span.style.height = '12px'
        span.style.width = '12px'
        span.style.borderRadius = '50%'

    // if(foodItem.type === 'veg'){        
    //     span.style.backgroundColor = 'green'
    // } else {
    //     span.style.backgroundColor = 'red'
    // }

    foodItem.type === 'veg' ? span.style.backgroundColor = 'green' : span.style.backgroundColor = 'red'

    foodType.appendChild(span)
})

outlets.map((outlet, index) => {

    if(outletCard[index]) {
            const img = outletCard[index].querySelector('.outlet-img');
            const foodname = outletCard[index].querySelector('.outletname');
            const desc = outletCard[index].querySelector('.desc');
            const price = outletCard[index].querySelector('.place');

            img.src = outlet.img;
            img.alt = outlet.outletname;
            foodname.textContent = outlet.outletname;
            desc.textContent = outlet.desc;
            price.textContent = `Place: ${outlet.place}`;
    }
})

restaurants.map((restaurant, index) => {

    if(restaurantCard[index]) {
            const img = restaurantCard[index].querySelector('.restaurant-img');
            const restaurantname = restaurantCard[index].querySelector('.restaurant-name');
            const desc = restaurantCard[index].querySelector('.descp');
            const place = restaurantCard[index].querySelector('.restaurant-place');

            img.src = restaurant.img;
            img.alt = restaurant.restaurantName;
            restaurantname.textContent = restaurant.restaurantName;
            desc.textContent = restaurant.desc;
            place.textContent = `Place: ${restaurant.place}`;
        }
})


}

orderOnlin()


