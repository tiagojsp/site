
import { supabase } from '../lib/supabase';
import { PricingPlan } from '../types';

export const getPricingPlans = async (): Promise<PricingPlan[]> => {
    const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: true });

    if (error) {
        console.error('Error fetching pricing plans:', error);
        return [];
    }

    return data || [];
};
