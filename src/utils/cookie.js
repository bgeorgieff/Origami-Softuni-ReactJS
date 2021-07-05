const getCookie = (name) => {
  const match = document.cookie.match('(^|;) ?' + name + '=([^;]*)');
  return match ? match[2] : null
}


export default getCookie