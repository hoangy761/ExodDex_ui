function OrderType() {
    return (
        <div className="row">
            <div className="col-6">
                <label>Order Type</label>
                <select className="form-select" aria-label="Default select example" defaultValue="1">
                    <option value="1">Market Order</option>
                    <option value="2">Limit Order</option>
                </select>
            </div>
            <div className="col-6">
                <label>Price</label>
                <input
                    className="form-control custom-input "
                    style={{ height: '2.3rem' }}
                    defaultValue="Market Price"
                    disabled
                />
            </div>
        </div>
    );
}

export default OrderType;
