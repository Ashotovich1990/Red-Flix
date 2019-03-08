import {connect} from 'react-redux';
import MyList from './my_list';
import {withRouter} from 'react-router-dom';


export default withRouter(connect(null,null)(MyList));