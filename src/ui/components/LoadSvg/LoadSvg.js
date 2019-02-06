// Node Modules
import React from 'react';

class LoadSvg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svg: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.loadSvg(nextProps.svgName, nextProps.color);
  }

  componentDidMount() {
    this.loadSvg(this.props.svgName, this.props.color);
  }

  loadSvg = (svgName, color) => {
    let svg;

    switch (svgName)
    {
      case 'triangle':
        svg = <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5">
          <path fillRule="evenodd" d="M257.5,329l-4.5-5h9Z" transform="translate(-253 -324)" />
        </svg>;
        break;      

      case 'chevron':
        svg = <svg xmlns="http://www.w3.org/2000/svg" width="4.32" height="7.781" viewBox="0 0 4.32 7.781">
        <path fillRule="evenodd" d="M1682.88,158.924h-1.44l-2.89,3.8v0.186l2.89,3.8h1.44l-2.49-3.887Z" transform="translate(-1678.56 -158.938)"/>
      </svg>      
      break;    
      
      case 'plus':
        svg = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 31.059 31.059" width="512px" height="512px">
        <g>
          <g>
            <path data-part="circle" d="M15.529,31.059C6.966,31.059,0,24.092,0,15.529C0,6.966,6.966,0,15.529,0    c8.563,0,15.529,6.966,15.529,15.529C31.059,24.092,24.092,31.059,15.529,31.059z M15.529,1.774    c-7.585,0-13.755,6.171-13.755,13.755s6.17,13.754,13.755,13.754c7.584,0,13.754-6.17,13.754-13.754S23.113,1.774,15.529,1.774z" fill="#435667"/>
          </g>
          <g>
            <path d="M21.652,16.416H9.406c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.397-0.888,0.888-0.888h12.246    c0.49,0,0.887,0.398,0.887,0.888C22.539,16.02,22.143,16.416,21.652,16.416z" fill="#435667"/>
          </g>
          <g>
            <path d="M15.529,22.539c-0.49,0-0.888-0.397-0.888-0.887V9.406c0-0.49,0.398-0.888,0.888-0.888    c0.49,0,0.887,0.398,0.887,0.888v12.246C16.416,22.143,16.02,22.539,15.529,22.539z" fill="#435667"/>
          </g>
        </g>
        </svg>
        break;        
    }

    this.setState({svg});
  }

  render() {
    
    return (
      <div className={this.props.className} onClick={this.props.handleClick}>
        {this.state.svg}
      </div>
    );
  }
}

export default LoadSvg;
