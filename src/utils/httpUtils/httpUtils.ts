import axios from 'axios';
import { API_KEY } from '../../constants/alpha-vantage';


//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=LT.BSE&outputsize=full
export const fetchStockDetails = (url: string) => {
    axios.get(url + '&apikey='+API_KEY)
    .then((result: any) => {
        return result;
    });
}