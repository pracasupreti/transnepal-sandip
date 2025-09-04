type CounterItem = {
    id: number;
    count: number;
    label: string;
    iconClass: string; // for example, "icofont-google-map"
};

export const COUNTERS: CounterItem[] = [
    {
        id: 1,
        count: 7,
        label: 'Number Of Offices',
        iconClass: 'icofont-google-map'
    },
    {
        id: 2,
        count: 3,
        label: 'Number of Projects',
        iconClass: 'icofont-google-map'
    },
    {
        id: 3,
        count: 350000,
        label: 'Traffics',
        iconClass: 'icofont-google-map'
    },
    {
        id: 4,
        count: 100,
        label: 'Staffs',
        iconClass: 'icofont-google-map'
    },
    {
        id: 5,
        count: 19,
        label: 'Years',
        iconClass: 'icofont-google-map'
    }
];
