type Testimonial = {
    id: number;
    name: string;
    position: string;
    testimonial: string;
    // img?: string; // Image field omitted as per request
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Mr Mukesh Rathi',
        position: 'Managing Director, Rathi Group',
        testimonial:
            'TransNepal’s solutions are user-friendly, innovative, and low cost. We wish them success in all their endeavors.'
    },
    {
        id: 2,
        name: 'Mr. Suresh Kumar R',
        position: 'CEO- All Cargo Logistic Limited',
        testimonial:
            'TransNepal’s proactive efforts have helped us to maintain strong relationships with our customers. Thank you for your marvelous efforts.'
    }
];
