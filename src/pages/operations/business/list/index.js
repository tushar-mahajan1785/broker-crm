import { useState } from 'react'

import { useRouter } from 'next/router'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const Leads = () => {
  const router = useRouter()

  const data = [
    {
      color: 'info',
      title: 'In Progress',
      stats: '10',
      icon: 'tabler:user-pin'
    },
    {
      color: 'success',
      stats: '30',
      title: 'Won',
      icon: 'tabler:user-pin'
    },
    {
      color: 'error',
      stats: '12',
      title: 'Lost',
      icon: 'tabler:user-pin'
    }
  ]

  const columns = [
    {
      flex: 0.25,
      field: 'name',
      headerName: 'User'
    },
    {
      flex: 0.25,
      field: 'company',
      headerName: 'Company'
    },
    {
      flex: 0.25,
      field: 'mobile',
      headerName: 'Mobile'
    },
    {
      flex: 0.25,
      field: 'email',
      headerName: 'Email'
    },
    {
      flex: 0.1,
      minWidth: 140,
      sortable: false,
      field: 'actions',
      renderCell: params => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <OptionsMenu
              menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
              iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
              options={[
                {
                  text: 'Edit',
                  icon: <Icon icon='tabler:edit' fontSize={20} />,
                  sx: { justifyContent: 'space-between', marginLeft: 'auto' },
                  onClick: () => {}
                },
                {
                  text: 'Inactive',
                  icon: <Icon icon='tabler:x' fontSize={20} />,
                  sx: { justifyContent: 'space-between', marginLeft: 'auto' }
                }
              ]}
            />
          </Box>
        )
      }
    }
  ]

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={'Business'} subheader={'All Business'} />
          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              columns={columns}
              disableRowSelectionOnClick
              rows={[
                {
                  id: 1,
                  name: 'Customer Name',
                  company: 'Yotz PVT LTD',
                  mobile: '(479) 232-9151',
                  email: 'gslixby0@abc.net.au'
                }
              ]}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

Leads.acl = {
  action: 'read',
  subject: 'component'
}

export default Leads
