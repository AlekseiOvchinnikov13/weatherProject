import React from 'react';
import './App.scss';
import Container from "./components/container";
import store from "./store/store";
import {Provider} from "mobx-react";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Container/>
                </header>
            </div>
        </Provider>
    );
}

export default App;
