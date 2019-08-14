import React, {Component} from 'react';
import './sidebar.scss'

class Sidebar extends Component{
    render(){
        return(
            <div class="holy-grail-grid">
                <div class="holy-grail-left">
                  <h3>Nav</h3>
                  <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                  </ul>
                </div>
            </div>


        );
    }
}

export default Sidebar;