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
        ],
        usefulLinks: [
            'Latest Books',
            'Upcoming Events',
            'Recent Articles',
            'Business Enquiries',
            'Visit My Foundation'
        ],
        socialIcons: [
            'facebook-f',
            'twitter',
            'instagram',
            'linkedin-in',
            'youtube'
        ]
    }
);