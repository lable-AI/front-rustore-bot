import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MarkdownRenderer } from '../components/markdownRenderer';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then(mod => mod.Prism), { ssr: false });
const darcula = dynamic(() => import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => mod.darcula), { ssr: false });

const markdown = `
# Заголовок 1
## Заголовок 2

Это пример **жирного текста** и _курсива_.

- Список пункт 1
- Список пункт 2

[Ссылка](https://example.com)

\`\`\`javascript
console.log('Hello, world!');
console.log('Hello, world!');
  console.log('Hello, world!');
    console.log('Hello, world!');
\`\`\`

\`\`\`javascript
console.log('Hello, world!');
console.log('Hello, world!');
  console.log('Hello, world!');
    console.log('Hello, world!');
\`\`\`
dasd
fsdfds
\`\`\`javascript
console.log('Hello, world!');
console.log('Hello, world!');
  console.log('Hello, world!');
    console.log('Hello, world!');
\`\`\`

![alt text](https://img.freepik.com/vektoren-kostenlos/bunte-vogelillustrationssteigung_343694-1741.jpg?w=826&t=st=1720015007~exp=1720015607~hmac=031b64e65e269f53e4316e56f572531599e9c1a191de9089233db9ac97069d65 "Title")
`;

const Page = () => (
  <Container sx={{
	  padding: '16px',
  }}>
	  <MarkdownRenderer>
		  {markdown}
	  </MarkdownRenderer>
  </Container>
);

Page.getLayout = (page) => (
  <DashboardLayout>
	  {page}
  </DashboardLayout>
);

export default Page;