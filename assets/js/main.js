document.addEventListener("DOMContentLoaded", () => {
    let phoneMask = IMask(
        document.querySelector('input[type="tel"]'), {
            mask: '+{7}(000)000-00-00'
        });
    let radioTypeCar = document.querySelectorAll('.sort-newprice__wrapper input[type="radio"]');
    let carPrice = document.querySelectorAll('.services-price__value--car');
    let crossoverPrice = document.querySelectorAll('.services-price__value--crossover');
    let premiumPrice = document.querySelectorAll('.services-price__value--premium');

    carPrice.forEach(item => {
        item.classList.remove('hidden');
    })
    crossoverPrice.forEach(item => {
        item.classList.add('hidden');
    })
    premiumPrice.forEach(item => {
        item.classList.add('hidden');
    })

    radioTypeCar.forEach(item => {
        item.addEventListener("change", function(e){
            console.log(e.currentTarget.dataset.car);
            if(e.currentTarget.dataset.car == "car") {

                carPrice.forEach(item => {
                    item.classList.remove('hidden');
                })
                crossoverPrice.forEach(item => {
                    item.classList.add('hidden');
                })
                premiumPrice.forEach(item => {
                    item.classList.add('hidden');
                })

            } else if (e.currentTarget.dataset.car == "crossover") {
                carPrice.forEach(item => {
                    item.classList.add('hidden');
                })
                crossoverPrice.forEach(item => {
                    item.classList.remove('hidden');
                })
                premiumPrice.forEach(item => {
                    item.classList.add('hidden');
                })
            } else {
                carPrice.forEach(item => {
                    item.classList.add('hidden');
                })
                crossoverPrice.forEach(item => {
                    item.classList.add('hidden');
                })
                premiumPrice.forEach(item => {
                    item.classList.remove('hidden');
                })
            }


        });
    });

});





