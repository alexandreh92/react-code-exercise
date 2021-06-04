import ReduxToastr from 'react-redux-toastr';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { ApplicationState } from './@types';
// import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import history from '~/services/history';

function App() {
  // const { theme } = useSelector((state: ApplicationState) => state);

  return (
    // <ThemeProvider theme={theme}>
    <ConnectedRouter history={history}>
      {/* <GlobalStyles /> */}
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
    // </ThemeProvider>
  );
}

export default App;
