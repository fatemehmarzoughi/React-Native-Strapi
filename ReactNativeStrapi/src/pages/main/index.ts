/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import Main from './App.tsx';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/posts/postsActions.ts';


const mapStateToProps = (state) => {
    return {
      PostsStates: state.PostsStates,
    }
  }
  
  const mapDispatchToProps = {
    getAllPosts,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);