import React from "react";
import Card from "../Card/Card";
import "./Menu.css";

type displayMode = 'grid' | 'list';

interface MenuProps {
    defaultDisplay: displayMode;
}

interface MenuState {
    display: displayMode;
}

class Menu extends React.Component<MenuProps, MenuState> {

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            display: props.defaultDisplay
        }
    }

    changeDisplay = (mode: displayMode) => {
        // this.setState((state, props) => {
        //     display: mode
        // })

        this.setState({
            ...this.state,
            display: mode
        })
    }

    render() {
        return (
            <>
                <h1>Order Delivery or Takeaway</h1>

                <div className="d-flex">
                    <button onClick={(e) => this.changeDisplay('list')} className="btn btn-default">
                        <i className="bi-list-ul"></i>
                    </button>
                    <button onClick={(e) => this.changeDisplay('grid')} className="btn btn-default">
                        <i className="bi-grid-3x3-gap-fill"></i>
                    </button>
                </div>

                <div className={this.state.display}>
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
}

export default Menu;