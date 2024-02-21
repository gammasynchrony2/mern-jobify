
import { useState } from 'react';
import { BarChartComponent as BarChart } from './BarChart';
import { AreaChartComponent as AreaChart } from './AreaChart';
import styled from 'styled-components';

export const ChartsContainer = ({ data }) => {
  const [ barChart, setBarChart ] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;