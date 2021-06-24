const authenticate = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const cookie = promise.headers.get('Authorization')
    document.cookie = `x-auth-token=${cookie}`

    const response = await promise.json()

    if(response.username && cookie) {
      onSuccess({
        username: response.username,
        id: response._id
      })
    } else {
      onFailure()
    }
  } catch(e) {
    onFailure(e)
  }
}

export default authenticate