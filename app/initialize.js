import Banner from './components/banner';

class App extends Inferno.Component {

    render(){
        return (
            <Banner />
        );
    }

}

Inferno.render( <App />, document.getElementById('app'));
