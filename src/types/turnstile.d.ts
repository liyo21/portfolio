// Type declarations for the Cloudflare Turnstile client-side JS API
// https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/

interface TurnstileRenderOptions {
    sitekey: string;
    theme?: 'auto' | 'light' | 'dark';
    size?: 'normal' | 'flexible' | 'compact';
    execution?: 'render' | 'execute';
    appearance?: 'always' | 'execute' | 'interaction-only';
    callback?: (token: string) => void;
    'expired-callback'?: () => void;
    'error-callback'?: () => void;
    'timeout-callback'?: () => void;
    'unsupported-callback'?: () => void;
}

interface Turnstile {
    render(container: string | HTMLElement, options: TurnstileRenderOptions): string;
    reset(widgetId?: string): void;
    remove(widgetId: string): void;
    getResponse(widgetId?: string): string | undefined;
    isExpired(widgetId?: string): boolean;
    execute(container?: string | HTMLElement, options?: TurnstileRenderOptions): void;
}

declare global {
    interface Window {
        turnstile: Turnstile;
    }
}

export {};
