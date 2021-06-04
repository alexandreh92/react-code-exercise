import ReduxToastr from 'react-redux-toastr';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import history from '~/services/history';
import { useStoreTheme } from '~/hooks';
import GlobalStyles from '~/styles/GlobalStyle';
import Routes from '~/routes';

function App() {
  const theme = useStoreTheme();

  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export default App;
