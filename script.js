// كود بسيط للتفاعل
document.addEventListener('DOMContentLoaded', () => {
    
    const cartIcon = document.querySelector('.fa-shopping-bag');
    
    cartIcon.addEventListener('click', () => {
        alert('سلة المشتريات فارغة حالياً. ابدأ بالتسوق!');
    });

    // تأثير بسيط عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.top-bar');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000';
        } else {
            header.style.backgroundColor = '#111';
        }
    });
});
