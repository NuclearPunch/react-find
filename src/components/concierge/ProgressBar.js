
import React from 'react';
import styled from 'styled-components';

const PB = styled.div`
    height: 80px;
    width: 820px;
    background-color: #fff;
  
`

const FL = styled.div`
  background: #fdd400;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
${p => p.percentage  && `
  width: ${p.percentage}%;
`}
  max-width: 100%;
`

const ProgressBar = (props) => {
  return (
      <PB>
        <FL percentage={props.percentage} />
      </PB>
    )
}

export default ProgressBar;