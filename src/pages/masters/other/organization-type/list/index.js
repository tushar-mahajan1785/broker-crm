import Grid from '@mui/material/Grid'

const OrganizationType = () => {
  return <Grid container>Organization Type</Grid>
}

OrganizationType.acl = {
  action: 'read',
  subject: 'component'
}

export default OrganizationType
