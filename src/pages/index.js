import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MarkdownRenderer } from '../components/markdownRenderer';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then(mod => mod.Prism), { ssr: false });
const darcula = dynamic(() => import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => mod.darcula), { ssr: false });

const markdown = `
# RAG pipeline ruStore

Модуль состоит из трёх частей
- Парсер сайта https://github.com/hackaton-labelAI/chat-bot
- Сохранённая информация https://github.com/hackaton-labelAI/cc-data
- Поиск https://github.com/hackaton-labelAI/cc-back
### Для проверки готового решения** Регистрируем на платформе https://caila.io/

перейдите на https://caila.io/app/just-ai/mlp-gpt-chat-app.
Далее нам надо добавить наш сервис ![img.png](https://github.com/hackaton-labelAI/cc-back/raw/main/img.png)
Далее нажимаем на кнопку выбора сервиса и переходим в режим разработчика
![img_1.png](https://github.com/hackaton-labelAI/cc-back/raw/main/img_1.png)

Далее вводим конфиги модели 
![img_2.png](https://github.com/hackaton-labelAI/cc-back/raw/main/img_2.png)

\`\`{
"account": "1000097868",
"service": "RAG"
}\`\`
\`\`{
"debug": true,
"mode": "combined"
}\`\`

Нажимаем сохранить.

**Теперь вы можете пользоватся чатом** и проверять его работоспособность


**Для комфортной проверки решения** скачать модули Сохранённая информация и Поиск. 
Положить их в одну папку. Скачать зависимости командой 

\`\`\`mvn install\`\`\`

Запустить модуль индексацию документации, вызвать функцию main в файле src/main/kotlin/cc/services/searches/LuceneIndexService.kt

Запустить сервис

\`\`\`mvn spring-boot:start\`\`\``;

const Page = () => (
  <Container sx={{
	marginTop: '-32px'
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