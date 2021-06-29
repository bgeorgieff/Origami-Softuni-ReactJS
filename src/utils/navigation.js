const getNavigation = (logIn, user) => {

  const authLinks = [
    {
      title: "Publications",
      link: "/"
    },
    {
      title: "Share your thoughts",
      link: "/share"
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`
    },
  ]
  const guestLinks = [
    {
      title: "Publications",
      link: "/"
    },
    {
      title: "Register",
      link: "/register"
    },
    {
      title: "Login",
      link: "/login"
    }
  ]

  return logIn ? authLinks : guestLinks
}

export default getNavigation