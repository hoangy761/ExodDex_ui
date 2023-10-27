import Chart from '~/components/Layout/components/tradeComponents/Chart';
import SelectPool from '~/components/Layout/components/tradeComponents/SelectPool';
import TokenTransactionHistory from '~/components/Layout/components/tradeComponents/TokenTransactionHistory';
import TransactionUniver from '~/components/Layout/components/tradeComponents/TransactionUniver';

function Trade() {
    return (
        <div className="row m-2 h-100">
            <div className="col-md-9">
                <div style={{ height: '450px' }}>
                    <Chart />
                </div>
                <div>
                    {/* <TransactionUniver /> */}
                    <TokenTransactionHistory />
                </div>
            </div>
            <div className="col-md-3">
                <SelectPool />
            </div>
        </div>
    );
}

export default Trade;
