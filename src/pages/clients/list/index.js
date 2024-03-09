import { useState } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'

import Link from 'next/link'

import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Clients = () => {

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const data = [
    {
        color: 'info',
        title: 'Corporate Clients',
        stats: '6800',
        icon: 'tabler:user-heart'
    },
    {
        color: 'success',
        stats: '5200',
        title: 'Retail Clients',
        icon: 'tabler:user-heart'
    }
  ]

  const columns = [
    {
      flex: 0.25,
      field: 'name',
      headerName: 'User',
    },
    {
      flex: 0.25,
      field: 'company',
      headerName: 'Company',
    },
    {
      flex: 0.25,
      field: 'mobile',
      headerName: 'Mobile',
    },
    {
      flex: 0.25,
      field: 'email',
      headerName: 'Email',
    }
  ]

  const renderSummary = () => {
    return data.map((sale, index) => (
      <Grid item xs={6} md={2} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 48, height: 48 }}>
            <Icon icon={sale.icon} fontSize='1.5rem' />
          </CustomAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5'>{sale.stats}</Typography>
            <Typography variant='body2'>{sale.title}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
            <CardHeader title={
                <Grid container spacing={6}>
                    {renderSummary()}
                </Grid>
                }
                action={
                <>
                <Button component={Link} variant='contained' href='/users/add'>
                    Create Client
                </Button>
                </>
            }/>
            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid 
                columns={columns} 
                rows={[
                {
                    id: 1,
                    name: 'Galen Slixby',
                    company: 'Yotz PVT LTD',
                    mobile: '(479) 232-9151',
                    email: 'gslixby0@abc.net.au'
                }]} 
                />
            </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

Clients.acl = {
  action: 'read',
  subject: 'component'
} 

export default Clients