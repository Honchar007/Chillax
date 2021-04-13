import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
  background: white;
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
  background: tomato;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid yellow;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
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
  border: 1px solid yellow;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 5px;
  outline: none;
  padding: 5px 10px;
  min-height: 150px;
  resize: none;
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

const addPost = async () => {
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

const CreateParty = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = React.useState('')
  const [imgUrl, setImgUrl] = React.useState('')

  const addPost = async () => {
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
  return (
    <>
      <Head>
        <title>Chillax:Login</title>
      </Head>
      <Navbar></Navbar>
      <Wrapper>
        <FormWrapper>
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputField>
              <TextLabel>Name of your party</TextLabel>
              <Input onChange={(e) => setTitle(e.target.value)}></Input>
            </InputField>
            <InputField>
              <TextLabel>Some Description</TextLabel>
              <TextArea onChange={(e) => setText(e.target.value)}></TextArea>
            </InputField>
            <InputField>
              <TextLabel>Url of your page</TextLabel>
              <Input onChange={(e) => setImgUrl(e.target.value)}></Input>
            </InputField>
            <FormBtn onClick={addPost}>Create</FormBtn>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  )
}
export default CreateParty
