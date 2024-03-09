import { useState } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Link from 'next/link'

const Users = () => {

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

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

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={"Users"} subheader={"All Users"} action={
            <>
              <Button component={Link} variant='contained' href='/users/add'>
                Create User
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

Users.acl = {
  action: 'read',
  subject: 'component'
} 

export default Users