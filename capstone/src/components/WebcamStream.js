import React from "react";

class VideoOutput extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const videoObj = this.videoRef.current;
        videoObj.srcObject = this.props.video;
        videoObj.play();
        console.log(videoObj);
    }

    render() {
        return <video ref={this.videoRef}></video>;
    }
}


class WebcamStream extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: null
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
  }


  async getVideo() {
    const video = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });
    this.setState({ video });
  }

  stopVideo() {
    this.state.video.getTracks().forEach(track => track.stop());
    this.setState({ video: null });
  }


  handleVideoClick() {
    if (this.state.video) {
      this.stopVideo();
    } else {
      this.getVideo();
    } 
  }

  render(){
    return(
      <div>
          <button onClick={this.handleVideoClick}>
            {this.state.video ? 'Vid On' : 'Vid Off'}
          </button>
      <div>
      {this.state.video ? <VideoOutput video={this.state.video} /> : ''}
       </div>
       </div>
    );
  }
  
  
}

export default WebcamStream