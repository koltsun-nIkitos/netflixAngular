const cardWrapper = document.querySelector('.content-cards');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const films = [
    {
        id: 0,
        imgSrc: './img/film.png',
        title: 'Марсианин',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        link: './film.html',
        rating: 7.8
    },
    {
        id: 1,
        imgSrc: './img/film.png',
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        link: './film.html',
        rating: 7.8
    },
    {
        id: 2,
        imgSrc: './img/film.png',
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        link: './film.html',
        rating: 7.8
    }
]

const render = (array) =>{
    cardWrapper.innerHTML = '';

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.imgSrc}" alt="film img">
                </div>

                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>

                <p class="content-cards__item--description">
                    ${item.category}
                </p>

                <p class="content-cards__item--rating">
                    ${item.rating}
                </p>
            </a>
        `)
    })
}

searchButton.addEventListener('click', ()=>{
    render(films.filter((item) => {
        return item.title.includes(searchInput.value);
    }));
})

render(films);
