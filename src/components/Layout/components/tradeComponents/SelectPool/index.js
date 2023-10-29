import InputSwap from '../InputSwap';
import OrderType from '../OrderType';
import SelectTrade from '../SelectTrade';

function SelectPool() {
    return (
        <div className="btn-group w-100">
            <button type="button" className="btn btn-primary border-0">
                Pool ELQ
            </button>
            <button type="button" className="btn  btn-secondary border-0">
                Pool Univer
            </button>
        </div>
    );
}

export default SelectPool;
