import React, { useEffect } from 'react';

function Chart() {
    useEffect(() => {
        new window.TradingView.widget({
            symbol: 'BINANCE:BTCUSDT',
            interval: '1D',
            container_id: 'tv_chart_container',
            library_path: 'https://s3.tradingview.com/tv.js',
            autosize: true,
            timezone: 'Etc/UTC',
            theme: 'light',
            style: '1',
            locale: 'en',
            overrides: {
                // Các cài đặt khác ở đây
            },
        });
    }, []);

    return <div id="tv_chart_container" style={{ height: '100%' }}></div>;
}

export default Chart;
