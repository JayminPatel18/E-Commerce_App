export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "Beige", label: "Beige"},
            {value: "Blue", label: "Blue"},
            {value: "Brown", label: "Brown"},
            {value: "Green", label: "Green"},
            {value: "Purple", label: "Purple"},
            {value: "Yellow", label: "Yellow"}
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ]
    }
];


export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "₹159 to ₹399"},
            {value: "399-999", label: "₹399 to ₹999"},
            {value: "999-1999", label: "₹999 to ₹1999"},
            {value: "1999-2999", label: "₹1999 to ₹2999"},
            {value: "3999-4999", label: "₹3999 to ₹4999"},
        ]
    },
    {
        id: "discount",
        name: "DISCOUNT RANGE",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"},
            {value: "90", label: "90% And Above"},
        ]
    },
    {
        id: "availability",
        name: "Availability",
        options: [
            {value: "in stock", label: "In Stock"},
            {value: "out of stock", label: "Out of Stock"},
        ]
    }
];