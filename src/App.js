import React from 'react';
import './App.css';

const data = [
  {id: 'bell', letter: 'Q', src: 'http://www.hibberts.co.uk/lym2big.mp3'},
  {id: 'rocket', letter: 'W', src: 'http://www.stanmorgan.com/Virtual3d/MLaunch.wav'},
  {id: 'laser', letter: 'E', src: 'http://s1download-universal-soundbank.com/wav/3534.wav'},
  {id: 'piano', letter: 'A', src: 'http://www.vibrationdata.com/piano_A_sharp.mp3'},
  {id: 'drum', letter: 'S', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drum%20Solo%20Live-6405-Free-Loops.com.mp3'},
  {id: 'violin', letter: 'D', src: 'http://s1download-universal-soundbank.com/wav/9885.wav'},
  {id: 'boomer', letter: 'Z', src: 'http://cs.slimi.lt/cstrike/sound/umbrella/boomer_boom.wav'},
  {id: 'cs', letter: 'X', src: 'http://csfiles.maniapc.org/cs/sound/weapons/thanatos9_shootb_loop.wav'},
  {id: 'bird', letter: 'C', src: 'http://www.dartmouth.edu/~milton/reading_room/graphics/nightingale.wav'}
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props) 
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
    }
  }
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return(
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h2>{this.props.letter}</h2>
        <audio 
          ref={ref => this.audio = ref}
          className="clip" 
          src={this.props.src}
          id={this.props.letter}>
        </audio>
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'Ready!'
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  
  handleDisplay = display => this.setState({ display });
  
  render() {
    return(
      <div id="drum-machine">
        <h1>My Drum Machine</h1><hr />
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
        {data.map(d => (
                  <DrumPad 
                    id={d.id}
                    letter={d.letter}
                    src={d.src}
                    handleDisplay={this.handleDisplay}
                  />
        ))}
        </div>  
      </div>  
    )
  }
}

export default App;
