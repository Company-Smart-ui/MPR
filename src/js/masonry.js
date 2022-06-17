window.onload = () =>{
    const grid = document.querySelector('.grid');
    const isotope = new Isotope(grid,{
        itemSelector: '.grid-item',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
        }
    });


// filter functions
    let filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function( itemElem ) {
            let number = itemElem.querySelector('.number').textContent;
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function( itemElem ) {
            let name = itemElem.querySelector('.name').textContent;
            return name.match( /ium$/ );
        }
    };

// bind filter button click
    let filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'li' ) ) {
            return;
        }
        let filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        filterValue = filterFns[ filterValue ] || filterValue;
        isotope.arrange({ filter: filterValue });
    });

// change is-checked class on buttons
    let buttonGroups = document.querySelectorAll('.button-group');
    for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
        let buttonGroup = buttonGroups[i];
        radioButtonGroup( buttonGroup );
    }

    function radioButtonGroup( buttonGroup ) {
        buttonGroup.addEventListener( 'click', function( event ) {
            // only work with buttons
            if ( !matchesSelector( event.target, 'li' ) ) {
                return;
            }
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
    }



};

