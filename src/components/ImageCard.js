import React from 'react';

class ImageCard extends React.Component {
    state = { spans: 0 }

    constructor(props) {
        super(props);

        //create instance of Ref 
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);
        this.setState({ spans });

    }

    render() {

        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: 'span ' + this.state.spans}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;