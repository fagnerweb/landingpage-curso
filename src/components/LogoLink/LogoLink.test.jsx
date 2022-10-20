import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    // const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    // expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );

    expect(container).toMatchSnapshot();
  });
});
