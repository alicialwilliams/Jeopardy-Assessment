import React, { Component } from 'react';
import GameDisplay from '../gamedisplay/GameDisplay'
//import our service
import JeopardyService from '../service/JeopardyService';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
    "id": null,
      "answer": "",
      "question": "",
      "value": null,
      "airdate": "",
      "created_at": "",
      "updated_at": "",
      "category_id": null,
      "game_id": null,
      "invalid_count": null,
      "category": {
        "id": null,
        "title": "",
        "created_at": "",
        "updated_at": "",
        "clues_count": null
        }
    },
      score: 0, 
      answerData: {
          answer:""
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      console.log(this.state.data.answer)
    })
  }

  handleChange = (event)=>{
    const answerData = {...this.state.answerData};
    answerData[event.target.name]=event.target.value;//new object

    this.setState({
        
        answerData:{answer:event.target.value}
    
    });
}

handleSubmit = (event)=>{
    alert('An answer was submitted')
    event.preventDefault();
    let score = this.state.score
    this.setState({
        submitted: true
    });

    if (this.state.answerData.answer === this.state.data.answer){
        this.setState ({
            score: score += this.state.data.value,
            answerData:{answer:""}
        })
    } else{
        this.setState ({
            score:score -= this.state.data.value,
            answerData:{answer:""}
        })
    }
    
    this.getNewQuestion()
    this.setState({answer:""})
}

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <div className="jeopardyData">
        <GameDisplay
        question= {this.state.data.question}
        category={this.state.data.category}
        value={this.state.data.value}
        score={this.state.data.score}
        />
        <form onSubmit={this.handleSubmit}>
            <input  onChange={this.handleChange} />
            <button>Submit</button>
        </form>
        
      </div>
    );
  }
  

}




export default Jeopardy;