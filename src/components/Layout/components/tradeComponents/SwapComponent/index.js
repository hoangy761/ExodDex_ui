import InputSwap from '../InputSwap';
import OrderType from '../OrderType';
import SelectPool from '../SelectPool';
import SelectTrade from '../SelectTrade';

function SwapComponent() {
    return (
        <div>
            <SelectPool />
            <hr />
            <SelectTrade />
            <OrderType />
            <br></br>
            {/* token Swap */}
            <InputSwap />
            <div className="text-center m-0">
                <p className="btn btn-success  m-2">||</p>
            </div>
            {/* token Receive */}
            <InputSwap />
            <div className="row">
                <div className="col-md-2">Fees</div>
                <div className="col-md-10 text-end">0.42%(0.00001ETH: $1.00)</div>
            </div>
            <div className="text-center">
                <span className="btn btn-success w-50"> Swap </span>
            </div>
        </div>
    );
}

export default SwapComponent;
