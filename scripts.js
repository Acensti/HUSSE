window.addEventListener('DOMContentLoaded', (event) => {
    const portfolioImages = Array.from(document.querySelectorAll(".portfolio-image"));

    function changeBackgroundImage() {
        const currentBackgroundIndex = Math.floor(Math.random() * portfolioImages.length);
        const image = portfolioImages[currentBackgroundIndex];
        document.body.style.backgroundImage = `url('${getComputedStyle(image).backgroundImage.slice(4, -1)}')`;
    }

    setInterval(changeBackgroundImage, 5000); // Change every 5 seconds

    // Initial background image
    changeBackgroundImage();
});
