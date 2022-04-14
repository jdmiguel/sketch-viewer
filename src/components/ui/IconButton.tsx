import styled from 'styled-components';

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.buttonBgHover};
  }
`;

type Props = {
  iconPath: string;
  onClick: () => void;
};

const IconButton: React.FC<Props> = ({ iconPath, onClick }) => (
  <StyledIconButton onClick={onClick}>
    <img src={iconPath} alt="icon button" />
  </StyledIconButton>
);

export default IconButton;
