import React, {Component} from 'react'
import Data from './Data'
import Styles from './Styles.css'

export default class States extends Component{
    constructor(props){
        super(props)
        

        this.state = {
            count: 0
        }
    this.increase=this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    }
 
    increase(){
        if(this.state.count === 24){
        this.setState({count: 0})
        }else{this.setState({
            count: this.state.count+1
        })}            
    }
 
    decrease(){
        if(this.state.count === 0){
        this.setState({count: 24})
        }else{this.setState({
            count: this.state.count-1
        })}            
    }


    render(){
        return(
        <div class = 'body'>
            <header>
            <h1>Home</h1>
            </header>
            <div class = 'back'>
                   
                    <div class = 'info'>
    
                        <h1 class='count'>{Data[this.state.count].id}/25</h1>        
                        <h1 class='name'>{Data[this.state.count].name.first} {Data[this.state.count].name.last}</h1>
                       
                        <div class='title'>
                        <h2>From:</h2> <p>{Data[this.state.count].city}, {Data[this.state.count].country}</p>
                        </div>
                        <div class='title'>                       
                        <h2>Job Title:</h2> <p>{Data[this.state.count].title}</p>
                        </div> 
                        <div class='title'>                       
                        <h2>Employer:</h2> <p>{Data[this.state.count].employer}</p>                         
                        </div> 
                        
                        <h2 class='movies'>Favorite Movies:</h2>

                        <p class='words'>1. {Data[this.state.count].favoriteMovies[0]}</p>
                        <p class='words'>2. {Data[this.state.count].favoriteMovies[1]}</p>
                        <p class='words'>3. {Data[this.state.count].favoriteMovies[2]}</p>

                    </div>
           
                    <div class = 'house'>
                        <button onClick={this.decrease}> {'< Previous'}</button>
                        <button onClick={this.increase}>Next ></button>
                        
                    </div>
            </div>
            
        </div>
        )
    }
}