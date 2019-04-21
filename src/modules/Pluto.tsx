import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
const css = require('../scss/tables.scss');

export module Solutions {
    class Company {
        private name: string;
        private industry: string;
        private sector: string;

        constructor(name: string, industry: string, sector: string) {
            this.name = name;
            this.industry = industry;
            this.sector = sector;
        }

        get Name(): string {
            return this.name;
        }

        set Name(name: string) {
            this.name = name;
        }

        get Industry(): string {
            return this.industry;
        }

        set Industry(industry: string) {
            this.industry = industry;
        }

        get Sector(): string {
            return this.sector;
        }

        set Sector(sector: string) {
            this.sector = sector;
        }
    }

    let Companies: Array<Company> = new Array<Company>();
    Companies.push(new Company('108', 'Shop', 'Consumer services,Retail'));
    Companies.push(new Company('2Spot', 'Communications', 'Consumer services,Media'));
    Companies.push(new Company('3K Battery', 'Industrials', 'General industries'));
    Companies.push(new Company('Advanced Info', 'Service', 'Telecommunications'));
    Companies.push(new Company('Air Andaman', 'Consumer services', 'Travel & leisure'));
    Companies.push(new Company('Air People International', 'Industrials', 'Industrial transportation'));
    Companies.push(new Company('Airports of Thailand PCL', 'Industrials', 'Industrial transportation'));
    Companies.push(new Company('Angel Air', 'Consumer services', 'Travel & leisure'));
    Companies.push(new Company('Areeya Property', 'Financials', 'Real estate'));
    Companies.push(new Company('AsiaSoft', 'Technology', 'Software'));
    Companies.push(new Company('AutoAlliance Thailand', 'Consumer goods', 'Automobiles'));
    Companies.push(new Company('B.Grimm', 'Conglomerates', '-'));
    Companies.push(new Company('Bangkok Airways', 'Consumer services', 'Travel & leisure'));
    Companies.push(new Company('Bangkok Bank Financials', 'Banks', 'Bangkok'));
    Companies.push(new Company('Bangkok Dock Company', 'Industrials', 'Industrial transportation'));
    Companies.push(new Company('Bangkok Hospital', 'Health care', 'Health care providers'));
    Companies.push(new Company('Bangkok Insurance', 'Financials', 'Insurance'));

    interface IPlutoCompany extends React.Props<Table> {
        name: string,
        industry: string,
        sector: string
    }

    class THead extends React.Component<IPlutoCompany> {
        render() {
            return (
                <tr>
                    <th>{this.props.name}</th>
                    <th>{this.props.industry}</th>
                    <th>{this.props.sector}</th>
                </tr>
            );
        }
    }

    class Tbody extends React.Component<IPlutoCompany> {
        render() {
            return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.industry}</td>
                    <td>{this.props.sector}</td>
                </tr>
            );
        }
    }

    export class HelloWorld extends React.Component {
        render() {
            return (
                <h2>Hello World! I came from TypeScript Development Server !</h2>
            );
        }
    }

    export class Table extends React.Component {
        render() {
            const rows = Companies.map((company) =>
                <Tbody name={company.Name} industry={company.Industry} sector={company.Sector} />
            );

            return (
                <table>
                    <THead name='Name' industry='Industry' sector='Sector' />
                    {rows}
                </table>
            );
        }
    }

    export class Welcome extends React.Component {
        render() {
            const rows = Companies.map((company) =>
                <Tbody name={company.Name} industry={company.Industry} sector={company.Sector} />
            );

            return (
                <div>
                    <h1>Welcome to Pluto Solutions</h1>
                    <h2>This is a React quick start development</h2>
                    <p>It is a readiness quick start server ready for React development in upcoming projects. Visit our website at <a href='https://pluto-solutions.business.site/'>https://pluto-solutions.business.site/</a></p>
                    <table>
                        <THead name='Name' industry='Industry' sector='Sector' />
                        {rows}
                    </table>
                </div>
            );
        }
    }

    export let Root = document.getElementById('root');
}