import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "print-type": "all",
      filter: "ebooks"
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  changeFilter(e) {
    const filter = e.target.value;
    this.setState({
      filter
    });
  }

  changePrintType(e) {
    const printType = e.target.value();
    this.setState({
      "print-type": printType
    });
  }

  handleSearch(q) {
    console.log(this.state);
    const key = "AIzaSyAJ448LHnJ0N6XxzOyIRfhJFveQzwHU_Ms";
    const baseurl = "https://www.googleapis.com/books/v1/volumes";
    const url = `${baseurl}?q=${encodeURIComponent(q)}&key=${key}&print-type=${
      this.state["print-type"]
    }&filter=${this.state.filter}`;
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.props.onChangeBooks(data.items);
        console.log(data.items);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <section>
        <div className="Search">
          <form>
            <div className="search_input">
              <label htmlFor="search">Search: </label>
              <input
                id="search"
                onChange={e => {
                  this.props.onChangeQ(e.target.value);
                }}
                type="text"
                placeholder="Book Search"
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  this.handleSearch(this.props.q);
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="Search-type">
          <ul>
            <li>
              <form className="print-type">
                <label htmlFor="print">Print Type: </label>
                <select name="print-type">
                  <option value="all">All</option>
                  <option value="books">Books</option>
                  <option value="magazines">Magazines</option>
                </select>
              </form>
            </li>
            <li>
              <form className="book-type">
                <label htmlFor="print">Book Type: </label>
                <select name="filter">
                  <option value="ebooks">All Google eBooks</option>
                  <option value="free-ebooks">
                    Google eBook with full volume text viewability
                  </option>
                  <option value="full">
                    Public can view entire volume text
                  </option>
                  <option value="paid-ebooks">
                    Google eBook with a price.
                  </option>
                  <option value="partial">
                    Public able to see parts of text.
                  </option>
                </select>
              </form>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Search;
