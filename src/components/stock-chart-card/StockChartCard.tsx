import { Box, Paper } from '@mui/material';
import React from 'react';
import { Chart } from '../chart/Chart';
import { IStockChartCard } from './models';



export const StockChartCard = (props: IStockChartCard) => {
    
    return(
        <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '30%',
        },
      }}
    >
            <Paper elevation={3}>
                <Chart chartData={props.chartData} />
            </Paper>
        </Box>
    )
}