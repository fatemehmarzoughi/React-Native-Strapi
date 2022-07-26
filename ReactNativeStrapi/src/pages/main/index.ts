/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import Main from './App';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/posts/postsActions';
import { AppStates } from '../../core/types/states';


const mapStateToProps = (state: AppStates) => {
  return {
    PostsStates: state.PostsStates,
  }
}

const mapDispatchToProps = {
  getAllPosts,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);