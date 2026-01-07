export interface Testimonial {
    id: number;
    name: string;
    role: string;
    role_pt?: string;
    content: string;
    content_pt?: string;
    avatar_url: string;
    rating: number;
    created_at?: string;
}

export interface PricingPlan {
    id: number;
    name: string;
    name_pt?: string;
    price: number;
    currency: string;
    interval: string;
    interval_pt?: string;
    description: string;
    description_pt?: string;
    cta: string;
    cta_pt?: string;
    features: string[];
    features_pt?: string[];
    is_popular: boolean;
    is_dark: boolean;
    created_at?: string;
}
