import React from "react";
import "./style.css";
import CharInfo from "../CharInfo";

class Image extends React.Component {

    handleClick = event => {
        event.preventDefault();
        console.log()
        // this.setState({
        //     charName: ,

        // });
    };

    render(props) {

        return (
            <div>
                {/* <span id='test' onClick={this.handleClick} data-namee="hank">
                    <img src={"../../assets/img/hank.jpg"} alt="" className='img-block' />
                    <h4 className='img-text'>Hank H.</h4>
                </span>
                <span onClick={this.handleClick}>
                    <img src={"../../assets/img/peggy.png"} alt="" className='img-block' />
                    <h4 className='img-text'>Peggy H.</h4>
                </span>
                <span onClick={this.handleClick}>
                    <img src={"../../assets/img/dale.jpg"} alt="" className='img-block' />
                    <h4 className='img-text'>Dale G.</h4>
                </span>
                <span onClick={this.handleClick}>
                    <img src={"../../assets/img/bobby.jpg"} alt="" className='img-block' />
                    <h4 className='img-text'>Bobby H.</h4>
                </span> */}
                <CharInfo  />


            </div>
        );
    }

}
export default Image;


