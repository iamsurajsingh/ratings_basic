const ratings = {
    p1: 4.2,
    p2: 3.6,
    p3: 2.5,
    p4: 3.6,
    p5: 2.9

}
// Total Stars
const totalRatings = 5;

let product;
let rating_assign;


document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById('product-select');
    const ratingSelect = document.getElementById('rating-control');
        //const numberSelect = document.getElementById('number-rating');

    productSelect.addEventListener('change', (e) => {

            product = e.target.value;
            ratingSelect.disabled = false;
            ratingSelect.value = ratings[product];

    });
            // rating control change
        
    ratingSelect.addEventListener('blur', (e) => {

        const rating = e.target.value;
        //rating_assign = ratingSelect.value;
        console.log(rating);

        ratings[product] = ratings[rating]; 
        //console.log(ratings[rating]);
        if(rating > 5) {
            alert('Please rate 1 - 5');
            return;
        }


        // Change Rating
        ratings[product] = rating;

        getRatings();
        
    });


// Get Ratings
function getRatings() {

    for (const rating in ratings) {

        const starPercentage = (ratings[rating] / totalRatings) * 100;

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    
        //set width of stars-inner to ratings percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        //return rating;

        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }

    

    

    
}


