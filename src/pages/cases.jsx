import { Container } from '@mui/material';
import { MarkdownRenderer } from '../components/markdownRenderer';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';

const Page = () => (
  <Container sx={{
	  marginTop: '-32px'
  }}>
	  cases
  </Container>
);

Page.getLayout = (page) => (
  <DashboardLayout>
	  {page}
  </DashboardLayout>
);

export default Page;