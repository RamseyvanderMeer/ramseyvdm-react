import React, { Component } from 'react';
import { Project } from '..';
import { createMuiTheme, ThemeProvider, responsiveFontSizes, CssBaseline } from '@material-ui/core';
import '../../css/project.css'

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
  },
  background: {
    default: '#fff'
  }
}));
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div >
            <main className="main">
            <Project title="User Authentication" description="I used Node.js to create a backend user authentication server. This project leveraged script to hash passwords, session to keep users logged in and express to connect to my Postgres SQL server." imgPath="login" />
            <Project title="Chatbot using machine Learning" description="Trained a Chatbot through 1000 epochs with an intent understanding using a neural net composed of inputs all connected to two rows of 8 predictive nodes which finally connect to an output node with the probabilities of the top 5 answers. from there I choose the top one if it meets a threshold and reject if it does not." imgPath="chatbot" />
            <Project title="Minimax" description="Made a bot to play tic tac toe which is unbeatable by using a minimax algorithm. This uses a decision tree which traces all possible outcomes. From here it will score each and select the best. To do this it predicts what is best for itself and plays against what is best for the player. After it reports the best score based on if it thinks it will lose or win." imgPath="tictactoe" />
            <Project title="Messaging Service" description="Used Cors Express Nodemon and Socet.io to connect a frontend interface with backend logic which allows for live messaging between multiple users." imgPath="chat" />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    )
  }
}
export default App;
