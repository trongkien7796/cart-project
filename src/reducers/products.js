var initialState = [
    {
        id: 1,
        name: 'Ducati Panigale V4s',
        image: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/74307788_1421647584677995_8114700970413260800_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=DDEYrSKVSl0AX8a8rOo&_nc_ht=scontent.fsgn2-2.fna&oh=74d0719ac886785e11cf8111a56825dc&oe=5E90A7B2',
        description: 'Sản phẩm do Ducati sản xuất',
        price: 1000,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'BMW S1000 RR',
        image: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/72126182_1411221422387278_6020008526384988160_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=AwCl8SxINMUAX-b7eYg&_nc_ht=scontent.fsgn2-4.fna&oh=c2485a530e5c9216fea5ea3917557749&oe=5E8DE4A1',
        description: 'Sản phẩm do BMW sản xuất',
        price: 370,
        inventory: 800,
        rating: 4
    },
    {
        id: 3,
        name: 'Yamaha R1',
        image: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/76769611_1454513644724722_5268673232822599680_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=vCJKxJsz2vIAX9DBrvX&_nc_ht=scontent.fsgn2-2.fna&oh=ec8d740db5334690381794635c602f7e&oe=5E8D5A46',
        description: 'Sản phẩm do Yamaha sản xuất',
        price: 980,
        inventory: 8,
        rating : 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;