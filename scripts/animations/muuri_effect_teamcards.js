import Muuri from 'muuri'

function move_teamcards() {
    let grid = new Muuri('.grid', {
        dragEnabled: false,
        layoutOnInit: true,
    });

    let items_random_sort = document.querySelector('h2');

    items_random_sort.addEventListener('click', function () {
        const random_count = (a, b) => 0.5 - Math.random()
        
        grid.sort(random_count);
    });
}

export {
    move_teamcards,
}