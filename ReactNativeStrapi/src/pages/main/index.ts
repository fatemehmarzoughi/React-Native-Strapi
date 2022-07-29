/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import Main from './App';
import { connect } from 'react-redux';
import { AppStates } from "@src/core/types/states";
import { getAllPosts } from "@src/actions/posts/postsActions";
import { setLanguageToEn, setLanguageToFa } from '@src/actions/global/globalActions';


const mapStateToProps = (state: AppStates) => {
  console.log('state.GlobalStates.locale')
  console.log(state.GlobalStates.locale)
  return {
    PostsStates: state.PostsStates,
    locale: state.GlobalStates.locale,
  }
}

const mapDispatchToProps = {
  getAllPosts,
  setLanguageToFa,
  setLanguageToEn,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);