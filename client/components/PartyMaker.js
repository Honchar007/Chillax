import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;

  background: white;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #c300ff;
`
export class PartyMaker extends Component {
  render() {
    return <Wrapper></Wrapper>
  }
}

export default PartyMaker

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/post`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}
