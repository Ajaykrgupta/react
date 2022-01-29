import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './Users';
import Input from './Input';
import Form from './Form';
import Ifelseconditional from './Ifelseconditional';
import Basicformvalidation from './Basicformvalidation';
import Passfunctionasprops from './Passfunctionasprops'
import Childcomponent from './Childcomponent';
import Constructorlifecyclemethod from './Constructorlifecyclemethod';
import Renderlifecyclemethod from './Renderlifecyclemethod';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import ShouldComponentDidUpdateMethod from './ShouldComponentDidUpdateMethod';
import ComponentWillUnmount from './ComponentWillUnmount';
import Hooks1 from './Hooks1';
import UseEffect from './UseEffect';
import UseEffectHooks from './UseEffectHooks';
import Style from './Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import HandleArrayWithList from './HandleArrayWithList';
import NestedListWithNestedArray from './NestedListWithNestedArray';
import ReuseComponent from './ReuseComponent';
import ReactFragments from './ReactFragments';
import LiftingStateUp from './LiftingStateUp';
import PureComponent from './PureComponent';
import UseMemoHoooks from './UseMemoHoooks';
import Refcreate from './Refcreate';
import RefHooks from './RefHooks';
import ForwardRef from './ForwardRef';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import HighOrderComponentHOC from './HighOrderComponentHOC';
import Routing from './Routing';
import NewRoute from './NewRoute';
import Nav from './Nav';
import Dynamic_Routing from './Dynamic_Routing';
import GetApiCall from './GetApiCall';

/*function getData(){
    alert('I am props in index page')      
}*/
let email = 'ajay.krbca@gmail.com';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
    {/* <Users />
    <Users />
    <Users /> */}
    {/* <Input/> */}
    {/* <Form></Form> */}
    {/* <Ifelseconditional/> */}
    {/* <Basicformvalidation /> */}
    {/* <Passfunctionasprops data={getData}/>
    <Childcomponent data={getData} /> */}
    {/* <Constructorlifecyclemethod data={email}/> */}
    {/* <Renderlifecyclemethod /> */}
    {/* <ComponentDidMount /> */}
    {/* <ComponentDidUpdate /> */}
    {/* <ShouldComponentDidUpdateMethod /> */}
    {/* <ComponentWillUnmount /> */}
    {/* <Hooks1 /> */}
    {/* <UseEffect /> */}
    {/* <UseEffectHooks/> */}
    {/* <Style /> */}
    {/* <HandleArrayWithList /> */}
    {/* <NestedListWithNestedArray /> */}
    {/* <ReuseComponent /> */}
    {/* <ReactFragments /> */}
    {/* <LiftingStateUp/> */}
    {/* <PureComponent /> */}
    {/* <UseMemoHoooks /> */}
    {/* <Refcreate/> */}
    {/* <RefHooks/> */}
    {/* <ForwardRef /> */}
    {/* <ControlledComponent /> */}
    {/* <UncontrolledComponent /> */}
    {/* <HighOrderComponentHOC /> */}
    
    {/* <NewRoute/> */}
    {/* <BrowserRouter>
      <Nav />
      <Routing />
    </BrowserRouter> */}
    {/* <Dynamic_Routing /> */}
    {/* <GetApiCall /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
