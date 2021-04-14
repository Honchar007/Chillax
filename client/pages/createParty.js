import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import axios from 'axios'
import useRouter from 'next/router'

const Wrapper = styled.div`
  margin-top: 20px;
  background: #140c0c;
  min-height: 100vh;
  width: 100%;
`
const BackBtn = styled.a``
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  background: linear-gradient(#1aece2, #000d1a);

  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background: transparent;
  border: none;
`
const Input = styled.input`
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
const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
`
const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  padding: 5px 10px;
  min-height: 150px;
  resize: none;
  background: transparent;
`
const FormBtn = styled.button`
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
const InputStyled = styled.input`
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #000000;
  background: transparent;
  &:focus {
    outline: none;
  }
`

const LabelStyled = styled.label`
  color: #999;
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
const addPost = async () => {
  console.log(title)

  try {
    await axios.post('http://localhost:5000/api/post/add', {
      title,
      text,
      imgUrl,
    })
  } catch (error) {
    console.log(error)
  }
}
const Bar = styled.span`
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
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 45px;
  background: transparent;
`
const Highlight = styled.span`
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
const CreateParty = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = React.useState('')
  const [imgUrl, setImgUrl] = React.useState('')
  const router = useRouter

  const addPost = async () => {
    try {
      await axios
        .post('http://localhost:5000/api/post/add', {
          title,
          text,
          imgUrl,
        })
        .then(() => router.push('/'))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Head>
        <title>Chillax:Login</title>
      </Head>
      <Navbar></Navbar>
      <Wrapper>
        <FormWrapper>
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputWrapper>
              <InputStyled type="text" required></InputStyled>
              <Highlight></Highlight>
              <Bar></Bar>
              <LabelStyled> Name</LabelStyled>
            </InputWrapper>
            <InputField>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setTitle(e.target.value)
                    console.log(title)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Name of your party</LabelStyled>
              </InputWrapper>
            </InputField>
            <InputField>
              <TextLabel>Some Description</TextLabel>
              <TextArea onChange={(e) => setText(e.target.value)}></TextArea>
            </InputField>
            <InputField>
              <InputWrapper>
                <InputStyled
                  type="text"
                  onChange={(e) => setImgUrl(e.target.value)}
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Url of your party photo</LabelStyled>
              </InputWrapper>
            </InputField>
            <FormBtn onClick={addPost}>Create</FormBtn>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  )
}
export default CreateParty
