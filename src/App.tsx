import './App.css';
// import Counter from './Counter/Counter';
import Header from './Header/Header';
import Menu from './Menu/Menu';

function App() {
    return (
        // <Counter initCounter={50} />
        <>
            <Header />

            <Menu defaultDisplay='list' />
        </>
    );
}

export default App;
