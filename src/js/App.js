import React, { Component } from "react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PageContainer from "./components/common/PageContainer";
import { fakeBackend } from "./helper/fakeBackend";

fakeBackend();

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
