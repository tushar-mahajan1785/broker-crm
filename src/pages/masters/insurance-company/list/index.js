import Grid from '@mui/material/Grid'

const InsuranceCompany = () => {
  return <Grid container>Insurance Company</Grid>
}

InsuranceCompany.acl = {
  action: 'read',
  subject: 'component'
}

export default InsuranceCompany
