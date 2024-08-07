const api = 'AIzaSyBE4weMk5IUlcCTYSuifLCX6LEOtAmmsIQ'
const placeId = 'ChIJ12cBhjkNREARnlDw9w6bI68'

const renderReviews = () => {

    const reviewsContainer = document.getElementById('reviews');
    const placeId = 'ChIJ12cBhjkNREARnlDw9w6bI68';  // Замените на ID вашего заведения

    const service = new google.maps.places.PlacesService(document.createElement('div'));

    function getReviews() {
        const request = {
            placeId: placeId,
            fields: ['reviews'],
            // fields: [
            //     'name', 'rating', 'formatted_phone_number', 'geometry', 'reviews', 'opening_hours', 'website', 'address_components', 'photo'
            // ],
            reviews_no_translations: false,
            reviews_sort: 'newest',
        };

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                renderReviews(place.reviews);
                console.log(place)
            } else {
                reviewsContainer.innerHTML = 'Не удалось загрузить отзывы.';
            }
        });
    }

    function renderReviews(reviews) {
        const renderStars = (number) => {
            let q = ''
            for (let i = 0; i < number; i++) {
                q += `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g stroke-width="0"/>
                            <g stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="#b9cf9e"/>
                        </svg>`
            }
            return q
        }
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            reviewsContainer.insertAdjacentHTML('beforeend',
                `
                <article class="gardenReview">
                    <div class="gardenReviewInfo">
                        <img class="gardenReviewPhoto" src="${review.profile_photo_url}" alt="Profile photo">
                        <div class="gardenReviewTitle">
                            <p class="gardenReviewName">${review.author_name}</p>
                            <div class="gardenReviewRating">
                                ${renderStars(review.rating)}
                            </div>
                        </div>
                    </div>
                    <p class="gardenReviewText">${review.text}</p>
                </article>
                `)
        });
    }

    getReviews();
}
const getLanguage = () => {
    const title = document.getElementById('googleReviewsBlockTitle');
    const button = document.querySelector('#googleButtons a');
    const language = navigator.language;
    const pageLang = document.location.href
    if (pageLang.includes('/ka')) {
        title.textContent = 'მიმოხილვები'
        button.textContent = 'Მაჩვენე ყველა'
    } else if (pageLang.includes('/ru')) {
        title.textContent = 'Отзывы'
        button.textContent = 'Читать все'
    } else {
        title.textContent = 'Reviews'
        button.textContent = 'Show all'
    }
}

window.addEventListener('load', function () {
    renderReviews()
    getLanguage()
});