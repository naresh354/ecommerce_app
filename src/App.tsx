import Header from "./components/Header"
import HeaderTwo from "./components/HeaderTwo"
import Banner from './components/Banner'
import Category from './components/Category'
import CategoryList from './components/CategoryList'
import CategoryListThree from "./components/CategoryListThree"
import Slider from './components/Slider'
import Batch from "./components/Batch"
import FooterDiscount from './components/FooterDiscount'
import Footer from './components/Footer';
import "./App.css"
import { ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  


  return (
    <>
      <ThemeProvider theme={theme}>
      <Header />
      <HeaderTwo />
      <Banner />
      <Category />
      <CategoryList />
      <CategoryListThree />
      <Slider />
      <Batch />
      <FooterDiscount />
      <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
