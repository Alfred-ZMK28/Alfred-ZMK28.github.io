/**
 * Configuration interface for bouquet text display
 */
export interface BouquetTextConfig {
    message: string;
    recipient?: string;
    occasion?: string;
    showAnimation?: boolean;
    customStyle?: Partial<CSSStyleDeclaration>;
}
/**
 * Predefined occasions with default messages
 */
export declare enum Occasion {
    BIRTHDAY = "birthday",
    ANNIVERSARY = "anniversary",
    VALENTINE = "valentine",
    MOTHER_DAY = "mothers-day",
    APPRECIATION = "appreciation",
    CUSTOM = "custom"
}
/**
 * Default messages for different occasions
 */
export declare const DEFAULT_MESSAGES: Record<Occasion, string>;
/**
 * Theme colors for different occasions
 */
export declare const OCCASION_THEMES: Record<Occasion, {
    primary: string;
    secondary: string;
}>;
/**
 * Text display manager for dynamic bouquet messages
 */
export declare class TextDisplayManager {
    private textElement;
    private currentConfig;
    constructor();
    /**
     * Initialize or find the text display element
     */
    private initializeTextElement;
    /**
     * Create a new text display element
     */
    private createTextElement;
    /**
     * Update the bouquet text with new configuration
     */
    updateText(config: BouquetTextConfig): void;
    /**
     * Build the complete message from configuration
     */
    private buildMessage;
    /**
     * Apply custom styles to the text element
     */
    private applyCustomStyles;
    /**
     * Animate text change
     */
    private animateTextChange;
    /**
     * Set text for a specific occasion
     */
    setOccasionText(occasion: Occasion, recipient?: string): void;
    /**
     * Hide the text element
     */
    hideText(): void;
    /**
     * Show the text element
     */
    showText(): void;
    /**
     * Get current configuration
     */
    getCurrentConfig(): BouquetTextConfig | null;
}
//# sourceMappingURL=text-display.d.ts.map