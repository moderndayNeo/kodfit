export const sendToLocalStorage = (response) => {
    const user = response.profileObj

    localStorage.userName = user.name
    localStorage.userImage = user.imageUrl
    localStorage.userEmail = user.email
    localStorage.userGoogleId = user.googleId
}