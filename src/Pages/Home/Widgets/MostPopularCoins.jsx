import React, { useEffect, useRef, memo } from 'react';

function MostPopularCoins() {

    const container = useRef();


    function WidgetConfigurations() {

        const SymbolsAndStyle = `{
        "symbols": [
          "BTCUSD",
          "ETHUSD",
          "BNBUSD",
          "CRYPTO:SOLUSD|1D|USD",
          "BINANCE:ADAUSD|1D|USD",
          "CRYPTO:AVAXUSD|1D|USD",
          "CRYPTO:TONUSD|1D|USD",
          "BINANCE:TRXUSD|1D|USD",
          "KRAKEN:BCHUSD|1D|USD",
          "BINANCE:NEARUSD|1D|USD"
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "500",
        "locale": "pt-br",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "Andale Mono, monospace",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-only",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0
      }`;

        const DateRange = `{
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

        const FullJson = SymbolsAndStyle.slice(0, -1) + ',' + DateRange.substring(1); //JUNTANDO OS DOIS OBJETOS JSON

        const script = document.createElement("script");

        //FAZENDO LIGAÇÃO ASSÍCRONA COM O LINK EXTERNO
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;

        //INTEGRANDO AS CONFIGURAÇÕES À PAGINA HTML
        script.innerHTML = FullJson

        container.current.appendChild(script);


    }

    useEffect(
        () => {

            WidgetConfigurations()

        }, []
    );

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"><span className="blue-text">.</span></div>
        </div>
    );
}

export default memo(MostPopularCoins);
