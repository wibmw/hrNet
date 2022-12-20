import { useState } from 'react'
import Input from '../../components/forms/InputText'
import DatePicker from '../../components/forms/DatePicker'
import Select from '../../components/forms/Select'
import { depatementOptions, statesOptions } from '../../utils/localDatas'

const CreateEmployee = () => {
  const [formState, setFormState] = useState<IForm>(),
    save = () => {
      Object.values(formState).map(state => {
        console.log(state)
      })
      
    }

  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='form-content'>
          <h1>Create Employee</h1>
          {/** *********** Form ******************/}
          <form>
            {/** *********** Firstname Input ******************/}
            <Input name='firstName' label='First Name' regexp={/^[a-zA-Zéèàçùê -]{2,50}$/} message='Invalid First Name !' setFormState={setFormState} />
            {/** *********** Lastname Input ******************/}
            <Input name='lastName' label='Last Name' regexp={/^[a-zA-Zéèàçùê -]{2,50}$/} message='Invalid Last Name !' setFormState={setFormState} />
            {/** *********** Birth's Date Picker ******************/}
            <DatePicker name='birthDate' label='Date of Birth' message='Invalid Birth Date !' setFormState={setFormState} />
            {/** *********** Start Date Picker ******************/}
            <DatePicker name='startDate' label='Start Date' message='Invalid Start Date !' setFormState={setFormState} />
            <fieldset className='input-wrapper'>
              <legend>Address</legend>
              {/** *********** Street Input ******************/}
              <Input name='street' label='Street' regexp={/^[a-zA-Z0-9éèàçùê -]{2,120}$/} message='Invalid Street !'  setFormState={setFormState} />
              {/** *********** City Input ******************/}
              <Input name='city' label='City' regexp={/^[a-zA-Zéèàçùê -]{2,50}$/} message='Invalid City !'  setFormState={setFormState} />
              {/** *********** State Selelct ******************/}
              <Select name='state' label='State' options={statesOptions} message='Invalid State !' setFormState={setFormState} />
              {/** *********** Zip Code Input ******************/}
              <Input name='zipCode' label='Zip Code' regexp={/^[0-9]{4,5}$/} message='Invalid Zip Code !'  setFormState={setFormState} />
            </fieldset>
            {/** *********** Department Selelct ******************/}
            <Select name='department' label='Department' options={depatementOptions} message='Invalid Departement !' setFormState={setFormState} />
            <br />
            {/** *********** Button ******************/}
            <div
              className='form-button'
              onClick={async () => {
                await save()
              }}
            >
              Save
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default CreateEmployee

export interface IForm {
  firstName: string | null
  lastName: string | null
  isFirstNameValid: boolean
  isLastNameValid: boolean
}

