import React from 'react'
import axios from 'axios';
import _ from 'lodash'
import TableData from '../component/table'
import BtnControll from '../component/btn'
import BtnControll2 from '../component/btn2'



class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [],
      load: false
    }

    this.pushMore = this.pushMore.bind(this)
    this.testData = this.testData.bind(this)
    this.popLast = this.popLast.bind(this)
 
  }

  render() {
    console.log(this.state.persons);
    
    let data;
    if (this.state.load) {
      data = <div>
      <TableData
      persons2={this.state.persons}
      ></TableData>
      
      <BtnControll
      persons2={this.pushMore} 
      ></BtnControll>
      <BtnControll2
      persons2={this.popLast} 
      ></BtnControll2>

      <a onClick={this.testData}>Check Data</a>
      </div>
    }else{
      data = <img src={'/static/tomato-loader-with-css-vars.gif'} />
    }

    return (
 <div>{data}</div>
      
    )
  }
  pushMore(){
    console.log('pushMore');
    const resp = axios.get(`http://www.mocky.io/v2/5c57e92b2f00000c14856b54`)
    .then(res => {
      let personsNew = _.get(res, 'data.data', []);

      
      personsNew.forEach(element => {
        this.state.persons.push(element)
      });
      

    console.log(this.state.persons);

    this.setState({ persons:this.state.persons, load: true });
      
      
    })
  }
  popLast(){
    console.log('popLast');
    

    this.state.persons.pop();
    console.log(this.state.persons);
    
      this.setState({ persons:this.state.persons, load: true });
      

  }
  testData(){
    console.log(this.state.persons);
    
  }
  componentDidMount() {
    console.log('componentDidMount');
    axios.get(`http://www.mocky.io/v2/5c57e92b2f00000c14856b54`)
      .then(res => {
        const persons = res.data.data;

        this.setState({ persons, load: true });

      })
  }
}

export default Page 