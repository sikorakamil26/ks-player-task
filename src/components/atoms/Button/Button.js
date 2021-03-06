import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.accent};
  width: 100%;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  outline: none;
  :active {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
`;

export default Button;
