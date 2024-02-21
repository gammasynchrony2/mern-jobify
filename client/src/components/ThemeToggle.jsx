import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styled from "styled-components";
import { useDashboardContext } from "../pages/DashboardLayout";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background: transparent;
    border: transparent;
    width: 3.5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    .toggle-icon {
        font-size: 1.15rem;
        color: var(--text-color);
    }
`;
