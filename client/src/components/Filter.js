// @flow 
import * as React from 'react';
import './Filter.css';

export const Filter = (props) => {
    return (
        <div className="background"> 
            <h4 className="text_color">Filters</h4>
            <h6 className="text_color text_center">Launch Year</h6>
            <hr></hr>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width" >2006</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2007</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2008</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2009</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2010</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2011</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2012</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2013</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2014</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2015</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2016</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2017</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2018</button>
            <span> </span>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2019</button>
            <br></br>
            <button type="button" onClick={props.onYearClick} className="btn btn-success button_width">2020</button>
            <br></br>
            <br></br>
            <h6 className="text_color text_center">Successful Launch</h6>
            <hr></hr>
            <button type="button" onClick={props.onLaunchClick} className="btn btn-success button_width" >True</button>
            <span> </span>
            <button type="button" onClick={props.onLaunchClick} className="btn btn-success button_width">False</button>
            <br></br>
            <br></br>
            {/* <h6 className="text_color text_center">Successful Landing</h6>
            <hr></hr>
            <button type="button" onClick={props.onLandingClick} className="btn btn-success button_width" >True</button>
            <span> </span>
            <button type="button" onClick={props.onLandingClick} className="btn btn-success button_width">False</button> */}
        </div>
    );
};