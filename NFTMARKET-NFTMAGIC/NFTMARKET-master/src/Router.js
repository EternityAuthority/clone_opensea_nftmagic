import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import Layout from "./components/Layout";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const Home = lazy(() => import("./pages/index"));
const Explore = lazy(() => import("./pages/explore"));
const Collection = lazy(() => import("./pages/collection"));
const Details = lazy(() => import("./pages/details"));
const Ranking = lazy(() => import("./pages/ranking"));
const Activity = lazy(() => import("./pages/activity"));
const Wallet = lazy(() => import("./pages/wallet"));
const Create = lazy(() => import("./pages/create"));
const Profile = lazy(() => import("./pages/profile"));
const CreateOption = lazy(() => import("./pages/createoption"));
const CreateSelf = lazy(() => import("./pages/createself"));
const Gift = lazy(() => import("./pages/gift"));
const Support = lazy(() => import("./pages/support"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Affiliate = lazy(() => import("./pages/affiliate"));

const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
});

const AppRouter = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Layout>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/explore" exact component={Explore} />
                        <Route path="/collection" exact component={Collection} />
                        <Route path="/details" exact component={Details} />
                        <Route path="/ranking" exact component={Ranking} />
                        <Route path="/activity" exact component={Activity} />
                        <Route path="/wallet" exact component={Wallet} />
                        <Route path="/create" exact component={Create} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/createoption" exact component={CreateOption} />
                        <Route path="/createself" exact component={CreateSelf} />
                        <Route path="/gift" exact component={Gift} />
                        <Route path="/support" exact component={Support} />
                        <Route path="/contactus" exact component={Contact} />
                        <Route path="/aboutus" exact component={About} />
                        <Route path="/affiliate" exact component={Affiliate} />
                    </Layout>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default AppRouter;