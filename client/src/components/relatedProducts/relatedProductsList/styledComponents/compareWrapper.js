import styled from 'styled-components';

const CompareWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 20px;
  overflow: auto;
  justify-items: center;
  position: relative;
  font-size: 25px;
`;

export default CompareWrapper;
