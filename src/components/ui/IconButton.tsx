import styled from 'styled-components';

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
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
