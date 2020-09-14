import { useState, useEffect } from 'react'
import firebase from 'config/firebase'

const useAuth = () => {
    const fireUser = firebase.auth().currentUser
    const [currentUser, setCurrentUser] = useState(fireUser)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const unlisten = firebase.auth().onAuthStateChanged(
            authUser => {
                if (authUser) {
                    setCurrentUser(authUser)
                    setLoading(false)
                } else {
                    setCurrentUser(null)
                    setLoading(false)
                }
            })
        return () => {
          unlisten();
        }
    }, [])

    return {
        currentUser,
        loading
    }
}

export default useAuth;