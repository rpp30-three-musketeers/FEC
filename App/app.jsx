import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import './css/global.css';
import './css/Related.css';
import './css/Comparison.css';
import Header from './Header.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Outfit from './RelatedProducts/Outfit.jsx';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import $ from 'jquery';
import { ProductIdProvider } from './context.jsx';

const muiTheme = createTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#484848'
    }
  }
})

const withTracking = eventName => Component => props => (
  <Track eventName={eventName}>
    <Component {...props} parentComponent={Component.name} />
  </Track>
);

const FunctionButton = props => {
  return <button>{props.name}</button>;
};

const ClassButton = class extends React.Component {
  render() {
    return <button>{this.props.name}</button>;
  }
};

class Track extends React.Component {
  handleEvent = e => {
    if (this.props.eventName) {
      if (e.target.className.indexOf('trackable-') !== -1) {
        var element = e.target.nodeName;
        var widget = e.target.className.substring((e.target.className.lastIndexOf('trackable-')) + 10).split(' ')[0];
        var time = new Date();

        $.post('/interactions', {'element': e.target.nodeName, 'widget': widget, 'time': time}, (data) => {
          // console.log(data);
        })
      }
    }
  };

  handleChildMounted = (el, child) => {
    const DOMNode = ReactDOM.findDOMNode(el);
    if (DOMNode) {
      DOMNode.addEventListener("click", this.handleEvent);
    }
    if (typeof child.ref === "function") {
      child.ref(el);
    }
  };

  wrapWithClass = comp =>
    class extends React.Component {
      render() {
        return comp;
      }
    };

  remapChildren(children) {
    return React.Children.map(children, child => {
      const ref = el => this.handleChildMounted(el, child);

      // DOM Component, such as:
      // <button />
      if (typeof child.type === "string") {
        // console.log(child.props.children);
        return React.cloneElement(child, { ref });

        // Custom Component w/props.children, such as:
        // <MyComponent ... />
        //   <.../>
        //   <.../>
        // </MyComponent>
      }

      else if (React.Children.count(child.props.children)) {
        return React.cloneElement(child, {
          children: this.remapChildren(child.props.children)
        });

        // Custom Class Component w/o props.children, such as:
        // <MyClassComponent ... />
      } else if (child.type.prototype.render) {
        return React.cloneElement(child, { ref });

        // Custom Function Component w/o props.children, such as:
        // <MyFunctionComponent ... />
      } else {
        return React.createElement(this.wrapWithClass(child), { ref });
      }
    });
  }

  render() {
    return this.remapChildren(this.props.children);
  }
}

function Wrapper(props) {
  return props.children;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 47421,
      currentProductName: 'Camo Onesie'
    };
    this.productIdExtractor = this.productIdExtractor.bind(this);
  }

  productIdExtractor(url) {
    let newProductId = url.split('/')[3];
    this.setState({currentProductId: newProductId});
  }

  render() {

    return (
      <Track>
        <ProductIdProvider value={()=>{
          let newUrl = window.location.href;
          let newProductId = parseInt(newUrl.split('/')[3]);
          let actualPId ='';
          if(newProductId.length > 5) {
            actualPId = newProductId.slice(0,5);
          } else {
            actualPId = newProductId
          }
          return parseInt(actualPId);
        }}>
          <div>
            <Header />
            <Overview />
            <RelatedProducts/>
            <Outfit />
            <Reviews/>
          </div>
        </ProductIdProvider>
      </Track>

    );
  }
}

App = withTracking("elemClick")(App)

ReactDOM.render(<ThemeProvider theme={muiTheme}><App/></ThemeProvider>, document.getElementById('app'));