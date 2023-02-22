import React from 'react';
import { Baseline, Dashboard } from '@monorepo/shell';
import { theme } from '@monorepo/shared';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './provider';

const CoreApp = React.lazy(() => import('./routes'));

function DefaultFallback({
  children,
  fallback
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <React.Suspense fallback={fallback || <Dashboard />}>
      {children}
    </React.Suspense>
  );
}

function Apps() {
  return (
    <Switch>
      <Route path="/">
        <DefaultFallback>
          <CoreApp />
        </DefaultFallback>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <>
      <Baseline />
      <Provider>
        <Helmet>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Helmet>
        <BrowserRouter>
          <Apps />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
