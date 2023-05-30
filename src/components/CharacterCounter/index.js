import {Component} from 'react'
import {v4} from 'uuid'
import {
  CharacterCounterContainer,
  ResultContainer,
  InputContainer,
  Heading,
  Image,
  Form,
  Input,
  CustomButton,
  WordList,
  Word,
  Para,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {inputValue: '', characterCountList: []}

  onAddCharacter = event => {
    event.preventDefault()
    this.setState(prevState => {
      const word = prevState.inputValue
      const id = v4()
      const count = word.length
      const obj = {id, word, count}
      return {
        characterCountList: [...prevState.characterCountList, obj],
        inputValue: '',
      }
    })
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, characterCountList} = this.state

    return (
      <CharacterCounterContainer>
        <ResultContainer>
          <Heading>
            Count the characters like a <br />
            Boss...
          </Heading>
          {characterCountList.length < 1 ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <WordList>
              {characterCountList.map(eachWord => {
                const {id} = eachWord
                return (
                  <Word key={id}>
                    <Para>
                      {eachWord.word}: {eachWord.count}
                    </Para>
                  </Word>
                )
              })}
            </WordList>
          )}
        </ResultContainer>
        <InputContainer>
          <Heading char>Character Counter</Heading>
          <Form onSubmit={this.onAddCharacter}>
            <Input
              type="text"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.onChangeInput}
            />
            <CustomButton type="submit">Add</CustomButton>
          </Form>
        </InputContainer>
      </CharacterCounterContainer>
    )
  }
}
export default CharacterCounter
