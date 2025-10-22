import { Occasion, TextDisplayManager } from './text-display.js';
/**
 * Flower Animation Controller
 * Manages the loading animation and interactions for the flower bouquet
 */
class FlowerController {
    constructor() {
        this.loadingTimeout = null;
        this.textManager = new TextDisplayManager();
        this.init();
    }
    /**
     * Initialize the flower animation controller
     */
    init() {
        this.setupLoadingAnimation();
        this.setupEventListeners();
    }
    /**
     * Setup the loading animation that removes the not-loaded class after delay
     */
    setupLoadingAnimation() {
        this.loadingTimeout = window.setTimeout(() => {
            this.removeLoadingState();
            this.clearLoadingTimeout();
        }, FlowerController.ANIMATION_DELAY);
    }
    /**
     * Remove the not-loaded class to start animations
     */
    removeLoadingState() {
        document.body.classList.remove('not-loaded');
    }
    /**
     * Clear the loading timeout
     */
    clearLoadingTimeout() {
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = null;
        }
    }
    /**
     * Setup event listeners for interactions
     */
    setupEventListeners() {
        // Add click handler for flowers
        document.addEventListener('click', this.handleFlowerClick.bind(this));
        // Add resize handler for responsive behavior
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    /**
     * Handle flower click interactions
     */
    handleFlowerClick(event) {
        const target = event.target;
        if (target.closest('.flower')) {
            this.animateFlowerInteraction(target.closest('.flower'));
        }
    }
    /**
     * Animate flower interaction with enhanced effects
     */
    animateFlowerInteraction(flower) {
        // Enhanced flower animation
        flower.classList.add('flower--clicked');
        // Create particle burst effect
        this.createParticleBurst(flower);
        // Add gentle bounce animation
        flower.style.transform += ' scale(1.15) rotate(5deg)';
        flower.style.filter = 'brightness(1.3) saturate(1.4)';
        setTimeout(() => {
            flower.style.transform = flower.style.transform
                .replace(' scale(1.15)', '')
                .replace(' rotate(5deg)', '');
            flower.style.filter = '';
            flower.classList.remove('flower--clicked');
        }, 400);
    }
    /**
     * Create particle burst effect on flower click
     */
    createParticleBurst(flower) {
        const rect = flower.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Create multiple particles
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            // Random colors for particles
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            // Position at flower center
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            // Random direction and distance
            const angle = i * 45 + Math.random() * 30 - 15;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos((angle * Math.PI) / 180) * distance;
            const y = Math.sin((angle * Math.PI) / 180) * distance;
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            document.body.appendChild(particle);
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
    }
    /**
     * Handle window resize
     */
    handleResize() {
        // Add responsive behavior if needed
        console.log('Window resized');
    }
    /**
     * Public method to restart animations
     */
    restartAnimations() {
        document.body.classList.add('not-loaded');
        this.setupLoadingAnimation();
    }
    /**
     * Update the bouquet text display
     */
    updateBouquetText(config) {
        this.textManager.updateText(config);
    }
    /**
     * Set text for a specific occasion
     */
    setOccasionText(occasion, recipient) {
        this.textManager.setOccasionText(occasion, recipient);
    }
    /**
     * Hide the text display
     */
    hideText() {
        this.textManager.hideText();
    }
    /**
     * Show the text display
     */
    showText() {
        this.textManager.showText();
    }
    /**
     * Create floating atmospheric elements
     */
    createFloatingElements() {
        // Insert floating-elements before .flowers
        const floatingContainer = document.createElement('div');
        floatingContainer.className = 'floating-elements';
        floatingContainer.style.zIndex = '20'; // Behind flowers (z-index: 10)
        const flowers = document.querySelector('.flowers');
        if (flowers && flowers.parentNode) {
            flowers.parentNode.insertBefore(floatingContainer, flowers);
        }
        else {
            document.body.appendChild(floatingContainer);
        }
        // Create floating petals
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                this.createFloatingPetal();
            }, i * 2000);
        }
        // Create subtle light orbs
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                this.createLightOrb();
            }, i * 3000);
        }
    }
    /**
     * Create a floating petal element
     */
    createFloatingPetal() {
        const petal = document.createElement('div');
        petal.className = 'floating-petal';
        // Random starting position
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${8 + Math.random() * 4}s`;
        petal.style.animationDelay = `${Math.random() * 2}s`;
        // Set top to the very top of the screen
        petal.style.top = '0';
        // Random size
        const size = 0.5 + Math.random() * 0.5;
        petal.style.transform = `scale(${size})`;
        // Append to floating-elements container if it exists
        const floatingContainer = document.querySelector('.floating-elements');
        if (floatingContainer) {
            floatingContainer.appendChild(petal);
        }
        else {
            document.body.appendChild(petal);
        }
        // Remove after animation
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
            // Create new one
            this.createFloatingPetal();
        }, 12000);
    }
    /**
     * Create a floating light orb
     */
    createLightOrb() {
        const orb = document.createElement('div');
        orb.className = 'light-orb';
        // Random position and properties
        orb.style.left = `${20 + Math.random() * 60}%`;
        orb.style.top = `${20 + Math.random() * 60}%`;
        orb.style.animationDuration = `${4 + Math.random() * 3}s`;
        orb.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(orb);
        // Remove after animation
        setTimeout(() => {
            if (orb.parentNode) {
                orb.parentNode.removeChild(orb);
            }
            // Create new one
            this.createLightOrb();
        }, 8000);
    }
    /**
     * Cleanup method
     */
    destroy() {
        this.clearLoadingTimeout();
        document.removeEventListener('click', this.handleFlowerClick.bind(this));
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
}
FlowerController.ANIMATION_DELAY = 1000;
// Global instance for easy access
let flowerController;
/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    flowerController = new FlowerController();
    // Set default message with enhanced styling
    flowerController.updateBouquetText({
        message: 'Flowers for Thazin 🌸',
        showAnimation: true,
        customStyle: {
            fontSize: '4.5rem',
            fontWeight: '800',
            letterSpacing: '0.05em',
        },
    });
    // Add floating elements for ambiance
    flowerController.createFloatingElements();
    // Make it globally accessible for console interaction
    window.flowerController = flowerController;
    window.Occasion = Occasion;
}); // Legacy support for the original onload handler
window.onload = () => {
    // This maintains backward compatibility with the original code
    const timeout = setTimeout(() => {
        document.body.classList.remove('not-loaded');
        clearTimeout(timeout);
    }, 1000);
};
export default FlowerController;
export { flowerController, Occasion };
//# sourceMappingURL=main.js.map