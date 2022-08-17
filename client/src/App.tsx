import './App.css';
// import Counter from './Counter/Counter';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
    return (
        // <Counter initCounter={50} />
        <>
            <Header />

            <Menu defaultDisplay='grid' />
        </>
    );
}

export default App;
