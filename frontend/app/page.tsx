'use client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import './globals.css';
import React, { Component } from 'react';
import CustomModal from '@/components/modal';
import axios from 'axios';



class Page extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      
      activeItems: {
        title: '',
        description: '',
        completed: false
      },
      taskList:[],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios.get('http://localhost:8000/api/todos/').then(res => this.setState({ taskList: res.data }))
    .catch(err => console.log(err));
  }
  //Create togle method to toggle the model
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handelSubmit = (item:any) => {
    this.toggle();
    if(item.id){
      axios.put(`http://localhost:8000/api/todos/${item.id}/`, item)
      .then(res => this.refreshList());
      return;
    }
    axios.post('http://localhost:8000/api/todos/', item)
    .then(res => this.refreshList());}
  
  handelDelete = (item:any) => {
    
    axios.delete(`http://localhost:8000/api/todos/${item.id}/`)
    .then(res => this.refreshList());
  }

  createItem = () => {
    const item = { title: '', description: '', completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  }

  editItem = (item:any) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  }

  toggleCompleted = (status:any) => {
    if(status){
     return this.setState({ viewCompleted: true });}
    
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className='my-5 tab-list '>
        <span
          onClick={() => this.toggleCompleted(false)}
          className={this.state.viewCompleted ? '' : 'active'}
          
        >
          Incompleted
        </span> 
        <span
          onClick={() => this.toggleCompleted(true)}
          className={this.state.viewCompleted ? 'active' : ''}
        >
          Completed
        </span>
      </div>
    );
  };  
// renderItems method to display the list of tasks
  renderItems = () => {
    const { viewCompleted  } = this.state;
    const filteredItems = this.state.taskList.filter(
      item => item.completed === viewCompleted);

    return filteredItems.map( item => (
      <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
        <span
          className={`todo-title mr-2 ${viewCompleted ? 'completed-todo' : ''}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button className='btn btn-primary mr-2' onClick={()=>this.editItem(item)} >Edit</button>
          <button className='btn btn-danger' onClick={() => this.handelDelete(item)}> Delete </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className='context p-3 mb-2 bg-info text-white'>
        <h1 className=' text-uppercase size-["14px"] text-center my-4'>Todo app</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div>
                <button className='btn btn-warning' onClick={this.createItem}> Add Task </button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      <footer className='my-3 text-muted text-center text-small'>
        
            Copyright 2024 &copy; All rights reserved 
          
        
      </footer>
      {this.state.modal ? ( 
        <CustomModal 
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handelSubmit}
          onDelete={this.handelDelete}/>   
      ): null}
      </main>
      
    );
  }
};

export default Page;
