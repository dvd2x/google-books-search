import React, { Component } from "react";
//import Book from "./Book";
import bookImg from "./images/bookImg.svg";
//import Aux from "./Aux";
import "./App.css";

class Results extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book, index) => {
          let {
            title,
            description,
            authors,
            saleInfo,
            averageRating,
            imageLinks,
            infoLink
          } = book.volumeInfo;
          return (
            <div>
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
                rel="noopener"
              >
                <img
                  src={
                    undefined !== imageLinks
                      ? imageLinks.thumbnail
                      : { bookImg }
                  }
                  alt={`Pictured: The cover for
                the book ${title} ${authors} ${description} ${saleInfo} ${averageRating} .`}
                  className="bookCover"
                />
                <header className="bookTitle">{title}</header>
              </a>
              <div className="bookInfo">
                <p className="bookPrice">{saleInfo}</p>
                <p className="bookAuthors">{authors}</p>
                <p className="bookAverageRating">Rating: {averageRating}</p>
                <p className="bookDescription">{description}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Results;
