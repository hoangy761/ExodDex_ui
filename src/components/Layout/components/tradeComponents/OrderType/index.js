import { useState } from 'react';

function OrderType() {
    const [orderType, setOrderType] = useState('MarketOrder');
    const onChangeType = (e) => {
        setOrderType(e);
    };
    return (
        <div className="row">
            <div className="col-6">
                <label>Order Type</label>
                <select className="form-select" value={orderType} onChange={(e) => onChangeType(e.target.value)}>
                    <option value="MarketOrder">Market Order</option>
                    <option value="LimitOrder">Limit Order</option>
                </select>
            </div>
            <div className="col-6">
                <label>Price</label>
                {orderType === 'MarketOrder' ? (
                    <input
                        className="form-control custom-input "
                        style={{ height: '2.3rem' }}
                        value="Market Price"
                        disabled
                    />
                ) : (
                    <input
                        className="form-control custom-input "
                        style={{ height: '2.3rem' }}
                        value="price BTC get Oracle"
                    />
                )}
            </div>
        </div>
    );
}

export default OrderType;
