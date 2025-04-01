import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--green);
  color: var(--navy);
  border-radius: 4px;
  font-size: 14px;
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  
  &:hover {
    background-color: var(--light-navy);
    color: var(--green);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--green);
  }
`;

export const ButtonLink = styled(StyledButton).attrs({ as: 'a' })`
  display: inline-block;
  text-align: center;
`; 