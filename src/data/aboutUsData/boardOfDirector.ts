type BoardMember = {
    id: number;
    name: string;
    post: string;
    description: string;
    img?: string;
};

type BoardOfDirectors = {
    title: string;
    people: BoardMember[];
};

export const BOARD_OF_DIRECTORS: BoardOfDirectors = {
    title: 'BOARD OF DIRECTORS',
    people: [
        {
            id: 1,
            name: 'Adarsh Hegde',
            post: 'Chairman',
            description:
                'Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception. With over two and half decades of experience in the field of logistics, he has been instrumental in the success of Allcargo Logistics’ growth story. Under his leadership, Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS & ICD division one of the largest private players in the country. He continues to lead the blue print and strategy for the division. With his extensive experience & proficiency in transportation, he has contributed to the set-up the Allcargo Logistics Project Forwarding division. He is also a part of the leadership team at ECU-Line with respect to driving international procurement initiative and organisation-wide planning. After finishing his mechanical engineering from Nitte Education Trust, Mangalore, he started his career as an Assistant Maintenance Engineer with Eastern Ceramics Private Limited, Mumbai in 1987.'
        },
        {
            id: 2,
            name: 'Mukesh Kumar Rathi',
            post: 'Managing Director',
            description:
                'Mr. Mukesh Kumar Rathi has been holding the position as Managing Director of TransNepal Freight Services Pvt. Ltd., since 2002. He is a young and dynamic businessman. He played a key role in developing and implementing various systems and procedures which helps the organisation in achieving and establishing its benchmark in ICD/CFS operation in Nepal. He was very instrumental in renewing the contract for operation and management of ICDs with Nepal Intermodal Transport Development Board in the year 2012. His sincerity, foresight and skill to handle manpower make him true business leader. He is a Group Director of Rathi Group a leading business house in Nepal having its presence in Trading, Manufacturing and Service sector across the board.',
            img: 'assets/images/board/2.jpg'
        },
        {
            id: 3,
            name: 'Bhim Raj Joshi',
            post: 'Director',
            description:
                'Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management in the operation of ICDs. Mr. Joshi chairs J.B.Transport Group, a pioneer in the field of transportation in Nepal and this is his vision and sincere effort which made JBT strengthen day by day and today is a reputed name and market leader in transportation sector of Nepal.',
            img: 'assets/images/board/3.png'
        },
        {
            id: 4,
            name: 'Pankaj Rathi',
            post: 'Director',
            description:
                'Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance) and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD. as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets.',
            img: 'assets/images/board/4.jpg'
        }
    ]
};
