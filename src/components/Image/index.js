import React from "react";
import "./style.css";

class Image extends React.Component {

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this)
        // this.setState({
        //     charName: ,

        // });
    };

    render(props) {

        return (
            <div>
                <img src={"../../assets/img/hank.jpg"} alt="" className='img-block' onClick={this.handleFormSubmit} />
                <h4 className='img-text'>Hank H.</h4>
                <img src={"../../assets/img/peggy.png"} alt="" className='img-block' onClick={this.handleFormSubmit} />
                <h4 className='img-text'>Peggy H.</h4>
                <img src={"../../assets/img/dale.jpg"} alt="" className='img-block' onClick={this.handleFormSubmit} />
                <h4 className='img-text'>Dale G.</h4>
                <img src={"../../assets/img/bobby.jpg"} alt="" className='img-block' onClick={this.handleFormSubmit} />
                <h4 className='img-text'>Bobby H.</h4>
            </div>
        );
    }

}
export default Image;


