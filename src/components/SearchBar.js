import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onImSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui search">
            <div className="ui icon input">
              <input
                //The func pass without ()
                onChange={e => this.setState({ term: e.target.value })}
                class="prompt"
                type="text"
                value={this.state.term}
                placeholder="Search your pic..."
              />
              <i className="search icon" />
            </div>
            <div className="results" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
