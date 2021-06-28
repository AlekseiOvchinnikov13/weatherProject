import React from 'react';
import './App.scss';
import Container from "./components/container";
import store from "./store/store";
import {Provider} from "mobx-react";
import {Helmet} from "react-helmet";

function App() {
    return (
        <Provider store={store}>
            <Helmet>
                <title>Погода</title>
            </Helmet>
            <div className="App">
                <Container/>
            </div>
        </Provider>
    );
}

export default App;
