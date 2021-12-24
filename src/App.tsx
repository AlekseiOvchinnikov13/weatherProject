import React from 'react';
import './styles/App.scss';
import Container from "./components/container";
import store from "./store/store";
import {Provider} from "mobx-react";
// @ts-ignore
import bgImage from "./img/forest.jpg";

function App() {
    const style = {backgroundImage: `url(${bgImage})`}

    return (
        <Provider store={store}>
            <div className="App"
                 style={style}
            >
                <Container/>
            </div>
        </Provider>
    );
}

export default App;
