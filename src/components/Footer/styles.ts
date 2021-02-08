import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  background: #fff;
  padding: 0 10.05vw;
  font-size: 0.58rem;
  color: #adb0c1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CopyrightsBox = styled.div`
  display: flex;
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-left: 15px;
    flex-wrap: wrap;
  }

  p:last-child {
    margin-left: 15px;
  }
`;
