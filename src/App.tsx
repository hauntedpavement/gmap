import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//import packages arent (local, relative paths, looks in node_modules folder)
import { IonApp, IonSplitPane, IonPage } from '@ionic/react'

// app imports
import Menu from './components/Menu/Menu';

//css imports
import './App.css';

//ionic imports
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Tabs from './pages/Tabs/Tabs';

class App extends Component<any, any> {
  render() {
    return (
      <Router>
        <div id="App">
          <IonApp>
            <IonSplitPane contentId="main">
              <Menu />
              <IonPage id="main">
                <Route path="/" component={Tabs} />
              </IonPage>
            </IonSplitPane>
          </IonApp>
        </div>
      </Router>

    );
  }
}

export default App;
