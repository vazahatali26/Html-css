document.addEventListener('DOMContentLoaded', function () {
    const watchesData = [
        { name: 'Watch A', price: 50, image: ' https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ' },
        { name: 'Watch B', price: 150, image: 'watch_b.jpg' },
        { name: 'Watch C', price: 350, image: 'watch_c.jpg' }
        // Add more watches as needed
    ];

    const watchContainer = document.getElementById('watchContainer');

    watchesData.forEach(watch => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = watch.image;
        image.alt = watch.name;

        const title = document.createElement('h2');
        title.textContent = watch.name;

        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = `$${watch.price}`;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);

        watchContainer.appendChild(card);
    });
});
