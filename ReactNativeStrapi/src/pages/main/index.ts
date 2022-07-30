/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import Main from './App';
import { connect } from 'react-redux';
import { AppStates } from "@src/core/types/states";
import { getAllPosts } from "@src/actions/posts/postsActions";
import { setLanguage } from '@src/actions/global/globalActions';


const mapStateToProps = (state: AppStates) => {
  return {
    PostsStates: state.PostsStates,
    locale: state.GlobalStates.locale,
  }
}

const mapDispatchToProps = {
  getAllPosts,
  setLanguage,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);