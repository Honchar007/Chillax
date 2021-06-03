import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import axios from 'axios'
import useRouter from 'next/router'
import { Checkbox } from '@material-ui/core'
import PhoneInput from 'react-phone-number-input'
import { getSession } from 'next-auth/client'
import {
  Wrapper,
  FormWrapper,
  Form,
  InputField,
  FormBtn,
  InputStyled,
  LabelStyled,
  Bar,
  InputWrapper,
  Highlight,
} from '../components/fillProfileComponent'

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session },
  }
}

const FillProfile = ({ session }) => {
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = React.useState('')
  const [instagram, setInstagram] = React.useState('')
  const [github, setGithub] = React.useState('')
  const [telegram, setTelegram] = React.useState(false)
  const normalLevel = 0
  const [photo, setPhoto] = React.useState('')
  const router = useRouter
  if (session.user.name != '' && github == '') {
    setGithub(session.user.name)
  }
  if (session.user.email != '' && email == '') {
    setEmail(session.user.email)
  }
  if (session.user.image != '' && photo == '') {
    setPhoto(session.user.image)
  }
  const addPost = async () => {
    try {
      await axios
        .post('http://localhost:5000/api/post/useradd', {
          nickName,
          email,
          instagram,
          github,
          telegram,
          photo,
          normalLevel,
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
            <InputField>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setNickName(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Nickname</LabelStyled>
              </InputWrapper>
              {session.user.email == '' && (
                <InputWrapper>
                  <InputStyled
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type="text"
                    required
                  ></InputStyled>
                  <Highlight></Highlight>
                  <Bar></Bar>
                  <LabelStyled> Email </LabelStyled>
                </InputWrapper>
              )}

              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setInstagram(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Instagram </LabelStyled>
              </InputWrapper>
              {session.user.name == '' && (
                <InputWrapper>
                  <InputStyled
                    onChange={(e) => {
                      setGithub(e.target.value)
                    }}
                    type="text"
                    required
                  ></InputStyled>
                  <Highlight></Highlight>
                  <Bar></Bar>
                  <LabelStyled> Github </LabelStyled>
                </InputWrapper>
              )}

              {session.user.image == '' && (
                <InputWrapper>
                  <InputStyled
                    onChange={(e) => {
                      setPhoto(e.target.value)
                    }}
                    type="text"
                    required
                  ></InputStyled>
                  <Highlight></Highlight>
                  <Bar></Bar>
                  <LabelStyled> Url Photo </LabelStyled>
                </InputWrapper>
              )}
            </InputField>
            <InputWrapper>
              <InputStyled
                onChange={(e) => {
                  setTelegram(e.target.value)
                }}
                type="text"
                required
              ></InputStyled>
              <Highlight></Highlight>
              <Bar></Bar>
              <LabelStyled> Telegram </LabelStyled>
            </InputWrapper>
            <FormBtn onClick={addPost}>Create</FormBtn>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  )
}
export default FillProfile
