import React from "react";

class SearchNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      klass: "dropdown-content",
      klass2: "dropdown-btn",
      searchValue: "",
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.search = this.search.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.logout();
  }

  handleBtn(e) {
    e.preventDefault();
    if (
      this.state.klass === "dropdown-content" &&
      this.state.klass2 === "dropdown-btn"
    ) {
      this.setState({ klass: "show", klass2: "dropdown-btn2" });
    } else {
      this.setState({ klass: "dropdown-content", klass2: "dropdown-btn" });
    }
  }

  search(keyword) {
    const word = "all" + "-" + keyword;
    this.props.searchBooks(word);
    this.setState({ searchValue: "" });
  }

  render() {
    const user = this.props.user;

    return (
      <div className={"home-nav"}>
        <div className={"home-title"}>
          <a href="/#">
            <img src={window.title} width="197" height="43" />
          </a>
        </div>

        <div className={"home-books"}>
          <a href="/#" className={"home-books-a"}>
            Home
          </a>
          <a href="#/bookshelves" className={"home-books-a"}>
            My Books
          </a>
          <a href="#/search" className={"home-books-a"}>
            Browse
          </a>
        </div>

        <form
          className={"example"}
          onSubmit={(e) => {
            e.preventDefault();
            this.search(this.state.searchValue);
          }}
        >
          <input
            type="text"
            placeholder="Search books"
            value={this.state.searchValue}
            onChange={(event) => {
              this.setState({ searchValue: event.target.value });
            }}
          />
          <button type="submit">
            <i className={"fa fa-search"}> </i>
          </button>
        </form>

        <div>
          {user ? (
            <div className={"dropdown"}>
              <img
                src={window.profile}
                onClick={this.handleBtn}
                className={this.state.klass2}
              />
              <div className={this.state.klass}>
                <ul>
                  <li className={"nm"}>{user.name}</li>

                  <li className={"nn"}>
                    <a href="https://github.com/Emina288" className={"nn"}>
                      GitHub
                    </a>
                  </li>
                  <li className={"nn"}>
                    <a
                      href="https://www.linkedin.com/in/emina-ramovic-858835187/"
                      className={"nn"}
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className={"nn"}>
                    <a href="https://angel.co/u/emina-ramovic" className={"nn"}>
                      AngelList
                    </a>
                  </li>
                  <li className={"nn"}>
                    <a href="mailto:eminaramovic@hotmail.com" className={"nn"}>
                      Email me!{" "}
                    </a>
                  </li>
                  <li className={"nn"}>
                    <a href="#" onClick={this.handleClick} className={"nn"}>
                      Sign out!{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <div className={"home-books"}>
                <a href="#/login" className={"home-books-a"}>
                  Signin
                </a>
                <a href="#/signup" className={"home-books-a"}>
                  Join
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchNav;
