import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/store';

describe('Home component', () => {
  test('renders loading message while data is being fetched', () => {
    const mockState = { cripto: { cyptoData: [] } };
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
      { initialState: mockState }
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders filtered crypto coins', async () => {
    const mockState = {
      cripto: {
        cyptoData: [
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            image: { small: 'https://bitcoin.com' },
            market_data: { current_price: { usd: 50000 } }
          },
          {
            id: '',
            name: 'Ethereum',
            image: { small: 'https://ethereum.com' },
            market_data: { current_price: { usd: 2000 } }
          },
        ]
      }
    };
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
      { initialState: mockState }
    );
  });
});
