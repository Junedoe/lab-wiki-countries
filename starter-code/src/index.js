import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries';

class CountryDetail extends React.Component {
    render() {
        let country = countries.find(c => c.cca3 === this.props.match.params.cca3);
        let bordersArray = country.borders.slice();
        let pumpkin = countries.filter(c => bordersArray.includes(c.cca3));
        return (
            <div>
                <h2>{country.name.common}</h2>
                <hr />
                <h5>Capital: {country.capital}</h5>
                <hr />
                <h5>
                    Area: {country.area} km
                    <sup>2</sup>{' '}
                </h5>
                <hr />
                <h5>
                    {' '}
                    Borders:{' '}
                    <span>
                        <div>
                            <ul>
                                {pumpkin.map((c, i) => (
                                    <li key={i}>
                                        <Link to={'/country/' + c.cca3}>{c.name.common}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </span>
                </h5>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <div className="header">
                        <span className="list-group-item list-group-item-action active">
                            Wiki Countries
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-5 pre-scrollable">
                            {countries.map(c => (
                                <div className="list-group-item list-group-item-action">
                                    <Link to={'/country/' + c.cca3}>{c.name.common}</Link>
                                </div>
                            ))}
                        </div>
                        <div className="col-7" id="detail">
                            <Route exact path="/country/:cca3" component={CountryDetail} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
