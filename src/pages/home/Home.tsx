import { Toolbar } from '../../components/toolbar/Toolbar';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StockChartCard } from '../../components/stock-chart-card/StockChartCard';
import { APIS, API_KEY } from '../../constants/alpha-vantage';
import './Home.css';

export const Home = () => {

    const [stockDetails, setStockDetails] = useState({});
    const [selectedStock, setSelectedStock] = useState('LT.BSE');

    const onSelectedStockChange = (selectedStock: string) => {
        setSelectedStock(selectedStock);
        setStockDetails({});
    }

    useEffect(() => {
        axios.get(APIS.BSE_STOCK_DAILY_FULL + '&apikey='+API_KEY + '&symbol=' + selectedStock)
        .then((result: any) => {
            setStockDetails(result.data);
        });
    }, [selectedStock]);

    return (
        <Box>
            <Toolbar onSelectedStockChange={onSelectedStockChange} selectedStock={selectedStock} />
            <StockChartCard chartData={stockDetails} />
        </Box>
    )
}