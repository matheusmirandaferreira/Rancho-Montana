import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';

describe('App component', () => {
  it('should render list', () => {
    const { getByText } = render(<App />);

    expect(getByText('Nome1')).toBeInTheDocument();
    expect(getByText('Nome2')).toBeInTheDocument();
    expect(getByText('Nome3')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText('Novo item');
    const buttonElement = getByText('Adicionar');

    // console.log(buttonElement);

    // .type preenche o inputElement
    await userEvent.type(inputElement, 'Novo');

    await userEvent.click(buttonElement);

    expect(getByText('Novo')).toBeInTheDocument();
  });
});
