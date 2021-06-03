import axios from 'axios'
import useRouter from 'next/router'
const router = useRouter
export function consistObject(visitors, neededName) {
  var found = false
  for (var i = 0; i < visitors.length; i++) {
    if (visitors[i].name == neededName) {
      found = true
      break
    }
  }
  return found
}
export async function missParty(image, name, id, theArray) {
  let visitors = theArray.filter((el) => el.name !== name)
  try {
    await axios
      .patch(`http://localhost:5000/api/post/attend/${id}`, {
        visitors,
      })
      .then(() => router.push('/'))
  } catch (error) {
    console.log(error)
  }
}

export async function deleteParty(id) {
  try {
    await axios
      .delete(`http://localhost:5000/api/post/books/${id}`)
      .then(() => router.push('/'))
  } catch (error) {
    console.log(error)
  }
}

export async function visit(image, name, id, theArray) {
  let visitors = await [
    ...theArray,
    {
      name: name,
      img: image,
    },
  ]
  try {
    console.log(id + ' util')
    console.log(visitors)
    await axios
      .patch(`http://localhost:5000/api/post/attend/${id}`, {
        visitors,
      })
      .then(() => router.push('/'))
  } catch (error) {
    console.log(error)
  }
}

export function add(x, y) {
  return x + y
}
