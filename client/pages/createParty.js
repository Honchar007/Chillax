import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import axios from 'axios'
import useRouter from 'next/router'
import Checkbox from '@material-ui/core/Checkbox'
import { getSession } from 'next-auth/client'
import {
  Wrapper,
  Form,
  FormWrapper,
  InputField,
  InputWrapper,
  Bar,
  TextLabel,
  TextArea,
  FormBtn,
  InputStyled,
  Highlight,
  LabelStyled,
} from '../components/createPartyComponent'

const CreateParty = ({ user }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = React.useState('')
  const [imgUrl, setImgUrl] = React.useState('')
  const [city, setCity] = React.useState('')
  const [bees, setBees] = React.useState(false)

  const [street, setStreet] = React.useState('')
  const [numberHouse, setNumberHouse] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const creator = user.name
  const visitors = [{ name: user.name, img: user.image }]
  const router = useRouter

  const addPost = async () => {
    try {
      await axios
        .post('http://localhost:5000/api/post/add', {
          title,
          city,
          text,
          imgUrl,
          bees,
          street,
          numberHouse,
          phone,
          creator,
          visitors,
        })
        .then(() => router.push('/'))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Head>
        <title>Chillax:Create Party</title>
      </Head>
      <Navbar></Navbar>
      <Wrapper>
        <FormWrapper>
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputField>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Name of your party</LabelStyled>
              </InputWrapper>
              <InputWrapper>
                <Checkbox
                  onChange={(e) => {
                    setBees(e.target.checked)
                  }}
                ></Checkbox>
                Only newbies
              </InputWrapper>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> City </LabelStyled>
              </InputWrapper>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setStreet(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Street </LabelStyled>
              </InputWrapper>
              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setNumberHouse(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Home </LabelStyled>
              </InputWrapper>

              <InputWrapper>
                <InputStyled
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  type="text"
                  required
                ></InputStyled>
                <Highlight></Highlight>
                <Bar></Bar>
                <LabelStyled> Phone </LabelStyled>
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

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
    return {}
  }

  return {
    props: {
      user: session.user,
    },
  }
}
