import React,{Component} from 'react';
import axios from 'axios';
import logo, { ReactComponent } from './logo.svg';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users'
import Todos from './components/Todos/Todos';
import Albums from './components/Albums/Albums';
import Errors from './components/ErrorComponent/Error';
import './App.css';

class App extends React.Component{
  state={
    posts:[],
    users:[],
    todos:[],
    albums:[],
    error:false,
    errorDescription:""
  }
    postHandler = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => {
       this.setState({
         posts:response.data,
         users:[],
         todos:[],
         albums:[],
         error:false,
         errorDescription:" "
        })
       console.log(this.state)
     }).catch(err=>{
       this.setState({
         error:true,
         errorDescription: "Posts data not available"
      })
     })
   } 
 
   userHandler = () => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => {
      this.setState({
        users:response.data,
        posts:[],
        todos:[],
        albums:[],
        error:false,
        errorDescription:" "
       })
      console.log(this.state)
    }).catch(err=>{
      this.setState({
        error:true,
        errorDescription: "Users data not available"
     })
    })
  } 
     
   todoHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      this.setState({
        todos:response.data,
        posts:[],
        users:[],
        albums:[],
        error:false,
        errorDescription:" "
       })
      console.log(this.state)
    }).catch(err=>{
      this.setState({
        error:true,
        errorDescription: "Todos data not available"
     })
    })
  } 
   
   albumHandler = () => {
     axios.get('https://jsonplaceholder.typicode.com/albums')
     .then(response => {
      this.setState({
        albums:response.data,
        posts:[],
        users:[],
        todos:[],
        error:false,
        errorDescription:" "
       })
      console.log(this.state)
    }).catch(err=>{
      this.setState({
        error:true,
        errorDescription: "Albums data not available"
     })
    })
  } 

  render(){
   let fetchData;
      if(this.state.error){
        fetchData = 
        <Errors
        Description = {this.state.errorDescription}
        Status = "404"/>    
      }
      else if(this.state.posts.length!=0){
        fetchData=
        <div>
        <h1>Posts</h1>
        <ul>
           {this.state.posts.map((post,i)=>{
              return(<Posts key={i}
                userId = {post.userId} 
                id = {post.id}
                title = {post.title}/>
                )
              })
            }
        </ul>
        </div>
      }
      else if(this.state.users.length!=0){
        fetchData=
        <div>
        <h1>Users</h1>
        <ul>
           {this.state.users.map((user,i)=>{
              return(<Users key={i}
              id = {user.id} 
              name = {user.name} 
              username = {user.username} 
              email = {user.email}/>
              )
            })
          }
        </ul>
        </div>
      }
      else if(this.state.todos.length!=0){
        fetchData=
          <div>
            <h1>Todos</h1>
            <ul>
            {
              this.state.todos.map((todo,i)=>{
                return(<Todos key={i}
                  userId = {todo.userId}
                  id = {todo.id}
                  title = {todo.title}/>
                )
              })
            }
            </ul>
          </div>
      }
      else if(this.state.albums.length!=0){
        fetchData=
          <div>
            <h1>Albums</h1>
            <ul>
            {
              this.state.albums.map((album,i)=>{
                return(<Albums key={i}
                  userid = {album.userId}
                  id = {album.id}
                  title = {album.title}/>
                )
              })
            }
            </ul>
          </div>
      }
    return(
      <div>
        <h1>Which data would you like to fetch?</h1>
      <button className="button" onClick={this.postHandler}>Posts</button>
      <button className="button" onClick={this.userHandler}>Users</button>
      <button className="button" onClick={this.todoHandler}>Todos</button>
      <button className="button" onClick={this.albumHandler}>Albums</button>
      {fetchData}
      </div>
    )
}
}

export default App;

