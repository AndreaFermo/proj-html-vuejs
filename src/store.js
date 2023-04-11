import { reactive } from 'vue';

export const store = reactive(
    {
        navbarSelections: [
            'Home',
            'About Me',
            'Testimonials',
            'My Blog',
            'Meetups',
            'Shop',
            'Contact Me',
        ]
    }
);