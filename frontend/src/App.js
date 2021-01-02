import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/./Header/Header.component';
import Footer from './components/./Footer/Footer.component';
import HomePage from './pages/HomePage/HomePage.component';
import ProductPage from './pages//ProductPage/ProductPage.component';
import CartPage from './pages/CartPage/CartPage.component';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/cart/:id?" component={CartPage} /> {/* The ? makes the id optional */}
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
