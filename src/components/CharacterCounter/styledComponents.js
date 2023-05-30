import styled from 'styled-components'

export const CharacterCounterContainer = styled.div`
  display: flex;
  text-align: center;

  background-color: black;
`
export const InputContainer = styled.div`
  flex-basis: 50%;
  padding: 30px 20px;
  height: 100vh;
  background-color: #0f172a;
`
export const ResultContainer = styled(InputContainer)`
  background-color: #ffc533;
`
export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 40px;
  text-align: ${props => (props.char ? 'center' : 'start')};
  color: ${props => (props.char ? '#ffbf1f' : '#272c47')};
  background-color: ${props => (props.char ? 'none' : '#ffbf1f')};
  padding: 10px;
  border-radius: 5px;
`
export const Image = styled.img`
  width: 80%;
`
export const Form = styled.form``
export const Input = styled.input`
  width: 70%;
  height: 40px;
  text-align: start;
  display: inline-block;
  padding-left: 10px;
  outline: none;
`
export const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: #ffbf1f;
  border-style: none;
  outline: none;
  height: 40px;
  margin-left: 20px;
  width: 100px;
  border-radius: 8px;
`
export const WordList = styled.ul`
  padding-left: 0;
`
export const Word = styled.li`
  list-style-type: none;
  text-align: start;
  margin-bottom: 20px;
`
export const Para = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #1e293b;
`
