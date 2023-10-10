'use strict';
import { useState } from "React";
// import React from 'https://unpkg.com/es-react@latest/dev/react.js';
// import ReactDOM from 'https://unpkg.com/es-react@latest/dev/react-dom.js';
// import htm from 'https://unpkg.com/htm@latest?module';
//   import React from "https://unpkg.com/es-react@latest/dev/react.js";
//   import ReactDOM from "https://unpkg.com/es-react@latest/dev/react-dom.js";
//   import htm from "https://unpkg.com/htm@latest?module";
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}


const domContainer = document.querySelector('#activitys-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


function mouseOver() {
  document.getElementById("feelings").style.color = "yellow";
}
function mouseOut() {
  document.getElementById("feelings").style.color = "white";
}

function mouseOver2() {
  document.getElementById("nasa").style.color = "aqua";
}
function mouseOut2() {
  document.getElementById("nasa").style.color = "white";

  function mouseOver3() {
    document.getElementById("email").style.color = "lightgreen";
  }
  function mouseOut3() {
    document.getElementById("email").style.color = "white";
  }

  // ------------------ Random Color Generator section -----------------------

  const background = document.getElementById("background");

  const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };

  const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
    background.style.color = randomColor;
  };

  setBackgroundColor();

  setInterval(() => {
    setBackgroundColor();
  }, 3000);

  // ------------------ Random Color Generator section -----------------------


//   const html = htm.bind(React.createElement);
  const app = document.querySelector(".activitys-container");
  //import useState hook to get the state of the letiable
  //the app function will run your code
  function App() {
    const [activities, setActivity] = useState("");
    //fetch the data from the api
    const fetchFromApi = async () => {
      const url = new URL("https://www.boredapi.com/api/activity");
      let response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setActivity(data.activity);
        console.log(activities);
      } else {
        alert(`${response.status}`);
      }
    };

    //show the data in a bootstrap card on web page with JSX (Use ClassName instead of Class)
    return html`
      <div
        className="p-5 mb-4 text-light text-center bg-dark bg-opacity-25 rounded-3"
      >
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Oh look at you!</h1>
          <p className="fs-4">I know You are Bored!</p>
          <p className="fs-4">
            You can click on the button below to get ideas easily :)
          </p>
          <p
            className="m-4 text-center rounded border-1 border-dark bg-warning"
          >
            ${activities}
          </p>
          <button
            className="col-md-8 m-4 ml-3 btn btn-outline-warning"
            onClick=${fetchFromApi}
          >
            Ready?
          </button>
        </div>
      </div>
    `;
  }

  ReactDOM.render(html`<${App} />`, app);

  // ------------- video Script ---------------

  // Get the video
  let video = document.getElementById("myVideo");
  // play the video
  function myFunction() {
    video.play();
  }

  // ------------- video Script ---------------
}
