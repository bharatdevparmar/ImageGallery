import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './gallery.css';
import ConfirmModal from "../Modals";

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://s3.zerochan.net/Link.240.911763.jpg"
            ],
            source: {
                index: '',
                url: ''
            },
            target: {
                index: '',
                url: ''
            },
            showConfirmModal: false
        }
    }

    handleDrop = (e, idx) => {
        e.preventDefault();
        const targetUrl = e.target.src;
        this.setState(state => ({
            showConfirmModal: !state.showConfirmModal,
            target: {
                index: idx,
                url: targetUrl
            }
        }))
    };

    handleReplace = () => {
        const {source, target, pictures} = this.state;
        pictures[target.index] = source.url;
        pictures[source.index] = target.url;
        this.setState({
            pictures
        });
    };

    handleDragStart = (e, idx) => {
        this.setState({
            source: {
                index: idx,
                url: e.target.src
            }
        })
    };

    toggleConfirmModal = () => {
      this.setState(state => ({
          showConfirmModal: !state.showConfirmModal
      }))
    };

    render() {
        const { pictures, showConfirmModal } = this.state;
        return (
            <>
                <h2>Image Gallery</h2>
                <Container className={'image-container'}>
                    <Row>
                    {
                        (pictures || []).map((image, idx) => (
                            <Col md={4} className={'column'} key={idx}>
                                <img
                                    id={`img${idx}`}
                                    src={image}
                                    alt={'Glass'}
                                    width={'100%'}
                                    height={'auto'}
                                    draggable
                                    onDrop={(e) => this.handleDrop(e, idx)}
                                    onDragOver={(e) => { e.preventDefault() }}
                                    onDragStart={(e) => this.handleDragStart(e, idx)}
                                />
                            </Col>
                        ))
                    }
                    </Row>
                    <ConfirmModal show={showConfirmModal} onCloseModal={this.toggleConfirmModal} handleReplace={this.handleReplace} />
                </Container>
            </>
        )
    }
}

export default ImageGallery;