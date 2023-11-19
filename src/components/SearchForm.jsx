import Wrapper from "../assets/wrappers/SearchForm";
import {Form, useNavigation} from 'react-router-dom';

 const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state ==='submitting';
  return (
    <Wrapper>
      <Form classname='form'>
        <input type='search' name="search" className="form-input" defaultValue="searchTerm"/>
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
          search</button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm;