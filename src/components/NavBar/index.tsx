import {
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledLogoText,
  StyledTab,
  StyledTabs,
  StyledTabText,
} from './styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FINDER_PATH } from '../../constants/router';
import { FINDER } from '../../constants/navigation';
import { useNavBar } from './useNavBar';

export default function NavBar() {
  const { tabs, location } = useNavBar();

  return (
    <StyledHeader>
      <StyledLogo>
        <GitHubIcon sx={{ mr: 1 }} />
        <StyledLink to={FINDER_PATH}>
          <StyledLogoText>{FINDER}</StyledLogoText>
        </StyledLink>
      </StyledLogo>
      <StyledTabs>
        {tabs.map((tab) => (
          <StyledTab key={tab.name} selected={location.pathname === tab.path}>
            <StyledLink to={tab.path}>
              <StyledTabText selected={location.pathname === tab.path}>
                {tab.name}
              </StyledTabText>
            </StyledLink>
          </StyledTab>
        ))}
      </StyledTabs>
    </StyledHeader>
  );
}
