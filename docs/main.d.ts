import { type BouquetTextConfig, Occasion } from './text-display.js';
/**
 * Global window interface for type safety
 */
declare global {
    interface Window {
        flowerController: FlowerController;
        Occasion: typeof Occasion;
    }
}
/**
 * Flower Animation Controller
 * Manages the loading animation and interactions for the flower bouquet
 */
declare class FlowerController {
    private static readonly ANIMATION_DELAY;
    private loadingTimeout;
    private textManager;
    constructor();
    /**
     * Initialize the flower animation controller
     */
    private init;
    /**
     * Setup the loading animation that removes the not-loaded class after delay
     */
    private setupLoadingAnimation;
    /**
     * Remove the not-loaded class to start animations
     */
    private removeLoadingState;
    /**
     * Clear the loading timeout
     */
    private clearLoadingTimeout;
    /**
     * Setup event listeners for interactions
     */
    private setupEventListeners;
    /**
     * Handle flower click interactions
     */
    private handleFlowerClick;
    /**
     * Animate flower interaction with enhanced effects
     */
    private animateFlowerInteraction;
    /**
     * Create particle burst effect on flower click
     */
    private createParticleBurst;
    /**
     * Handle window resize
     */
    private handleResize;
    /**
     * Public method to restart animations
     */
    restartAnimations(): void;
    /**
     * Update the bouquet text display
     */
    updateBouquetText(config: BouquetTextConfig): void;
    /**
     * Set text for a specific occasion
     */
    setOccasionText(occasion: Occasion, recipient?: string): void;
    /**
     * Hide the text display
     */
    hideText(): void;
    /**
     * Show the text display
     */
    showText(): void;
    /**
     * Create floating atmospheric elements
     */
    createFloatingElements(): void;
    /**
     * Create a floating petal element
     */
    private createFloatingPetal;
    /**
     * Create a floating light orb
     */
    private createLightOrb;
    /**
     * Cleanup method
     */
    destroy(): void;
}
declare let flowerController: FlowerController;
export default FlowerController;
export { flowerController, Occasion };
//# sourceMappingURL=main.d.ts.map