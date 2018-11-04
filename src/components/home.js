import React, { Component } from 'react';

import "./home.css";

class Home extends React.Component {
   constructor(props){
       super(props);
       this.state={
           newItem:"",
         allItems:["asss","ddddd","sxcddd"],
           searchResults:[],
           notsearching: true
       };

       this.addItem = this.addItem.bind(this);
       this.search = this.search.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.remove = this.remove.bind(this);
   }

   addItem(){
        this.setState({notsearching: true});
       let allItemsArray = [...this.state.allItems];
       allItemsArray.push(this.state.newItem);
       this.setState({allItems: allItemsArray});
   }

   search(event){
       this.setState({notsearching: false});
       const searchInput = event.target.value.toUpperCase();

       const searchResults = [];

       this.state.allItems.map((item)=>{
           if(item.toUpperCase().indexOf(searchInput)> -1) {
               searchResults.push(item);
               this.setState({searchResults: searchResults});
           }});


           }

   handleChange(event){
       this.setState({newItem: event.target.value});
   }

   remove(i){
       let arrayModifier = [...this.state.allItems];
       arrayModifier.splice(i, 1);
       this.setState({allItems: arrayModifier});
   }

    render() {
      let  notsearching = this.state.notsearching;
        return (
            <div>
            <header>
                <h1>React To-Do App</h1>
                <h3>Enhance your productivity</h3>
            </header>
                <div className="home-input">
                <input type="text" placeholder="create new work item" value={this.state.newItem}
                       onChange={this.handleChange}/>
                    <button className="button" onClick={this.addItem}>Enter New Item</button>
                <input type="text"  placeholder="filter list" onChange={this.search} />
                </div>
                {notsearching ? (this.state.allItems.map((item,index)=>
                { return(

                    <div>
                  Task {index + ":"}{item}
                    <button onClick={()=> {this.remove(index)}}>Delete</button>
                    </div>



                );
                })):(this.state.searchResults.map((item,index)=>{
                        return(
                            <div>
                                Task {index + ":"}{item}
                                <button onClick={()=> {this.remove(index)}}>Delete</button>
                            </div>


                        );
                    })
                ) }

            </div>

        );
    }
}

export default Home;



/*
header react to do app
enhance....

input create

input enter new item

input filter list

list
list item: has a checkbox
has 3 columns
task + number
the task itself
checkbox

2 buttons:
clear the list
reset the list
 */