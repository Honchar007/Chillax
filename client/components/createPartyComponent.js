import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 20px;
  background: #140c13;
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
`
export const BackBtn = styled.a``
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  background: linear-gradient(#1aece2, #245cf3);

  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background: transparent;
  border: none;
`
export const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid yellow;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  background: transparent;
  border: none;
`
export const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 5px;
`
export const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  padding: 5px 10px;
  color: #ffffff;

  min-height: 150px;
  resize: none;
  background: transparent;
`
export const FormBtn = styled.button`
  border: 2px solid;
  background: none;
  display: block;
  width: 180px;
  margin: 25px auto;
  margin-bottom: 0px;
  margin-top: 5px;
  text-align: center;
  padding: 14px 40px;
  outline: none;
  color: #afd447;
  letter-spacing: 4px;
  border-radius: 25px;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: 0 0 5px #2ecc71, 0 0 25px #2ecc71;
  &:hover {
    background: #2ecc71;
  }
`
export const InputStyled = styled.input`
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  color: #ffffff;

  border-bottom: 1px solid #000000;
  background: transparent;
  &:focus {
    outline: none;
  }
`

export const LabelStyled = styled.label`
  color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  ${InputStyled}:focus ~ &,${InputStyled}:valid ~ & {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
    border: none;
  }
`

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 300px;
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  ${InputStyled}:focus ~ &:before, ${InputStyled}:focus ~ &:after {
    width: 50%;
  }
`
export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 45px;
  background: transparent;
`
export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
  ${InputStyled}:focus ~ & {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
`
