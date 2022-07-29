import { connect } from 'react-redux';
import Card from './card';
import { getPostAuthor } from "@src/actions/posts/postsActions";
import { AppStates } from '@src/core/types/states';

const mapStateToProps = (state: AppStates) => {
    return {
        AuthorStates: state.AuthorStates
    }
}

const mapDispatchToProps = {
    getPostAuthor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)