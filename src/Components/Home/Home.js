import React,{ Component } from 'react';
import{Link} from 'react-router-dom';
import './home.scss'
// import { Dropdown, DropdownMenu } from 'foundation-sites';

class Home extends Component {
    // constructor(){
    //     const $dropdown = new Dropdown($('#mydropdown'));
    // }
    

    render (){
        console.log('hello from home');
        return(
            <div>
                
                <Link to="home">
                <h1>Hello welcome home</h1>
                </Link>
                
            </div>
        );
        
    }
}

export default Home;