import {
  StyledCircle,
  StyledExampleRepo,
  StyledFinder,
  StyledHeader,
  StyledSubHeader,
} from './styles';
import { HEADER_TEXT, SUB_HEADER_TEXT } from '../../constants/finder';

export default function Finder() {
  return (
    <StyledFinder>
      <StyledCircle>
        <StyledCircle>
          <StyledCircle />
        </StyledCircle>
      </StyledCircle>
      <StyledHeader variant="h1">{HEADER_TEXT}</StyledHeader>
      <StyledSubHeader variant="h4">{SUB_HEADER_TEXT}</StyledSubHeader>
      <StyledExampleRepo />
    </StyledFinder>
  );
}
