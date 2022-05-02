import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={3}>
      <Grid item xs={7} md={4}>
        <Card value={getValue(cases)} label="Total cases" color="#5d78ff" />
      </Grid>
      <Grid item xs={7} md={4}>
        <Card value={getValue(todayDeaths)} label="Deaths today" color="#070707" />
      </Grid>
      <Grid item xs={7} md={4}>
        <Card value={getValue(todayCases)} label="Cases today" color="#F7B829" />
      </Grid>
      <Grid item xs={7} md={4}>
        <Card value={getValue(deaths)} label="Total dead" color="#E95078" />
      </Grid>
      <Grid item xs={7} md={4}>
        <Card value={getValue(recovered)} label="Total recovered" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)