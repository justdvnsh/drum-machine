const sounds = [
      {
        name: "Cowbell",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/8[kb]COWBELL1.aif.mp3",
        keyCode: 81,
        key: "Q",
        color: "red"
      }, 
      {
        name: "Snare",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/31[kb]SNARE2.aif.mp3",
        keyCode: 87,
        key: "W",
        color: "orange"
      },
      {
        name: "Clap",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/54[kb]CLAPPO0.aif.mp3",
        keyCode: 69,
        key: "E",
        color: "yellow"
      },
      {
        name: "HH-Closed",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/12[kb]HHCLOSE2.aif.mp3",
        keyCode: 65,
        key: "A",
        color: "green"
      },
      {
        name: "HH-Open",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/31[kb]HHOPEN1.aif.mp3",
        keyCode: 83,
        key: "S",
        color: "blue"
      },
      {
        name: "Rim-Shot",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/14[kb]RIMSHOT1.aif.mp3",
        keyCode: 68,
        key: "D",
        color: "indigo"
      }, 
      {
        name: "Kick",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/69[kb]thick_acoustic_bd.aif.mp3",
        keyCode: 90,
        key: "Z",
        color: "purple"
      },
      {
        name: "Ride",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/125[kb]RIDE.aif.mp3",
        keyCode: 88,
        key: "X",
        color: "maroon"
      },
      {
        name: "Crash",
        source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/102[kb]CRASH.aif.mp3",
        keyCode: 67,
        key: "C",
        color: "gold"
      }
];

// createAudioElement - the component which adds music to the buttons.
const CreateAudio = (props) => {
   return( 
     <button className="btn btn-lg btn-block btn-success" id={props.drumpadId} title={props.buttonKeyCode} onClick= {props.play}>
      <audio id={props.audioId} className="clip" preload="auto" src={props.url} type="audio/mpeg">
      </audio>
       <p>{props.textName}</p>
     </button>
  );
};

// Drum machine element - the main element

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sound: "",
      power: true
    }
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.activateSound = this.activateSound.bind(this);
    this.handlePower = this.handlePower.bind(this);
  }
  
  activateSound(elementId, elementName) {
    document.getElementById(elementId).currentTime=0;
    document.getElementById(elementId).play();
    this.setState({
      sound: elementName
    });
  }
  
  handleKeyDown(event) {
     for (var i=0; i<sounds.length; i++) {
         if (event.keyCode == sounds[i].keyCode) {
          document.getElementById(sounds[i].name).click();
         }
     }
  }
  
  handlePower() {
    this.setState( {
      power: !this.state.power
    } )
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  render() {
    
    // map the sounds to the keys.
    
    let drumpads = sounds.map((obj, index, array) => {
      return(
        <CreateAudio
        drumpadId={array[index].name}
        audioId={array[index].key}
        buttonKeyCode={array[index].keyCode}
        styleButton={this.state.button}
        url={array[index].source}
        play={() => this.activateSound(array[index].key, array[index].name, array[index])}
        textName={array[index].key}
        />
      )
    });

    let PowerStatement = (
      <div className = "card">
        <div className="card-body">
          <h2>You have Turned off the Power .</h2>
        </div>
      </div>
    )
    
    return (
      <div className="container-fluid">
        <div className="card" id="main-card">
          <div className="card-body">
            <div className="row">
              {/* left side audio buttons */}
              <div className="col-md-8">                
                { this.state.power ? drumpads : PowerStatement }
              </div>

              {/* right side heater panel */}
              <div className="col-md-4">
                  { /* Power */ }

                  <button className="btn btn-lg btn-danger btn-block" onClick = {this.handlePower}>
                        <i className="fa fa-power"></i>Power
                  </button><br />
               
                  {/* informer - key note teller */}

                  <div className="card">
                      <div className="card-body">
                        <h1>{ this.state.sound }</h1>
                      </div>  
                  </div><br />

                  {/* volume */}
                  <form>
                    <div class="form-group">
                      <label for="formControlRange"><h3>Volume</h3></label>
                      <input type="range" class="form-control-range" id="formControlRange" />
                    </div>
                  </form><br />

                  { /* Bank */ }

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Bank
                    </label>
                  </div><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));