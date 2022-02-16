import { useEffect } from 'react'
import { getAll } from './services/brastlewark'
import { useDispatch } from 'react-redux'
import { brastlewarkInit } from './store/brastlewark/actions'
import FiltersDrawer from './components/FiltersDrawer'
import Cards from './components/Cards'
import Container from '@mui/material/Container';

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    getAll().then( data => {
      const brastlewarks = data.Brastlewark
      dispatch(brastlewarkInit(brastlewarks))
    })
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <FiltersDrawer/>
      <Cards/>
    </Container>
  )
}

export default App
