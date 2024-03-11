import Grid from '@mui/material/Grid'

const LeadSource = () => {
  return <Grid container>Lead Source</Grid>
}

LeadSource.acl = {
  action: 'read',
  subject: 'component'
}

export default LeadSource
