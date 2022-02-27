import React, {Component} from 'react';

export default class Card extends Component {
    render(){
        return(
            <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <img src={this.props.img} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}