import React, { Component } from 'react'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

export class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </>
    )
  }
}

export default App