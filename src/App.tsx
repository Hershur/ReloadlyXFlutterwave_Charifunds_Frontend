import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import FoundationPage from './components/pages/FoundationPage';
import LandingPage from './components/pages/LandingPage';
import MakeDonationPage from './components/pages/MakeDonationPage';
import DonationProvider  from './contexts/DonationProvider';


function App() {
  // const [donation, setDonation] = useState(defaultDonation);

  return (
    <div className="App">
      <DonationProvider>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/"  component={GameStartPage} /> */}
          
            <Route exact path="/" >
              <LandingPage />
            </Route>

            <Route exact path="/donate" >
              <MakeDonationPage />
            </Route>

            <Route exact path="/foundation" >
              <FoundationPage />
            </Route>

          </Switch>
        </BrowserRouter>
      </DonationProvider>
    </div>
  );
}

export default App;
