import './App.css';
import Card from './Card/Card';
// import Counter from './Counter/Counter';
import Header from './Header/Header';

function App() {
    return (
        // <Counter initCounter={50} />
        <>
            <Header />

            <div className="d-flex">

                <Card name="Fried Chicken"
                    description="fried chicken with chips"
                    category="Chicken"
                    price={15.99}
                    rating={5}
                    imageUrl="https://cdn.pixabay.com/photo/2016/04/25/07/32/chicken-cutlet-1351331__340.jpg"
                />

                <Card name="Greek Salad"
                    description="salad with olives"
                    category="vegeterian"
                    price={10.55}
                    rating={5}
                    imageUrl="https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg" />

                <Card name="Pad Tai"
                    description="very good"
                    category="asian"
                    price={22.85}
                    rating={5}
                    imageUrl="https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg" />
            </div>
        </>
    );
}

export default App;
