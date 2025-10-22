/**
 * Predefined occasions with default messages
 */
export var Occasion;
(function (Occasion) {
    Occasion["BIRTHDAY"] = "birthday";
    Occasion["ANNIVERSARY"] = "anniversary";
    Occasion["VALENTINE"] = "valentine";
    Occasion["MOTHER_DAY"] = "mothers-day";
    Occasion["APPRECIATION"] = "appreciation";
    Occasion["CUSTOM"] = "custom";
})(Occasion || (Occasion = {}));
/**
 * Default messages for different occasions
 */
export const DEFAULT_MESSAGES = {
    [Occasion.BIRTHDAY]: 'Happy Birthday',
    [Occasion.ANNIVERSARY]: 'Happy Anniversary',
    [Occasion.VALENTINE]: 'Be My Valentine',
    [Occasion.MOTHER_DAY]: "Happy Mother's Day",
    [Occasion.APPRECIATION]: 'Thank You',
    [Occasion.CUSTOM]: 'Beautiful Flowers',
};
/**
 * Theme colors for different occasions
 */
export const OCCASION_THEMES = {
    [Occasion.BIRTHDAY]: { primary: '#ff6b6b', secondary: '#ffd93d' },
    [Occasion.ANNIVERSARY]: { primary: '#ff1a1a', secondary: '#ffffff' },
    [Occasion.VALENTINE]: { primary: '#e91e63', secondary: '#f8bbd9' },
    [Occasion.MOTHER_DAY]: { primary: '#9c27b0', secondary: '#e1bee7' },
    [Occasion.APPRECIATION]: { primary: '#4caf50', secondary: '#c8e6c9' },
    [Occasion.CUSTOM]: { primary: '#2196f3', secondary: '#bbdefb' },
};
/**
 * Text display manager for dynamic bouquet messages
 */
export class TextDisplayManager {
    constructor() {
        this.textElement = null;
        this.currentConfig = null;
        this.initializeTextElement();
    }
    /**
     * Initialize or find the text display element
     */
    initializeTextElement() {
        this.textElement = document.querySelector('.flower__text');
        if (!this.textElement) {
            this.createTextElement();
        }
    }
    /**
     * Create a new text display element
     */
    createTextElement() {
        this.textElement = document.createElement('div');
        this.textElement.className = 'flower__text';
        document.body.appendChild(this.textElement);
    }
    /**
     * Update the bouquet text with new configuration
     */
    updateText(config) {
        if (!this.textElement)
            return;
        this.currentConfig = config;
        const fullMessage = this.buildMessage(config);
        this.textElement.textContent = fullMessage;
        this.applyCustomStyles(config);
        if (config.showAnimation !== false) {
            this.animateTextChange();
        }
    }
    /**
     * Build the complete message from configuration
     */
    buildMessage(config) {
        let message = config.message;
        if (config.recipient) {
            message += ` ${config.recipient}`;
        }
        return message;
    }
    /**
     * Apply custom styles to the text element
     */
    applyCustomStyles(config) {
        if (!this.textElement || !config.customStyle)
            return;
        Object.assign(this.textElement.style, config.customStyle);
    }
    /**
     * Animate text change
     */
    animateTextChange() {
        if (!this.textElement)
            return;
        this.textElement.style.opacity = '0';
        this.textElement.style.transform = 'translate(-50%, -60%) scale(0.8)';
        setTimeout(() => {
            if (this.textElement) {
                this.textElement.style.opacity = '1';
                this.textElement.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }, 300);
    }
    /**
     * Set text for a specific occasion
     */
    setOccasionText(occasion, recipient) {
        const message = DEFAULT_MESSAGES[occasion];
        const theme = OCCASION_THEMES[occasion];
        this.updateText({
            message,
            recipient,
            occasion,
            customStyle: {
                color: theme.primary,
                textShadow: `0 0 10px ${theme.secondary}, 0 0 20px ${theme.secondary}`,
            },
        });
    }
    /**
     * Hide the text element
     */
    hideText() {
        if (this.textElement) {
            this.textElement.style.display = 'none';
        }
    }
    /**
     * Show the text element
     */
    showText() {
        if (this.textElement) {
            this.textElement.style.display = 'block';
        }
    }
    /**
     * Get current configuration
     */
    getCurrentConfig() {
        return this.currentConfig;
    }
}
//# sourceMappingURL=text-display.js.map