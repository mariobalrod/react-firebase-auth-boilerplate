import useAuth from 'hooks/useAuth'

const useConnect = () => {
  const { loading, currentUser } = useAuth()

  return {
    loading,
    currentUser
  }
}

export default useConnect