import { connect } from 'react-redux';
import Card from './card.tsx';
import { getPostAuthor } from "../../actions/posts/postsActions";

const mapStateToProps = (state) => {
    return {
        AuthorStates: state.AuthorStates
    }
}

const mapDispatchToProps = {
    getPostAuthor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)