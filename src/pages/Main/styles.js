import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  background: #dedede;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    border: 1px #eee;
    padding: 10px 15px;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #9157c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
