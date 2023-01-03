import { Box, Paper, Grid, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CardItem({ coin }) {

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                width: 550,
                height: 260,
            },
        }}>
            <Box
                style={{ backgroundColor: coin.color }}>
                <Box sx={{margin:"5% 0 0 5%"}}>
                    <LineChart width={320} height={220} data={coin?.sparkline.map(Number)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis dataKey={(v) => v} tickCount={7} domain={['dataMin', 'dataMax']}/>
                        <XAxis dataKey={coin.sparkline}  />
                        <Line type="monotone" dataKey={v => v} stroke="#8884d8" />
                    </LineChart>
                </Box>
                <Box>
                    <Typography>{coin.name}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
