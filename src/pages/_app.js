import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const queryClient = new QueryClient()

const App = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	const getLayout = Component.getLayout ?? ((page) => page);

	const theme = createTheme();

	return (
	  <CacheProvider value={emotionCache}>
		<Head>
			<title>
				Label AI
			</title>
			<meta
			  name="viewport"
			  content="initial-scale=1, width=device-width"
			/>
		</Head>
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<QueryClientProvider client={queryClient}>
					{getLayout(<Component {...pageProps} />)}
				</QueryClientProvider>
			</ThemeProvider>
		</LocalizationProvider>
	</CacheProvider>
	);
};

export default App;
