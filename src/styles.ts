import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileSettings = styled.div`
  width: 320px;
  height: auto;

  background-color: #fdfcfe;
  border-radius: 12px;

  padding: 2rem 1.33rem;
`;

export const Row = styled.div`
  border-bottom: 1px solid #f4effa;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  &:nth-child(4) {
    margin-bottom: 0.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 8px;
  object-fit: cover;

  cursor: pointer;
`;

export const Info = styled.div`
  flex: 1;

  h1 {
    font-size: ${18 / 16}rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  p {
    font-size: ${14 / 16}rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #686071;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: ${12 / 16}rem;
    font-weight: 400;
    color: #797085;

    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;

  color: #38343d;

  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: ${1}rem;
  font-weight: 400;
  color: #38343d;

  transition: 0.3s ease-in-out;

  &:hover {
    color: #000;
  }
`;

export const Footer = styled.div`
  border-bottom: 1px solid #f4effa;
  padding-bottom: 1.5rem;
  margin-bottom: 0;

  div:nth-child(2) {
    a {
      color: #aa2222;
      transition: 0.3s ease-in-out;

      &:hover {
        color: red;
      }
    }
  }
`;
