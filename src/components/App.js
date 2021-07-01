import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [], errorMessage: '' }
    
    // turn from method to arrow function
    onSearchSubmit = (term) => {

        //Set access key to api in header
        const headers = {'Authorization': 'Client-ID qkz4NXgJZhwhHjUAIpqMKMx4SqstZyEoE7ZnkQ9OBJs'}
        const params = {query: term}

        //Refactor to remove config code 
        fetch('https://api.unsplash.com/search/photos?' + new URLSearchParams({query: term}), { headers: headers })
            .then(async response => {
                const data = await response.json();
                
                //Check for error message
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                //Set the state object
                this.setState({ images: data.results });
            })
            .catch(error => {
                this.setState({ errorMessage: error });
                console.error('There was an error!', error);  
            });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '1%' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;