export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar_url: string;
    rating: number;
    created_at?: string;
}

export interface PricingPlan {
    id: number;
    name: string;
    price: number;
    currency: string;
    interval: string;
    description: string;
    cta: string;
    features: string[];
    is_popular: boolean;
    is_dark: boolean;
    created_at?: string;
}
