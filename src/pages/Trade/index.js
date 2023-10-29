import Chart from '~/components/Layout/components/tradeComponents/Chart';
import SwapComponent from '~/components/Layout/components/tradeComponents/SwapComponent';
import TokenTransactionHistory from '~/components/Layout/components/tradeComponents/TokenTransactionHistory';

function Trade() {
    return (
        <div className="row m-2 h-100">
            <div className="col-md-9">
                <div style={{ height: '450px' }}>
                    <Chart tokenSymbol="LINK" />
                </div>
                <div>
                    <TokenTransactionHistory />
                </div>
            </div>
            <div className="col-md-3">
                <SwapComponent />
            </div>
        </div>
    );
}

export default Trade;
