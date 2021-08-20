import React, { Component } from 'react';
import styled from 'styled-components';
import Img from './assets/car.svg';
import AddImg from './assets/add.svg';
import RmvImg from './assets/remove.svg';

const TitleCar = styled.h2`
  text-align: center;
`
const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; 
  border: 1px solid #000;
  width: 30%;
  height: 13vw;
  margin: 1em 0 0 0;
  padding-bottom: 1em;
  border-radius: 0.15em;
  opacity: ${props=> props.ativo === true ? 0.5: 1};
  /* pointer-events: none; */
  &:hover{
    border-color: ${props=> props.ativo === true ? "" : "rgb(91 192 222)"} ;
    cursor: ${props=> props.ativo === true ? "initial" : "pointer"} ;
  } 
  &:hover .boxHover{
    background-color: ${props=> props.ativo === true ? "" : "rgb(91 192 222)"} ;
    color: ${props=> props.ativo === true ? "" : "#fff"};
    cursor: ${props=> props.ativo === true ? "initial" : "pointer"} ;  
  }
`
const BoxParagraph = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7em;
  list-style: none;
  padding: 0 1em 0 1em;
  li{
    padding: 0.7em;
    font-size: 75%;
  }
`
const CarImg = styled.img`
  margin-top: 20em;
  width: 50%; 
`
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BoxCar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  width: 40vw;
  height: 60vw;
  margin-top: 1em;
  margin-right: 1em;
  overflow: auto;
`
const Container = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Box = styled.div`
  display: flex;
  justify-content: space-around;
`
const BoxTotal = styled.div`
  display: flex;
  justify-content: space-between;
`
const Total = styled.h2`
  color: #000;
`
const BoxAddCar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  0 1em ;
  background-color: rgb(211 211 211);
  button{
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    cursor: ${props=> props.ativo === true ? "pointer" : "initial"} ;
  }
`
const ImgButtonAdd = styled.img`
  width: 1.1em; 
`
const ImgButtonRmv = styled.img`
  cursor: pointer;
`
const BoxCardRmv = styled.div`
  width: 35vw;
  border: #000;
  margin: 1em;
`
const BoxRmv = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  background-color: rgb(91 192 222);
  border-radius: .25em .25em 0 0; 
`
const BoxType = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgb(91 192 222);
  border-radius: 0 0 .25em 0.25em;
`
class App extends Component {
  state = {
    cars: [
      {
        id: 1,
        carro: 'Jetta',
        montadora: 'Volkswagen',
        preço: 144000,
        tipo: 'Sedan',
        valor: false
      },
      {
        id: 2,
        carro: 'Polo',
        montadora: 'Volkswagen',
        preço: 70000,
        tipo: 'Hatch',
        valor: false
      },
      {
        id: 3,
        carro: 'T-Cross',
        montadora: 'Volkswagen',
        preço: 123000,
        tipo: 'SUV',
        valor: false
      },
      {
        id: 4,
        carro: 'Tiguan R-line',
        montadora: 'Volkswagen',
        preço: 146000,
        tipo: 'SUV',
        valor: false
      },
      {
        id: 5,
        carro: 'Civic',
        montadora: 'Honda',
        preço: 115000,
        tipo: 'Sedan',
        valor: false
      },
      {
        id: 6,
        carro: 'Corolla',
        montadora: 'Toyota',
        preço: 110000,
        tipo: 'Sedan',
        valor: false
      },
      {
        id: 7,
        carro: 'Corolla Cross',
        montadora: 'Toyota',
        preço: 110000,
        tipo: 'Sedan',
        valor: false
      },
      {
        id: 8,
        carro: 'Compass',
        montadora: 'Jeep',
        preço: 132000,
        tipo: 'SUV',
        valor: false
      },
      {
        id: 9,
        carro: 'Golf GTI',
        montadora: 'Volkswagen',
        preço: 138000,
        tipo: 'Hatch',
        valor: false
      }
    ],
    list: [],
  }

  AddCar = (x) => {
      this.setState({
        list: this.state.list.concat(x),
        cars: this.state.cars.map((item) => {
          if(x.id == item.id){
          //  alert("Oi, tô vivo") 
           return {
              ...item,
              valor: true
            }
          }else{
            return item
          } 
        })
      }, () => console.log(this.state)) 
  }
  //alert(JSON.stringify(item)) 

  RmvCar = (id) => {
    this.setState({
      list: this.state.list.filter((item) => {
        return item.id !== id
      })
    })
    this.setState({
      cars: this.state.cars.map((item) => {
        if(item.id == id){
          return{
          ...item,
          valor: false
        } 
        }else{
          return item 
        }
      })
    })
  }

  ClearAll = () => {
    this.setState({
      cars: this.state.cars.map((item) => {
        return{
          ...item,
          valor: false
        } 
      }),
      list:[]
    })
  }
  
  render() {
    return (
      <div>
        <TitleCar>Loja de Carros</TitleCar>
        <Box>
          <Container>
            {this.state.cars.map((item) => (
              <BoxCard draggable
              ativo={item.valor}
              >
                <BoxAddCar className="boxHover">
                  <p><b>{item.carro}</b></p>
                  <button onClick={() => {
                      this.AddCar(item)
                    }}
                   disabled={item.valor}
                  >
                    <ImgButtonAdd src={AddImg} alt="botão adicionar" />
                  </button>
                  </BoxAddCar>
                  <BoxParagraph>
                    <li><b>Montadora: </b>{item.montadora}</li>
                    <li><b>Preço: </b>{item.preço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', currencydisplay: 'symbol' })}</li>
                    <li><b>Tipo: </b>{item.tipo}</li>
                    {/* <li><p>Valor: {JSON.stringify(item.valor)}</p></li> */}
                  </BoxParagraph>
              </BoxCard>
            ))}
          </Container>
          <BoxContainer>
          <BoxCar>
            <div>
              {this.state.list.map((item, id) => (
                <BoxCardRmv>
                  <BoxRmv key={id}>
                    <p><b>{item.carro}</b></p>
                    <ImgButtonRmv onClick={() => {
                      this.RmvCar(item.id)
                    }} src={RmvImg} alt="botão remover" />
                  </BoxRmv>
                  <BoxType>
                    <p><b>Tipo:</b> {item.tipo}</p>
                    <p><b>Preço:</b> {item.preço.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', currencydisplay: 'symbol' })}</p>
                  </BoxType>
                </BoxCardRmv>
              ))}
            </div>
            {/* <div>
              <CarImg src={Img} alt="carro preto" />
              <p>Arraste seus carros aqui :)</p>
            </div>  */}
          </BoxCar>
          <BoxTotal>
          <Total>Total: </Total>
          <Total>{this.state.list.reduce((price, cars) => price + cars.preço, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', currencydisplay: 'symbol' })}</Total>
          
        </BoxTotal>
          </BoxContainer>
        </Box>
        <button onClick={this.ClearAll}>Limpar </button>
      </div>
    )
  }
}

export default App;

// localStorage.setItem("blablabla', JSON.stringify(carroquevaisermandado))
// localStorage.getItem("blablabla')
// JSON.parse(localStorage.getItem('blablabla"))
//draggable