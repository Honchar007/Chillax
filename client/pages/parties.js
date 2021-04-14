import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardParty from '../components/CardParty'
import styled from 'styled-components'

const PartyWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`

const Parties = ({ posts }) => {
  if (!posts) 'Loading...'

  return (
    <>
      <Navbar />
      <PartyWrapper>
        {posts.map((post, idx) => {
          console.log(post)
          return (
            <CardParty
              imageUrl={post.imgUrl}
              title={post.title}
              text={post.text}
              key={idx}
            />
          )
        })}
      </PartyWrapper>

      <CardParty
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack-o%27-Lantern_2003-10-31.jpg/360px-Jack-o%27-Lantern_2003-10-31.jpg"
        title="Halloween"
        text="
        Halloween or Halloween (a contraction of All Hallows evening),[5] also known as Allhalloween,[6] All Hallows Eve,[7] or All Saints Eve,[8] is a celebration observed in many countries on 31 October , the eve of the Western Christian feast of All Hallows Day. It begins the observance of Allhallowtide,[9] the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed."
      />
      <div className="parties"></div>
    </>
  )
}
export default Parties

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
