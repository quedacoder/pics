import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {

        // will stop the page from refreshing on submit
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" action="" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;