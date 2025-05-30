import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        <div className="glass">
          <div className="glass-inner" />
        </div>
        <div className="selector">
          <div className="choice">
            <div>
              <input className="choice-circle" defaultChecked="true" defaultValue="one" name="number-selector" id="one" type="radio" />
              <div className="ball" />
            </div>
            <label htmlFor="one" className="choice-name">1</label>
          </div>
          <div className="choice">
            <div>
              <input className="choice-circle" defaultValue="two" name="number-selector" id="two" type="radio" />
              <div className="ball" />
            </div>
            <label htmlFor="two" className="choice-name">2</label>
          </div>
          <div className="choice">
            <div>
              <input className="choice-circle" defaultValue="three" name="number-selector" id="three" type="radio" />
              <div className="ball" />
            </div>
            <label htmlFor="three" className="choice-name">3</label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    height: 210px;
    align-items: center;
  }

  .glass {
    z-index: 2;
    height: 110%;
    width: 95px;
    margin-right: 25px;
    padding: 8px;
    background-color: rgba(190, 189, 189, 0.5);
    border-radius: 35px;
    box-shadow: rgba(50, 50, 93, 0.2) 0px 25px 50px -10px,
      rgba(0, 0, 0, 0.25) 0px 10px 30px -15px,
      rgba(10, 37, 64, 0.26) 0px -2px 6px 0px inset;
    backdrop-filter: blur(8px);
  }

  .glass-inner {
    width: 100%;
    height: 100%;
    border-color: rgba(245, 245, 245, 0.45);
    border-width: 9px;
    border-style: solid;
    border-radius: 30px;
  }

  .selector {
    display: flex;
    flex-direction: column;
  }

  .choice {
    margin: 10px 0 10px 0;
    display: flex;
    align-items: center;
  }

  .choice > div {
    position: relative;
    width: 41px;
    height: 41px;
    margin-right: 15px;
    z-index: 0;
  }

  .choice-circle {
    appearance: none;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border-width: 9px;
    border-style: solid;
    border-color: rgba(245, 245, 245, 0.45);
    cursor: pointer;
    box-shadow: 0px 0px 20px -13px gray, 0px 0px 20px -14px gray inset;
  }

  .ball {
    z-index: 1;
    position: absolute;
    inset: 0px;
    transform: translateX(-95px);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px,
      0px -1px 15px -8px rgba(0, 0, 0, 0.09);
    border-radius: 100%;
    transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4);
    background-color: rgb(232, 232, 232, 1);
  }

  .choice-circle:checked + .ball {
    transform: translateX(0px);
  }

  .choice-name {
    color: rgb(177, 176, 176);
    font-size: 35px;
    font-weight: 900;
    font-family: monospace;
    cursor: pointer;
  }`;

export default Radio;
