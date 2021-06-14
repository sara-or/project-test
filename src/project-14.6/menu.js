import React from 'react';
import MenuProject from './menuProject';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Try from './try';
export default function Menu(props) {
    return (
        <>
            <div>
                <Router>
                    <MenuProject />
                    <Switch>
                        <Route path="/page1">
                            <Page1 />
                        </Route>
                        <Route path="/page2">
                            <Page2 />
                        </Route>
                        <Route path="/page3">
                            <Page3 />
                        </Route>
                        <Route path="/try">
                            <Try />
                        </Route>
                       
                    </Switch>

                </Router>
            </div>
        </>
    )
}
