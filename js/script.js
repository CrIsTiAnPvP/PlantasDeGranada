document.addEventListener('DOMContentLoaded', function() {
    const deliveryOptions = document.querySelectorAll('#Entrega .TiposE > div');
    const dateInput = document.querySelector('#fechaProg');

    deliveryOptions.forEach(div => {
        div.addEventListener('click', function() {
            deliveryOptions.forEach(d => {
                d.classList.remove('selected', 'expanded');
                d.querySelector('input').checked = false;
            });

            const radio = this.querySelector('input');
            radio.checked = true;
            this.classList.add('selected');

            if(radio.id === 'prog') {
                setTimeout(() => {
                    dateInput.classList.add('visible');
                    dateInput.required = true;
                }, 300);
            } else {
                dateInput.classList.remove('visible');
                dateInput.required = false;
            }
        });
    });

    const paymentOptions = document.querySelectorAll('#Pago .mpago > div');
    const bizumPhone = document.querySelector('#TBiz');
    const bizumCode = document.querySelector('#BizumSelect');

    paymentOptions.forEach(div => {
        div.addEventListener('click', function() {
            paymentOptions.forEach(d => {
                d.classList.remove('selected', 'expanded');
                d.querySelector('input').checked = false;
            });

            const radio = this.querySelector('input');
            radio.checked = true;
            this.classList.add('selected');

            if(radio.id === 'biz') {
                setTimeout(() => {
                    bizumPhone.classList.add('visible');
                    bizumPhone.required = true;
                    bizumCode.classList.add('visible');
                }, 300);
            } else {
                bizumPhone.classList.remove('visible');
                bizumPhone.required = false;
                bizumCode.classList.remove('visible');
            }
        });
    });
    
    const truck = document.querySelector('.truck');
    const road = document.querySelector('.road');
    const btnText = document.querySelector('.btn-text');
    const purchaseBtn = document.querySelector('.purchase-btn');

    
    truck.addEventListener('animationend', () => {
        console.log('Animation ended');
        truck.classList.add('hidden');
        road.classList.add('hidden');
        btnText.classList.add('visible');
        purchaseBtn.classList.add('clean');
        setTimeout(() => {
            truck.classList.remove('hidden');
            road.classList.remove('hidden');
            btnText.classList.remove('visible');
            purchaseBtn.classList.remove('clean');
        }, 1500); 
    });
    
    
    
});
