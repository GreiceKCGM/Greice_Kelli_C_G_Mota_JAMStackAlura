import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundations/text';

const HeaderWrapper = styled.nav`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  background-color: #fff8e6;
  height: 50px;
  border: 1px solid #e9c46a;
`;

HeaderWrapper.LeftSide = styled.div``;

HeaderWrapper.RightSide = styled.div`
  list-style: none;
  display: inherit;
  li {
    &:first-child {
      margin-right: 20px;
    }
  }
  a {
    text-transform: uppercase;

    text-align: center;
    display: block;
    text-decoration: none;
    color: #8b3e2f;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
  &:hover,
  &:focus {
    font-weight: 500;
    color: #ec5e52;
  }
  }
`;

export default HeaderWrapper;