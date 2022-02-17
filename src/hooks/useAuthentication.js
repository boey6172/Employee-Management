// import firebase from 'firebase';

const useAuthentication = () => {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const getUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user = { ...user, authenticated: true };
    } else {
      user = { ...user, authenticated: false };
    }
    return user;
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user)  );
    
  };

  const unsetAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // firebase.auth().signOut().then(function() {
    //   console.log('Successfully Signed out')
    // }).catch(function(){
    //   console.log('error Signed out')
    // })
  };

  return { getToken, setToken, setUser, getUser, unsetAuth};
};

export default useAuthentication;