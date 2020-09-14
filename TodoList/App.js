import React,{Component} from 'react';
import classes from "./App.module.css";
import ListOfItems from './Components/ListOfItems'
class App extends Component{
    state={
        enteredText:"",
        list: [],
        enablebuttons:true,
        editedText:'',
        indexvalue:''
    }
    valueEntered=(e)=>{
        //console.log(this.state.list[this.state.indexvalue]);
        
        if(this.state.editedText===""){
        this.setState({enteredText:e.target.value})
        }
        else{
            this.setState({editedText:e.target.value,enteredText:e.target.value})
           // console.log(this.state.editedText)
        }
    }
    addText=()=>{
        //console.log(this.state.enteredText);
        let newList=[...this.state.list]
        if(this.state.editedText==="" && this.state.enteredText!==""){
        let newListItem=this.state.enteredText;
        newList.push(newListItem)
        }
        else{
            newList[this.state.indexvalue]=this.state.editedText;
            //console.log(newList); 
        }
        this.setState({list:newList,enteredText:"",editedText:""})
       // console.log(this.state.editing);
        
    }
    deleteHandler=(listindex)=>{
        let list=[...this.state.list]
        list.splice(listindex,1)
        this.setState({list:list})
    }
    editHandler=(value,listindex)=>{
        //console.log(value,listindex)
        this.setState({enteredText:value,editedText:value,indexvalue:listindex})
        
    }
    enablebuttonsHandler=(value)=>{
       
        // this.setState((prevState,props)=>{
        //     return { 
        //         enablebuttons : !prevState.enablebuttons
        //     }
            
        // })
    }
    
render(){
    console.log(this.state.list)
    let lists=null;
     if(this.state.list!==[]){
         lists=<div>
             {
             this.state.list.map((item,index)=>{
                 console.log(item);
                 return <ListOfItems 
                 listvalue={item} 
                 key={index}
                 value={index}
                 enablebuttons={this.state.enablebuttons}
                 click={()=>this.deleteHandler(index)}
                 editClick={()=>this.editHandler(item,index)}
                 checkBoxClicked={this.enablebuttonsHandler.bind(this,item)}/>
             })
             }
         </div>

     }
    return(
        <div className={classes.App}>
            <input type="text" onChange={this.valueEntered} value={this.state.enteredText} className={classes.Input} ></input>
            <button onClick={this.addText}>Add</button>
            {lists}
        </div>
    )
}
}
export default App