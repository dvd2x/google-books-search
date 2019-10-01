import React from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      books: []
    };
    this.booksChanged = this.booksChanged.bind(this);
    this.qChanged = this.qChanged.bind(this);
  }

  booksChanged(books) {
    this.setState({
      books
    });
  }

  qChanged(q) {
    this.setState({
      q
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          onChangeQ={this.qChanged}
          onChangeBooks={this.booksChanged}
          q={this.state.q}
        />
        <div className="main-content">
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
