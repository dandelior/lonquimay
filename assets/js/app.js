window.onload = function() {
    const triggerMenu = document.querySelector('#triggerMenu');
    const header = document.querySelector('#header');
    const headerInner = document.querySelector('#header-inner');
    const theMenu = document.querySelector('#theMenu');
    const theRrss = document.querySelector('#theRrss');
    const theSign = document.querySelector('#theSign');

    triggerMenu.onclick = () => {
        triggerMenu.classList.toggle('toggled');
        headerInner.classList.toggle('open');
        theMenu.classList.toggle('open');
        theRrss.classList.toggle('open');
        theSign.classList.toggle('open');
        // e.preventDefault();
    }
    
    const changeDelivery = document.querySelector('#changeDelivery');
    const modalWrapperDelivery = document.querySelector('#modalDeliveryWrapper');
    const closeModalWrapperDelivery = document.querySelector('#modalDeliveryWrapper .delivery-options .head .closeModal');
        
    if (changeDelivery) {
        changeDelivery.onclick = () => {
            modalWrapperDelivery.classList.add('open');
        }
        closeModalWrapperDelivery.onclick = () => {
            modalWrapperDelivery.classList.remove('open');
        }
    }

    const modalWrapperSignIn = document.querySelector('#modalSignIn');
    const openModalSignIn = document.querySelector('#openModalSignIn');
    const closeModalSignIn = document.querySelector('#modalSignIn .sign-options .head .closeModal');

    if (openModalSignIn) {
        openModalSignIn.onclick = () => {
            modalWrapperSignIn.classList.add('open');
        }
        closeModalSignIn.onclick = () => {
            modalWrapperSignIn.classList.remove('open');
        }
    }

    const modalWrapperRemember = document.querySelector('#modalRemember');
    const openModalRemember = document.querySelector('#openModalRemember');
    const closeModalRemember = document.querySelector('#modalRemember .sign-options .head .closeModal');

    if (openModalRemember) {
        openModalRemember.onclick = () => {
            modalWrapperRemember.classList.add('open');
        }
        closeModalRemember.onclick = () => {
            modalWrapperRemember.classList.remove('open');
        }
    }

    const goToRegister = document.querySelector('#goToRegister');

    goToRegister && (
        goToRegister.onclick = () => {
            window.location = '/register.html';
        }
    )

    const goToAccount = document.querySelector('#goToAccount');
    const goToBilling = document.querySelector('#goToBilling');

    goToAccount && (
        goToAccount.onclick = () => {
            window.location = '/auth/account.html';
        }
    )

    goToBilling && (
        goToBilling.onclick = () => {
            window.location = '/auth/billing.html';
        }
    )

}
    