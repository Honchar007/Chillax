import React, { Component } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const CardSquare = styled.div`
  &:hover {
    border: 1px solid black;

    -webkit-box-shadow: 0 20px 40px rgba(255, 251, 29, 0.952);
    box-shadow: 0 20px 40px rgba(3, 247, 255, 0.822);
  }
  width: 460px;
  height: 430px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 20px 50px #0f47b6;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`
const CardImg = styled.img`
  border: 0;
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 4px;
  position: absolute;
  width: 100%;
  height: 100%;
`
const CardH = styled.div`
  margin: auto;
  text-align: left;
  margin-top: 240px;
  padding-left: 30px;

  font-family: 'Merriweather', serif;
  font-size: 24px;
`
const CardP = styled.p`
  text-align: justify;
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #c8c8c8;
  line-height: 18px;
`

const CardBtn = styled.a`
  background-color: #3edd84;
  color: white;
  width: 90px;
  padding: 10px 18px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 70px;
  font-size: 12px;
  cursor: pointer;
`
const textHandler = (text) => {
  if (text.length > 200) return text.substring(0, 200) + '...'
}
const CardParty = ({ imageUrl, title, text }) => {
  const cutText = textHandler(text)
  return (
    <div>
      <CardWrapper>
        <CardSquare>
          <CardImg src={imageUrl} />
          <CardH>{title}</CardH>
          <CardP>{cutText}</CardP>

          <div style={{ width: '460px' }}>
            <CardBtn
              href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261"
              target="_"
            >
              Read More
            </CardBtn>
          </div>
        </CardSquare>
      </CardWrapper>
    </div>
  )
}

export default CardParty
