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

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {/* left side audio buttons */}
              <div className="col-md-8">
                {/* first row - buttons Q, W, E*/}  
                <div className="row">
                   {/* button Q */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">Q</button>
                    </div>

                    {/* button W */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">W</button>
                    </div>

                    {/* button E */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">E</button>
                    </div>
                </div><br/><hr/>

                {/* second row - buttons A, S, D*/}  
                <div className="row">
                   {/* button A */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">A</button>
                    </div>

                    {/* button S */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">S</button>
                    </div>

                    {/* button D */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">D</button>
                    </div>
                </div> <br/> <hr/>

                {/* third row - buttons Z, X, C */}  
                <div className="row">
                   {/* button Z */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">Z</button>
                    </div>

                    {/* button X */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">X</button>
                    </div>

                    {/* button C */}
                    <div className="col-md-4">
                       <button className="btn btn-lg btn-default btn-block">C</button>
                    </div>
                </div>
              </div>
              
              {/* right side heater panel */}
              <div className="col-md-4">
                  { /* Power */ }

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Power
                    </label>
                  </div><br />
               
                  {/* informer - key note teller */}

                  <div className="card">
                      <div className="card-body"></div>  
                  </div><br />

                  {/* volume */}
                  <form>
                    <div class="form-group">
                      <label for="formControlRange">Volume</label>
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
