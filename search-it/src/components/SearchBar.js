import React from "react";

class SearchBar extends React.Component {
  state = { term: "", page: null };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ page: 1 });
    this.props.onSubmit(this.state.term, this.state.page);
  };

  addPage = event => {
    event.preventDefault();
    if (this.state.page !== null && this.state.page < 10) {
      this.props.onSubmit(this.state.term, this.state.page + 1);
      this.setState({ page: this.state.page + 1 });
    }
  };

  minusPage = event => {
    event.preventDefault();
    if (this.state.page !== null && this.state.page > 1) {
      this.props.onSubmit(this.state.term, this.state.page - 1);
      this.setState({ page: this.state.page - 1 });
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Type your key word and start a Search!</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <PrevButton buttonClick={this.minusPage} />
        <NextButton buttonClick={this.addPage} />
        <SearchButton buttonClick={this.onFormSubmit} />
      </div>
    );
  }
}

class NextButton extends React.Component {
  render() {
    return (
      <button
        className="mini ui right labeled icon button"
        style={{ marginTop: "10px" }}
        onClick={this.props.buttonClick}
      >
        <i className="right arrow icon" />
        Next Page
      </button>
    );
  }
}

class PrevButton extends React.Component {
  render() {
    return (
      <button
        className="mini ui left labeled icon button"
        style={{ marginTop: "10px" }}
        onClick={this.props.buttonClick}
      >
        <i className="left arrow icon" />
        Prev Page
      </button>
    );
  }
}

class SearchButton extends React.Component {
  render() {
    return (
      <button
        className="mini ui right floated green basic button"
        style={{ marginTop: "10px" }}
        onClick={this.props.buttonClick}
      >
        Search
      </button>
    );
  }
}

export default SearchBar;
