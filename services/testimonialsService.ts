import { supabase } from '../lib/supabase';
import { Testimonial } from '../types';

export const getTestimonials = async (): Promise<Testimonial[]> => {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*');

    if (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }

    return data || [];
};
