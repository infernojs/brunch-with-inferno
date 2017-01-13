import Banner from './components/banner';

class App extends Component {

    render(){
        return (
            <Banner />
        );
    }

}

Inferno.render( <App />, document.getElementById('app'));