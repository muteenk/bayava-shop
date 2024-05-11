const CarouselData = [
    {
        id: 1,
        title: "Dummy Title 1",
        subTitle: "FASHION",
        img: "https://images.unsplash.com/photo-1620862657760-72a639a2daef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Fashion"
    },
    {
        id: 2,
        title: "Dummy Title 2",
        subTitle: "BEAUTY",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Beauty"
    },
    {
        id: 3,
        title: "Dummy Title 3",
        subTitle: "LIFESTYLE",
        img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Lifestyle"
    },
    {
        id: 4,
        title: "Dummy Title 4",
        subTitle: "TRAVEL",
        img: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Travel"
    }
]


const ProductCardSliderData = [
    {
        id: 1,
        title: "Dummy Title 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl.",
        img: "https://www.cnet.com/a/img/resize/ade06cba6050b2e21b7a9d0942ef5e082688d429/hub/2022/08/12/c417b1b6-f63d-4870-ab2b-9bc07af73ba6/gettyimages-733474417.jpg?auto=webp&fit=crop&height=675&width=1200",
        alt: "Product 1",
        link: "/",
        price: 100,
        discount: 20,
        rating: 4,
    },
    {
        id: 2,
        title: "Dummy Title 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl.",
        img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/04/25130636/vedix.jpg",
        alt: "Product 2",
        link: "/",
        price: 200,
        discount: 30,
        rating: 5,
    },
    {
        id: 3,
        title: "Dummy Title 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl.",
        img: "https://www.forbesindia.com/media/images/2020/Sep/img_141255_ayurvedicproduct.jpg",
        alt: "Product 3",
        link: "/",
        price: 300,
        discount: 40,
        rating: 3,
    },
    {
        id: 4,
        title: "Dummy Title 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl. Nulla facilisi. Sed ut turpis sollicitudin, tincidunt nunc et, varius nisl.",
        img: "https://www.santulan.in/wp-content/uploads/2023/01/IMG_0461.jpg",
        alt: "Product 4",
        link: "/",
        price: 400,
        discount: 50,
        rating: 2,
    },
]


const newArrivalCards = [
    {
        id: 1,
        title: "Dummy Title 1",
        img: "https://www.cnet.com/a/img/resize/ade06cba6050b2e21b7a9d0942ef5e082688d429/hub/2022/08/12/c417b1b6-f63d-4870-ab2b-9bc07af73ba6/gettyimages-733474417.jpg?auto=webp&fit=crop&height=675&width=1200",
        alt: "Product 1",
        price: 100,
        link: "/",
    },
    {
        id: 2,
        title: "Dummy Title 2",
        img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/04/25130636/vedix.jpg",
        alt: "Product 2",
        price: 200,
        link: "/",
    },
    {
        id: 3,
        title: "Dummy Title 3",
        img: "https://www.forbesindia.com/media/images/2020/Sep/img_141255_ayurvedicproduct.jpg",
        alt: "Product 3",
        price: 300,
        link: "/",
    },
    {
        id: 4,
        title: "Dummy Title 4",
        img: "https://www.santulan.in/wp-content/uploads/2023/01/IMG_0461.jpg",
        alt: "Product 4",
        price: 400,
        link: "/",
    }
]





const categoriesCardData = [
    {
        id: 1, 
        title: "Rudraksh",
        subTitle: "Dummy Subtitle 1",
        img: "https://images.unsplash.com/photo-1661915606983-cc9759b99343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVkcmFrc2h8ZW58MHwwfDB8fHww",
        alt: "Rudraksh",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 2,
        title: "Offerings",
        subTitle: "Dummy Subtitle 2",
        img: "https://plus.unsplash.com/premium_photo-1675053533678-615611ecc0b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Offerings",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 3,
        title: "Natural Foods",
        subTitle: "Dummy Subtitle 3",
        img: "https://images.unsplash.com/photo-1495298975657-492a1d068595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5hdHVyYWwlMjBGb29kc3xlbnwwfDB8MHx8fDA%3D",
        alt: "Natural Foods",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 4,
        title: "Healthy and Immunity",
        subTitle: "Dummy Subtitle 4",
        img: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Healthy and Immunity",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 5,
        title: "Dummy Title 5",
        subTitle: "Dummy Subtitle 5",
        img: "https://images.unsplash.com/photo-1620862657760-72a639a2daef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dummy Title 5",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 6,
        title: "Dummy Title 6",
        subTitle: "Dummy Subtitle 6",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dummy Title 6",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 7,
        title: "Dummy Title 7",
        subTitle: "Dummy Subtitle 7",
        img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dummy Title 7",
        link: "/",
        height: "30em",
        width: "30em"
    },
    {
        id: 8,
        title: "Dummy Title 8",
        subTitle: "Dummy Subtitle 8",
        img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dummy Title 8",
        link: "/",
        height: "30em",
        width: "30em"
    }
]



export {CarouselData, ProductCardSliderData, newArrivalCards, categoriesCardData};