import { tokenVerifieds } from '~/helper/tokenVerifieds';

function InputSwap() {
    return (
        <div className="row bg-secondary rounded-3  text-white m-0">
            <p className="col-12 m-0">Pay: 0 USD</p>
            <div className="col-md-8 p-0">
                <input
                    className="form-control  bg-secondary border-0  text-white"
                    style={{ height: '2.3rem' }}
                    defaultValue="0"
                />
            </div>
            <div className="col-md-4 p-0">
                <select className="form-select  bg-secondary border-0  text-white" defaultValue="1">
                    {Object.keys(tokenVerifieds).map((tokenSymbol) => (
                        <option key={tokenSymbol} value={tokenSymbol}>
                            {tokenSymbol}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputSwap;
