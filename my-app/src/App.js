import React, { Component } from "react";
import Header from "./components/header/header.js";
import Container from "./components/container/container.js";
import Game from "./components/game/game.js";
import Games from "./game.json";
​
​
class App extends Component {
 
  state={
    games, 
    score: 0,
    highscore: 0
  };
​
   endGame = () =>{
    if(this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score })
      };
      this.state.games.forEach(game => {game.count = 0;});
      console.log(`Game Over :(score: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    
    }
  clickCount = id => {
    this.state.games.find((o, i) => {
      if (o.id === id) {
        if(games[i].count === 0){
          games[i].count = games[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.games.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }
​
  render(){
    return(
      <Container>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game </Header>
        {this.state.games.map(game => (
          <Game 
          clickCount={this.clickCount}
          id={game.id}
          key={game.image}
          />
        ))}
      </Container>
    );
  }
}
​
export default App;