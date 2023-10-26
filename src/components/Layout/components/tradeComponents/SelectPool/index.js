import OrderType from '../OrderType';
import SelectTrade from '../SelectTrade';

function SelectPool() {
    return (
        <div>
            <div class="btn-group w-100">
                <button type="button" className="btn btn-secondary border-0">
                    Pool ELQ
                </button>
                <button type="button" className="btn btn-primary border-0">
                    Pool Univer
                </button>
            </div>
            <hr />
            <SelectTrade />
            <OrderType />
            <br></br>
            {/* token Swap */}
            <div className="row bg-secondary rounded-3  text-white">
                <p className="col-12 m-0">Pay: 0 USD</p>
                <div className="col-md-8 p-0">
                    <input
                        className="form-control  bg-secondary border-0  text-white"
                        style={{ height: '2.3rem' }}
                        value="0"
                    />
                </div>
                <div className="col-md-4 p-0">
                    <select className="form-select  bg-secondary border-0  text-white">
                        <option value="1" selected>
                            BTC
                        </option>
                        <option value="2">ETH</option>
                        <option value="3">WETH</option>
                        <option value="4">USDC</option>
                        <option value="5">USDT</option>
                        <option value="6">DAI</option>
                    </select>
                </div>
            </div>
            <div className="text-center m-0">
                <p className="btn btn-success  m-2">||</p>
            </div>
            {/* token Receive */}
            <div className="row bg-secondary rounded-3 text-white">
                <p className="col-12 m-0">Pay: 0 USD</p>
                <div className="col-md-8 p-0  text-white">
                    <input
                        className="form-control  bg-secondary border-0  text-white"
                        style={{ height: '2.3rem' }}
                        value="0"
                    />
                </div>
                <div className="col-md-4 p-0">
                    <select className="form-select  bg-secondary border-0  text-white">
                        <option value="1">BTC</option>
                        <option value="2">ETH</option>
                        <option value="3">WETH</option>
                        <option value="4" selected>
                            USDC
                        </option>
                        <option value="5">USDT</option>
                        <option value="6">DAI</option>
                    </select>
                </div>
            </div>

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

export default SelectPool;
