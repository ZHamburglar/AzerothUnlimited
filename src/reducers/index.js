import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ServerReducer from './ServerReducer';
import SelectedServerId from './ServerSelectionReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import CSReducer from './CSReducer';
import CharacterListReducer from './CharacterListReducer';
import CharacterSelectReducer from './CharacterSelectReducer';

export default combineReducers({
  auth: AuthReducer,
  server: ServerReducer,
  selectedServerId: SelectedServerId,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  characterSearch: CSReducer,
  characterList: CharacterListReducer,
  characterSelect: CharacterSelectReducer
});
