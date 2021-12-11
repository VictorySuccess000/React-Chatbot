import React, { Suspense } from "react";
// import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import BotBuilder from "./pages/BotBuilder/BotBuilder";
import TargetAudience11 from "./pages/TargetAudience/TargetAudience";
const Agents = React.lazy(() => import("./pages/agents"));
const CodeEmbed = React.lazy(() => import("./pages/codeembeded"));
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Redirect exact from={`/`} to={`/agents`} />
            <Route
              path={`/agents`}
              render={(props) => (
                <MainLayout>
                  <Agents {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/codeembeded`}
              render={(props) => (
                <MainLayout>
                  <CodeEmbed {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/botbuilder`}
              render={(props) => (
                <MainLayout>
                  <BotBuilder {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/targetaudience11`}
              render={(props) => (
                <MainLayout>
                  <TargetAudience11 {...props} />
                </MainLayout>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
export default App;
