import { useEffect, useState } from 'react';
import './App.css';
import Trivia from './Components/Trivia';
import Timer from './Components/Timer';
import Start from './Components/Start';

function App() {
    
    const [username,setUserName] = useState(null)
    const [questionNumber,setQuestionNumber] = useState(1)
    const [stop,setStop] = useState(false)
    const [earned, setEarned] = useState("$ 0");

    const data = [
        {
          id: 1,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },

        {
          id: 2,
          question: "When did the website `Facebook` launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },

        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },

        {
          id: 4,
          question: "Which of the following is the correct name of React.js?",
          answers: [
            {
              text: "reactjs",
              correct: false,
            },
            {
              text: "React.js",
              correct: false,
            },
            {
              text: "REACT.JS",
              correct: false,
            },
            {
              text: "All of the above",
              correct: true,
            },
          ],
        },

        {
          id: 5,
          question: "Which of the following command is used to install create-react-app?",
          answers: [
            {
              text: "npm intall-g create-react-app",
              correct: false,
            },
            {
              text: "npx create-react-app my-app",
              correct: true,
            },
            {
              text: "npm install create-react-app",
              correct: false,
            },
            {
              text: "npm install-f create-react-app",
              correct: false,
            },
          ],
        },

        {
          id: 6,
          question: "What of the following is used in React.js to increase performance?",
          answers: [
            {
              text: "original DOM",
              correct: false,
            },
            {
              text: "Virtual DOM",
              correct: true,
            },
            {
              text: "Both A and B",
              correct: false,
            },
            {
              text: "All of the above",
              correct: false,
            },
          ],
        },

        {
          id: 7,
          question: "What is the default port where webpack-server runs?",
          answers: [
            {
              text: "6060",
              correct: false,
            },
            {
              text: "3030",
              correct: false,
            },
            {
              text: "8080",
              correct: false,
            },
            {
              text: "3000",
              correct: true,
            },
          ],
        },



        {
          id: 8,
          question: "How many numbers of elements a valid react component can return?",
          answers: [
            {
              text: "1",
              correct: true,
            },
            {
              text: "4",
              correct: false,
            },
            {
              text: "9",
              correct: false,
            },
            {
              text: "unlimited",
              correct: false,
            },
          ],
        },

        {
          id: 9,
          question: "What is the declarative way to render a dynamic list of components based on values in an array?",
          answers: [
            {
              text: "Using the reducer array method",
              correct: false,
            },
            {
              text: "Using the <Each/> Component",
              correct: false,
            },
            {
              text: "Using the Array.map()method",
              correct: true,
            },
            {
              text: "with a for/while loop",
              correct: false,
            },
          ],
        },

        {
          id: 10,
          question: "What is a state in React?",
          answers: [
            {
              text: "A permanent Storage",
              correct: false,
            },
            {
              text: "internal storage of the component",
              correct:true,
            },
            {
              text: "External storage of the component",
              correct: false,
            },
            {
              text: "All of the above",
              correct: false,
            },
          ],
        },

        {
          id: 11,
          question: "What are the two ways to handle data in React?",
          answers: [
            {
              text: "state & props",
              correct: true,
            },
            {
              text: "services & components",
              correct: false,
            },
            {
              text: "state & services",
              correct: false,
            },
            {
              text: "All of the above",
              correct: false,
            },
          ],
        },

        {
          id: 12,
          question: "What command is used to start the React local development server?",
          answers: [
            {
              text: "npm start",
              correct: true,
            },
            {
              text: "npm serve",
              correct: false,
            },
            {
              text: "npm run dev",
              correct: false,
            },
            {
              text: "All of the above",
              correct: false,
            },
          ],
        },

        {
          id: 13,
          question: "Which keyword creates a constant in JavaScript?",
          answers: [
            {
              text: "const ",
              correct: true,
            },
            {
              text: "var",
              correct: false,
            },
            {
              text: "let",
              correct: false,
            },
            {
              text: "constant",
              correct: false,
            },
          ],
        },
        {
          id: 14,
          question: "What tool does React use to compile JSX?",
          answers: [
            {
              text: "Babel",
              correct: true,
            },
            {
              text: "React Router",
              correct: false,
            },
            {
              text: "jsx Compiler",
              correct: false,
            },
            {
              text: "React DOM",
              correct: false,
            },
          ],
        },

        {
          id: 15,
          question: "What is a common use case for ref?",
          answers: [
            {
              text: "To directly access a DOM node",
              correct: true,
            },
            {
              text: "To refer to another JavaSCript",
              correct: false,
            },
            {
              text: "To bind the Function",
              correct: false,
            },
            {
              text: "To refer to a function",
              correct: false,
            },
          ],
        },





      ];

    const moneyPyramid = [
        {id:1,amount:"$ 100"},
        {id:2,amount:"$ 200"},
        {id:3,amount:"$ 300"},
        {id:4,amount:"$ 500"},
        {id:5,amount:"$ 1000"},
        {id:6,amount:"$ 2000"},
        {id:7,amount:"$ 4000"},
        {id:8,amount:"$ 8000"},
        {id:9,amount:"$ 16000"},
        {id:10,amount:"$ 32000"},
        {id:11,amount:"$ 64000"},
        {id:12,amount:"$ 125000"},
        {id:13,amount:"$ 250000"},
        {id:14,amount:"$ 500000"},
        {id:15,amount:"$ 1000000"},
    ].reverse()

    useEffect(()=>{
      questionNumber > 1 && setEarned(moneyPyramid.find((m)=>m.id === questionNumber -1).amount)
    },[moneyPyramid, questionNumber])

    const playAgain = () =>{
        setUserName(null)
        window.location.reload()
    }
  return (
    <div className="App">
        {username ? (<>
            <div className="main">
                {stop ? <h1 className='endText'>You Earned {earned} <button className='button2' onClick={playAgain}>Start</button> </h1> :(
                    <>
                        <div className="top">
                            <div className="timer">
                                <Timer setStop={setStop} questionNumber={questionNumber}/>
                            </div>
                        </div>
                        <div className="bottom">
                            <Trivia  
                                data={data} 
                                setStop={setStop}
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                        />
                        </div>
                    </>
                )}
            
            </div>
            <div className="pyramid">
                <ul className="monetList">
                <p>Name:{username}</p> <p>Total Earned:{earned}</p>
                    {moneyPyramid.map((m)=>
                        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} key={m.id}>
                            <span className='moneyListItemNumber'>{m.id}</span>
                            <span className='moneyListItemAmount'>{m.amount}</span>
                        </li>
                    )}
                    
                </ul>
            </div>
        </>) : (<Start setUserName={setUserName}/> )
        
        }
    </div>
  );
}

export default App;
