import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardType } from "../Card/Card";
import Title from "../Title/Title";

interface LocationState {
    state: CardType;
}

type delivery = 'takeaway' | 'delivery';
type payment = 'cc' | 'cash';

function Order() {
    const location = useLocation();
    const locationState = location as LocationState;
    const order = locationState.state;

    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [deliveryMethod, setDeliveryMethod] = useState<delivery>('takeaway');
    const [paymentMethod, setPaymentMethod] = useState<payment>('cc');

    function updateDeliveryPrice(): number {
        return deliveryMethod === "delivery" ? 2 : 0;
    }

    function calcTotal(): number {
        return order.price + updateDeliveryPrice();
    }

    return (
        <>
            <Title text={`Order: ${order.name}`}>
                <small className="text-muted d-block">
                    <span>name of the restaurant</span>
                </small>
            </Title>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div>{order.description}</div>

                        <div className="mt-3">
                            <label>Comments</label>
                            <div>
                                <textarea cols={30} rows={4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={order.imageUrl} alt={order.name} className="img-fluid" />
                        <div className="d-flex justify-content-between">
                            <div>Rating: {order.rating}</div>
                            <div>{order.category}</div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
                            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Address" />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="col">
                            <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value as delivery)} className="form-select">
                                <option value="takeaway">Takeaway</option>
                                <option value="delivery">Delivery</option>
                            </select>

                            <label className="form-label">Payment Method:</label>
                            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value as payment)} className="form-select">
                                <option value="cc">Credit Card</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Price:</label>
                                </div>
                                <div className="col-8">
                                    {order.price}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Delivery:</label>
                                </div>
                                <div className="col-8">
                                    {updateDeliveryPrice()}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Total:</label>
                                </div>
                                <div className="col-8">
                                    {calcTotal()}
                                </div>
                            </div>

                            <button className="btn btn-primary btn-lg">Pay Now</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Order;