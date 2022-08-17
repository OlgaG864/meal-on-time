import { useLocation } from "react-router-dom";
import { CardType } from "../Card/Card";
import Title from "../Title/Title";

interface LocationState {
    state: CardType;
}

function Order() {
    const location = useLocation();
    const locationState = location as LocationState;
    const order = locationState.state;

    return (
        <Title text={`Order: ${order.name}`} />
    );
}

export default Order;