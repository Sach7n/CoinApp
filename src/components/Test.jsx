import React from 'react'
import { useGetTopCoinsQuery } from "../redux/services/CoinRanking_core"
import CardItem from './general/card/CardItem'
import { Box, Paper, Grid } from '@mui/material';

export default function Test() {
  const { data, isFetching, error } = useGetTopCoinsQuery(2)

  isFetching ? console.log("fetching") : console.log(data.data.coins[0])
  return (
    <div>
      {isFetching
        ? <p>is fetching</p>
        :
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {data.data.coins.map(item =>
            <Grid item xs={2} sm={4} md={4}>
              <CardItem coin={item} />
            </Grid>
          )}
        </Grid>

      }
    </div>
  )
}
